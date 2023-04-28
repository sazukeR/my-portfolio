export default function formValidation() {
  const $inputs = document.querySelectorAll('.form [required]');
  const $form = document.querySelector('.form');
  $inputs.forEach((input) => {
    const $span = document.createElement('span');
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add('form-error', 'none');
    input.insertAdjacentElement('afterend', $span);
  });
  document.addEventListener('keyup', (e) => {
    if (e.target.matches('.form [required]')) {
      const $input = e.target;
      const pattern = $input.pattern || $input.dataset.pattern;
      if (pattern && $input.value !== '') {
        const regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? document.querySelector(`span#${$input.name}`).classList.add('is-act')
          : document.querySelector(`span#${$input.name}`).classList.remove('is-act');
      }
      if (!pattern) {
        // if the input doesnt have a pattern atribbute
        return $input.value === ''
          ? document.querySelector(`span#${$input.name}`).classList.add('is-act')
          : document.querySelector(`span#${$input.name}`).classList.remove('is-act');
      }
    }
    return false;
  });
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert('Form was sended!');
    const $loader = document.querySelector('.contact-form-loader');
    const $resp = document.querySelector('.contact-form-response');
    $loader.classList.remove('none');
    fetch('https://formsubmit.co/ajax/reinaldojcg1@gmail.com', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((res) => (res.ok
        ? res.json()
        : Promise.recject(res)))
      .then((json) => {
        // console.log(json);
        $loader.classList.add('none');
        $resp.classList.remove('none');
        $resp.innerHTML = json.message;
        // localStorage
        localStorage.setItem('USER', e.target.name.value);
        $form.reset();
      })
      .catch((err) => {
        // console.log(err);
        const message = err.statusText || 'An error occurred while sending';
        $resp.innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        setTimeout(() => {
          $resp.classList.add('none');
          $resp.innerHTML = '';
        }, 3000);
      });
  });
}