/******/ (() => { // webpackBootstrap
console.log('data');
var data_start = [
// цветки о нас 1 блок
[['-34.6vw', '-15vw'], ['18.75vw', '-2vw']],
// ценности
[['8vw', '0', '1.4vw 1.4vw 0vw 1.4vw', '21.6vw'], ['40vw', '-8vw', '0', '5vw'], ['55vw', '-2vw', '0', '14vw'], ['67vw', '-25vw', '1.4vw 1.4vw 1.4vw 0', '20.3vw'],
//
['25vw', '-10vw', '0', '60vw'],
//
['5vw', '-23vw', '0', '18vw'], ['8vw', '-20vw', '0', '5vw'], ['20vw', '-7vw', '0', '17vw'], ['67vw', '-25vw', '0 1.4vw 1.4vw 1.4vw', '20vw'], ['90vw', '-40vw', '0vw', '5vw']],
// ценности поворот
[['rotate(-12deg)'], ['rotate(25deg)'], ['rotate(10deg)']],
// карточки поворот
[['rotate(5deg)'], ['rotate(-5deg)'], ['rotate(5deg)']],
// теги поворот
[['rotate(-20deg)'], ['rotate(15deg)'], ['rotate(-20deg)'],
//
['rotate(8deg)'], ['rotate(10deg)'], ['rotate(-20deg)'],
//
['rotate(-15deg)'], ['rotate(15deg)'], ['rotate(-15deg)']],
// теги положение
[['10vw', '-30vw'], ['-5vw', '-20vw'], ['25vw', '-23vw'],
//
['10vw', '-40vw'], ['0', '-21vw'], ['25vw', '-23vw'],
//
['12vw', '-38vw'], ['5vw', '-40vw'], ['23vw', '-24vw']]];
var about_flowers = document.querySelectorAll('.about-flower');
about_flowers.forEach(function (point, i) {
  point.style.left = data_start[0][i][0];
  point.style.top = data_start[0][i][1];
});
var about_values = document.querySelectorAll('.about-value');
about_values.forEach(function (point, i) {
  point.style.left = data_start[1][i][0];
  point.style.top = data_start[1][i][1];
  point.style.borderRadius = data_start[1][i][2];
  point.style.width = data_start[1][i][3];
});
var about_values_rotate = document.querySelectorAll('.about-value-rot');
about_values_rotate.forEach(function (point, i) {
  console.log(data_start[2][i][0]);
  point.style.transform = data_start[2][i][0];
});
var about_cards_rotate = document.querySelectorAll('.about-card');
about_cards_rotate.forEach(function (point, i) {
  point.style.transform = data_start[3][i][0];
});
var about_roles_rotate = document.querySelectorAll('.about-role-rot');
about_roles_rotate.forEach(function (point, i) {
  point.style.transform = data_start[4][i][0];
});
var about_roles = document.querySelectorAll('.about-role');
about_roles.forEach(function (point, i) {
  point.style.left = data_start[5][i][0];
  point.style.top = data_start[5][i][1];
});
/******/ })()
;