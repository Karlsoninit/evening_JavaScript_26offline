// export default {
//   refs: {
//     container: document.querySelector('.news-container'),
//   },

//   template(data) {
//     return data
//       .map(
//         ({ title, description, urlToImage, url }) =>
//           `<li class='articleContainer'>
//           <a href='${url} target='_blank''>
//           <h2>${title}</h2>
//           <img src='${urlToImage}' />
//           <p>${description}</p>
//           </a>
//       </li>`,
//       )
//       .join(' ');
//   },
// };

export class Services {
  constructor({ key, baseName }) {
    this.baseUrl = 'http://newsapi.org/v2';
    this.key = key;
    this.baseName = baseName;
    this.page = 1;
    this.flagLoader = true;
    this.refs = {
      container: document.querySelector('.news-container'),
      nextPage: document.querySelector('.nextPage'),
      form: document.querySelector('form'),
      btn: document.querySelector('.btn'),
    };
  }

  fetchNews(news) {
    if (this.flagLoader) {
      this.loaderOn();
    }
    console.log('news', news);
    const data = fetch(
      `${this.baseUrl}/everything?q=${news ? news : this.baseName}&apiKey=${
        this.key
      }&page=${this.page}`,
    );

    return data;
  }

  nextPage() {
    this.page += 1;
    console.log(this.page);
  }

  resetPage(value) {
    this.baseName = value;
    this.page = 1;
    this.refs.container.innerHTML = '';
  }

  template(data) {
    const res = data
      .map(
        ({ title, description, urlToImage, url }) =>
          `<li class='articleContainer'>
              <a href='${url} target='_blank''>
              <h2>${title}</h2>
              <img src='${urlToImage}' />
              <p>${description}</p>
              </a>
          </li>`,
      )
      .join(' ');
    this.refs.container.insertAdjacentHTML('beforeend', res);
  }

  notFound() {
    this.refs.container.insertAdjacentHTML(
      'beforeend',
      '<h2>sorry, your query not found (:</h2>',
    );
  }

  loaderOn() {
    this.refs.container.insertAdjacentHTML(
      'beforeend',
      '<h2 class="loader">loading ...</h2>',
    );
  }

  loaderOf() {
    setTimeout(() => {
      window.document.querySelector('.loader').style.display = 'none';
    }, 2000);
    this.flagLoader = false;
  }
}
