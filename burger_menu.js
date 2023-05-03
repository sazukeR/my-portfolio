export default function hamburguerMenu(menuBtn, panel, ref) {
  const $panel = document.querySelector(panel);
  const $menuBtn = document.querySelector(menuBtn);
  const $ref = document.querySelector(ref);
  const { scrollTop } = document.documentElement;
  if ($ref) {
    if (scrollTop < $ref.offsetHeight - 30) $menuBtn.firstElementChild.classList.add('in-white');
    else $menuBtn.firstElementChild.classList.remove('in-white');
  }

  document.addEventListener('click', (e) => {
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      $panel.classList.toggle('is-active');
      $menuBtn.classList.toggle('is-active');
      $menuBtn.firstElementChild.classList.toggle('none');
      $menuBtn.lastElementChild.classList.toggle('none');
      $menuBtn.lastElementChild.classList.add('in-white');
    }
  });

  window.addEventListener('scroll', () => {
    const { scrollTop } = document.documentElement;
    if ($ref && scrollTop < $ref.offsetHeight - 30) $menuBtn.firstElementChild.classList.add('in-white');
    if ($ref && scrollTop > $ref.offsetHeight - 30) $menuBtn.firstElementChild.classList.remove('in-white');
  });
}