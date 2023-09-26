export default function worksInsertions() {
  const $works = document.querySelector('.container-projects');
  const $template = document.getElementById('template-card').content;
  const $templateModal = document.getElementById('template-modal').content;
  const $fragment = document.createDocumentFragment();
  const $fragmentModal = document.createDocumentFragment();
  const worksContent = [
    {
      id: 'code-1',
      title: 'Weather API',
      description: 'WeatherAPI, made in CodeSandbox with Open-meteo-api and Geolocation (JavaScript), it provides the current weather conditions and a forecast for the next 4 days.',
      img: './assets/code1.jpg',
      made_by: 'Reinaldo Contreras',
      language: 'Vanilla JavaScript',
      url_page: 'https://v44lfz.csb.app/',
    },
    {
      id: 'code-2',
      title: 'aFirebaseApp',
      description: 'aFirebaseAPP Built in ReactJS, it provides user authentication, easy to configure, add notes, upload images with cludinary and many more things.',
      img: './assets/code2.jpg',
      made_by: 'Reinaldo Contreras',
      language: 'React JS, Firebase, Cloudinary, MaterialUI',
      url_page: 'https://github.com/sazukeR/aFirebaseApp',
    },
    {
      id: 'code-3',
      title: 'React-Heroes',
      description: 'Superheroes Search App is a web application built with React. It allows users to explore and search for DC and Marvel superheroes, providing detailed information about each character.',
      img: './assets/code3.jpg',
      made_by: 'Reinaldo Contreras',
      language: 'React JS',
      url_page: 'https://github.com/sazukeR/react-heroes-app',
    },
  ];
  worksContent.forEach((el) => {
    /// works ///

    $template.querySelector('a').setAttribute('href', `#${el.id}`);
    $template.querySelector('img').setAttribute('src', el.img);
    $template.querySelector('img').setAttribute('alt', el.title);
    $template.querySelector('p').textContent = el.description;

    const $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

    /// works modals ///

    $templateModal.querySelector('article').setAttribute('id', el.id);
    $templateModal.querySelector('img').setAttribute('src', el.img);
    $templateModal.querySelector('img').setAttribute('alt', el.img);
    $templateModal.querySelector('h4').textContent = el.title;
    $templateModal.querySelector('p').textContent = el.description;
    $templateModal.querySelectorAll('small')[1].textContent = el.made_by;
    $templateModal.querySelectorAll('small')[3].textContent = el.language;
    $templateModal.querySelectorAll('small')[5].innerHTML = `<a href='${el.url_page}' target='_blank' rel='noopener'>${el.title}</a>`;

    const $cloneModal = document.importNode($templateModal, true);
    $fragmentModal.appendChild($cloneModal);
  });
  $works.appendChild($fragment);
  document.querySelector('.projects').append($fragmentModal);
}