console.log('data')

const data_start = [
    //
    [
        ['-34.6vw', '-15vw'],
        ['18.75vw', '-2vw']
    ]
]

const about_flowers = document.querySelectorAll('.about-flower');

about_flowers.forEach((point, i) => {
    point.style.left = data_start[0][i][0];
    point.style.top = data_start[0][i][1];
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