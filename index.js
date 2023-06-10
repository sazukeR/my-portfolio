import hamburguerMenu from './burger_menu.js';
import showAndLessInfoAboutMe from './show_and_less_aboudMe.js';
import formValidation from './validations_forms.js';
import worksInsertions from './works_insertions.js';

document.addEventListener('DOMContentLoaded', () => {
  hamburguerMenu('.menu-btn', '.panel', '.front-page');
  showAndLessInfoAboutMe('.info-btn', '.more-info');

  if (window.location.href.indexOf('index.html') > -1 || window.location.href.indexOf('projects.html') > -1 || window.location.href.indexOf('') > -1) {
    // ejecutar función específica para página1.html
    worksInsertions();
  }
});

formValidation();