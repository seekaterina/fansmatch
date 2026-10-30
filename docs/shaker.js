/******/ (() => { // webpackBootstrap
(function () {
  // ---------- Настройки ----------
  var MOBILE_QUERY = '(max-width: 768px)';
  var WALL = 200; // толщина невидимых стен, px

  // ---------- Элементы страницы ----------
  var root = document.getElementById('shaker');
  var field = document.getElementById('shakerField');
  var items = Array.prototype.slice.call(field.querySelectorAll('.shaker__item'));
  var M = Matter;
  var engine, runner, mouseConstraint;
  var bodies = [];
  function isMobile() {
    return window.matchMedia(MOBILE_QUERY).matches;
  }

  // ---------- Создание физического мира ----------
  function buildWorld() {
    destroyWorld();
    var W = root.clientWidth;
    var H = root.clientHeight;
    var mobile = isMobile();
    engine = M.Engine.create();
    engine.gravity.x = 0;
    engine.gravity.y = 1;

    // Стены: пол, потолок, левая и правая
    var wallOptions = {
      isStatic: true
    };
    M.World.add(engine.world, [M.Bodies.rectangle(W / 2, H + WALL / 2, W + WALL * 2, WALL, wallOptions), M.Bodies.rectangle(W / 2, -WALL / 2, W + WALL * 2, WALL, wallOptions), M.Bodies.rectangle(-WALL / 2, H / 2, WALL, H * 2, wallOptions), M.Bodies.rectangle(W + WALL / 2, H / 2, WALL, H * 2, wallOptions)]);

    // Тело для каждого элемента
    bodies = items.map(function (el) {
      var w = el.offsetWidth;
      var h = el.offsetHeight;
      var x = parseFloat(mobile ? el.dataset.mx : el.dataset.x) / 100 * W;
      var y = parseFloat(mobile ? el.dataset.my : el.dataset.y) / 100 * H;
      var options = {
        restitution: 0.5,
        friction: 0.2,
        frictionAir: 0.01,
        density: 0.001,
        angle: (Math.random() - 0.5) * 0.4
      };
      var body;
      if (el.dataset.shape === 'circle') {
        body = M.Bodies.circle(x, y, Math.min(w, h) / 2 * 0.85, options);
      } else {
        body = M.Bodies.rectangle(x, y, w * 0.8, h * 0.8, options);
      }
      body.elWidth = w;
      body.elHeight = h;
      body.el = el;
      return body;
    });
    M.World.add(engine.world, bodies);

    // Мышка и палец: хватаем элемент и бросаем
    var mouse = M.Mouse.create(root);
    // чтобы страница нормально скроллилась колесом
    root.removeEventListener('mousewheel', mouse.mousewheel);
    root.removeEventListener('DOMMouseScroll', mouse.mousewheel);
    mouseConstraint = M.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
    M.World.add(engine.world, mouseConstraint);
    runner = M.Runner.create();
    M.Runner.run(runner, engine);
    M.Events.on(engine, 'afterUpdate', updateElements);
    updateElements();
  }
  function destroyWorld() {
    if (runner) {
      M.Runner.stop(runner);
    }
    if (engine) {
      M.World.clear(engine.world);
      M.Engine.clear(engine);
    }
    mouseConstraint = null;
    bodies = [];
  }

  // ---------- Перенос положения тел на div-ы ----------
  function updateElements() {
    for (var i = 0; i < bodies.length; i++) {
      var body = bodies[i];
      var x = body.position.x - body.elWidth / 2;
      var y = body.position.y - body.elHeight / 2;
      body.el.style.transform = 'translate(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px) rotate(' + body.angle.toFixed(3) + 'rad)';
    }
  }

  // ---------- Наклон телефона ----------
  function onOrientation(e) {
    if (!isMobile() || !engine || e.gamma === null || e.beta === null) {
      return;
    }
    var gamma = e.gamma * Math.PI / 180; // влево-вправо
    var beta = e.beta * Math.PI / 180; // вперёд-назад

    var gx = Math.sin(gamma);
    var gy = Math.sin(beta);
    engine.gravity.x = Math.max(-1, Math.min(1, gx));
    engine.gravity.y = Math.max(-1, Math.min(1, gy));
  }
  function enableTilt() {
    window.addEventListener('deviceorientation', onOrientation);
  }
  function initTilt() {
    var needPermission = typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function';

    // На iPhone датчик без разрешения не работает, там остаётся управление пальцем
    if (!needPermission) {
      enableTilt();
    }
  }

  // ---------- Запуск ----------
  function waitForImages() {
    var images = Array.prototype.slice.call(field.querySelectorAll('img'));
    return Promise.all(images.map(function (img) {
      if (img.complete) {
        return Promise.resolve();
      }
      return new Promise(function (resolve) {
        img.addEventListener('load', resolve);
        img.addEventListener('error', resolve);
      });
    }));
  }

  // Пересобираем мир только при смене ширины
  // (на телефоне высота меняется при скролле из-за адресной строки)
  var lastWidth = window.innerWidth;
  var resizeTimer;
  window.addEventListener('resize', function () {
    if (window.innerWidth === lastWidth) {
      return;
    }
    lastWidth = window.innerWidth;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildWorld, 200);
  });
  waitForImages().then(function () {
    buildWorld();
    initTilt();
  });
})();
/******/ })()
;