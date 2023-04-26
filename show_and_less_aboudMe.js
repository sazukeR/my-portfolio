export default function showAndLessInfoAboutMe(infoBtn, info) {
  document.addEventListener('click', (e) => {
    if (e.target.matches(infoBtn)) {
      document.querySelector(info).classList.toggle('show-info');
      document.querySelectorAll(infoBtn)[0].classList.toggle('info-btn-inactive');
      document.querySelectorAll(infoBtn)[1].classList.toggle('info-btn-inactive');
    }
  });
}