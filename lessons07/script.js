console.log(document.body)


const ref = {
    nav : document.querySelector('.nav'),
    list : document.querySelector('.list'),
    listItem : document.querySelectorAll('.list-item'),
    btn: document.querySelector('.btn'),
    container: document.querySelector('.container'),
}

const baseComponents = {
    urlToImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2016%2F12%2F01%2F1060170%2Fd9e41c50f6851805aaf7e26c7f8b62d1.jpg&f=1&nofb=1"
}

const changeBackground = (uri) => {
    ref.nav.style.backgroundImage = `url(${uri})`
}

// changeBackground('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2016%2F12%2F01%2F1060170%2Fd9e41c50f6851805aaf7e26c7f8b62d1.jpg&f=1&nofb=1')



// console.log(ref.nav.querySelector('.list').querySelectorAll('.list-item'))

// ref.listItem.forEach(elem => {
//     console.log(elem)
//     elem.style.color = 'red'
    
// })


// ref.btn.onclick = () => {
//     changeBackground(baseComponents.urlToImage)
// }

// ref.list.innerHTML = `<div class="nav">
// <ul class="list">
//     <li class="list-item">HOME</li>
//     <li class="list-item">CONTACT</li>
//     <li class="list-item">ABOUT</li>
//     <li class="list-item">EXIT</li>
// </ul>
// </div>`


// ref.list.innerHTML = ''

//------------------------


const createElem = (tag, className, text) => {
    const elem = document.createElement(tag);
    elem.classList.add(className);
    if(text){
        elem.textContent = text
    }
    return elem
}   

// const res = createElem('div', 'box')
// const resText = createElem('h2', 'text', 'work')
// ref.container.append(res)
// ref.container.querySelector('.box').append(resText)

const arr = ['one', 'two', 'three']

arr.forEach(element => {
    ref.container.append(createElem('h2', 'text',element ))
    
});

ref.container.querySelectorAll('.text').forEach(elem => elem.onclick = () => elem.style.color = 'red')