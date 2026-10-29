console.log('data')

const data_start = [
    // цветки о нас 1 блок
    [
        ['-34.6vw', '-15vw'],
        ['18.75vw', '-2vw']
    ],
    // ценности
    [
        ['8vw', '0', '1.4vw 1.4vw 0 1.4vw', '21.6vw'],
        ['40vw', '-8vw', '0', '5vw'],
        ['55vw', '-2vw', '0', '14vw'],
        ['67vw', '-25vw', '1.4vw 1.4vw 1.4vw 0', '20.3vw'],
    ],
    // ценности поворот
    [
        ['rotate(-12deg)'],
        ['rotate(25deg)'],
    ],
]

const about_flowers = document.querySelectorAll('.about-flower');

about_flowers.forEach((point, i) => {
    point.style.left = data_start[0][i][0];
    point.style.top = data_start[0][i][1];
})

const about_values = document.querySelectorAll('.about-value');

about_values.forEach((point, i) => {
    point.style.left = data_start[1][i][0];
    point.style.top = data_start[1][i][1];
    point.style.borderRadius = data_start[1][i][2];
    point.style.width = data_start[1][i][3];
})

const about_values_rotate = document.querySelectorAll('.about-value-rot');

console.log(about_values_rotate)

about_values_rotate.forEach((point, i) => {
    point.style.transform = data_start[2][i][0];
})

/* const data_start = [
    //пункты меню
    [
        ['17.5%', '25vh'],
        ['57.8%', '14vh'],
        ['23.6%','34vh'],
        ['14.4%', '40vh'],
        ['36.4%', '44vh'],
        ['75.6%','27vh']
    ],
    //изображения карточек на главной
    [
        [`url('images/alpheratz.png')`],
        [`url('images/kratz.png')`],
        [`url('images/sirius.png')`]
    ],
    //плакаты на странице о нас
    [
        [`url('images/offer-1.png')`],
        [`url('images/offer-2.png')`],
        [`url('images/offer-3.png')`]
    ],
    //шоу-рум блок 2
    [
        [`url('images/sr-block2-1.jpg')`],
        [`url('images/sr-block2-2.jpg')`],
        [`url('images/sr-block2-1.jpg')`]
    ],
    //сияющая среда
    [
        [`url('images/wednesday-1.png')`],
        [`url('images/wednesday-2.png')`],
        [`url('images/wednesday-3.png')`]
    ],
    //наборы
    [
        [`url('images/set-1.png')`],
        [`url('images/set-2.png')`],
        [`url('images/set-3.png')`]
    ],
    //новые предложения
    [
        [`url('images/new-pos-1.png')`],
        [`url('images/new-pos-2.png')`],
        [`url('images/new-pos-3.png')`]
    ],
    //страница ошибки
    [
        ['63%', '-412px'],
        ['83%', '-256px'],
        ['58%', '-125px'],
        ['73%', '0']
    ]
]

const header_points = document.querySelectorAll('.header-point');

header_points.forEach((point, i) => {
    point.style.left = data_start[0][i][0];
    point.style.top = data_start[0][i][1];
}) */