export default function worksInsertions() {
  const $works = document.querySelector('.container-projects');
  const $template = document.getElementById('template-card').content;
  const $templateModal = document.getElementById('template-modal').content;
  const $fragment = document.createDocumentFragment();
  const $fragmentModal = document.createDocumentFragment();
  const worksContent = [
    {
      id: 'code-1',
      title: 'work1',
      description: 'reinaldo Lorem ipsum dolor sit amet consectetur. Mi sit urna at rutrum. Duis aliquam eu adipiscing leo hendrerit. Et volutpat lectus turpis leo adipiscing purus pulvinar proin',
      img: './assets/code1.webp',
      client_name: 'roberto',
      work_date: '28-11-91',
      kind_work: 'kind of project',
      url_page: 'https://codepen.io/your-work/',
    },
    {
      id: 'code-2',
      title: 'work2',
      description: 'reinaldo Lorem ipsum dolor sit amet consectetur. Mi sit urna at rutrum. Duis aliquam eu adipiscing leo hendrerit. Et volutpat lectus turpis leo adipiscing purus pulvinar proin',
      img: './assets/code2.webp',
      client_name: 'roberto',
      work_date: '28-11-91',
      kind_work: 'kind of project',
      url_page: 'https://codepen.io/your-work/',
    },
    {
      id: 'code-3',
      title: 'work3',
      description: 'reinaldo Lorem ipsum dolor sit amet consectetur. Mi sit urna at rutrum. Duis aliquam eu adipiscing leo hendrerit. Et volutpat lectus turpis leo adipiscing purus pulvinar proin',
      img: './assets/code3.webp',
      client_name: 'roberto',
      work_date: '28-11-91',
      kind_work: 'kind of project',
      url_page: 'https://codepen.io/your-work/',
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
    $templateModal.querySelectorAll('small')[1].textContent = el.client_name;
    $templateModal.querySelectorAll('small')[3].textContent = el.work_date;
    $templateModal.querySelectorAll('small')[5].textContent = el.kind_work;
    $templateModal.querySelectorAll('small')[7].innerHTML = `<a href='${el.url_page}' target='_blank' rel='noopener'>${el.url_page}/a>`;

    const $cloneModal = document.importNode($templateModal, true);
    $fragmentModal.appendChild($cloneModal);
  });
  $works.appendChild($fragment);
  document.querySelector('.projects').append($fragmentModal);
}