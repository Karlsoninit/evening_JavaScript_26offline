/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  {
    preview: "./images/christ.jpg",
    fullview: "./images/christ-the-redeemer-Big.jpg",
    alt: "alt text 1"
  },
  {
    preview: "./images/man-and-woman.jpg",
    fullview: "./images/man-and-woman-Big.jpg",
    alt: "alt text 2"
  },
  {
    preview: "./images/people-inside.jpg",
    fullview: "./images/people-inside-building-Big.jpg",
    alt: "alt text 3"
  },
  {
    preview: "./images/photo-of-cloud.jpg",
    fullview: "./images/photo-of-cloud-Big.jpg",
    alt: "alt text 4"
  },
  {
    preview: "./images/two-men-performs.jpg",
    fullview: "./images/two-men-performs-Big.jpg",
    alt: "alt text 5"
  },
  {
    preview: "./images/woman-wearing.jpg",
    fullview: "./images/woman-wearing-Big.jpg",
    alt: "alt text 6"
  }
];

const refs = {
  gallery: document.querySelector(".image-gallery"),
  fullview: document.querySelector(".fullview"),
  preview: document.querySelector(".preview"),
  btnGroup: document.querySelector(".btn-group")
};

let nextCount = 0;
refs.fullview.innerHTML = `<img src='${galleryItems[0].fullview}'/>`;

const drawToHtml = galleryItems
  .map(
    (elem, indx) => `<li class='list-item'>
<img src='${elem.preview}' data-fullview='${elem.fullview}' data-pos='${indx}' />
</li>`
  )
  .join(" ");

// console.log(drawToHtml);

refs.preview.insertAdjacentHTML("beforeend", drawToHtml);

//--------------- with innerHTML
// galleryItems.reduce((acc, elem) => {
//   refs.preview.innerHTML += `<li>
//  <img src='${elem.preview}' />
// </li>`;
// }, "");

const handlePreviewHandler = evt => {
  console.log(nextCount);
  console.log("pos --->", evt.target.dataset.pos);
  nextCount = Number(evt.target.dataset.pos);
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log("fullview", evt.target.dataset.fullview);
  console.log("src", refs.fullview.querySelector("img").src);
  refs.fullview.querySelector("img").src = evt.target.dataset.fullview;
};

refs.preview.addEventListener("click", handlePreviewHandler);

const handleFullviewHandler = evt => {
  console.log(evt.target);

  evt.target.classList.toggle("full");
};

refs.fullview.addEventListener("click", handleFullviewHandler);
const handleClickBtn = evt => {
  if (evt.target.className === "next") {
    nextCount++;
    console.log("click next");
    console.log(nextCount);
    if (nextCount <= galleryItems.length) {
      refs.fullview.innerHTML = `<img src='${galleryItems[nextCount].fullview}'/>`;
    } else {
      nextCount = 0;
    }
  } else if (evt.target.className === "prev") {
    nextCount--;
    console.log("click prev");
    console.log(nextCount);
    refs.fullview.innerHTML = `<img src='${galleryItems[nextCount].fullview}'/>`;
  }
};

refs.btnGroup.addEventListener("click", handleClickBtn);
