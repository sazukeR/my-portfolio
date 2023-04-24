import hamburguerMenu from './burger_menu.js';
import showAndLessInfoAboutMe from './show_and_less_aboudMe.js';

document.addEventListener('DOMContentLoaded', () => {
  hamburguerMenu('.menu-btn', '.panel', '.front-page');
  showAndLessInfoAboutMe('.info-btn', '.more-info');
});