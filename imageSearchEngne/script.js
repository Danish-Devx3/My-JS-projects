const search = document.querySelector('input')
const search_btn = document.querySelector('button')
const img_container = document.querySelector('.imageConteiner')
const moreBtn = document.querySelector('.viewmore')
let page=1

search_btn.addEventListener('click', async () => {
    const search_value = search.value
    console.log(search_value,"search_value")
    if ( search_value === '' ) {
        alert('Please enter a search term')
        return
    }else {
        const key = 'RuJTeKhXAyF9G-9VlCJJv1NlEMuCgGCDgIS-2Brjv3E'
        const url = `https://api.unsplash.com/search/photos?page=1&query=${search_value}&client_id=${key}&per_page=12`
        let data = await fetch(url)
        data = await data.json()
        console.log(data,"data")
        displayImages(data)
    }
})

function displayImages(data){
    img_container.innerHTML = ''
    data.results.forEach(element => {
        console.log(element.urls.small,"element.urls.regular")
        const img = document.createElement('img')
        img.src=element.urls.small
        img_container.appendChild(img)
         moreBtn.style.display='block'
    });
}

function displayImagess(data){
    
    data.results.forEach(element => {
        console.log(element.urls.small,"element.urls.regular")
        const img = document.createElement('img')
        img.src=element.urls.small
        img_container.appendChild(img)
         moreBtn.style.display='block'
    });
}

moreBtn.addEventListener('click',async()=> {
    page++
    const search_value = search.value
    console.log(search_value,"search_value")
    if ( search_value === '' ) {
        alert('Please enter a search term')
        return
    }else {
        const key = 'RuJTeKhXAyF9G-9VlCJJv1NlEMuCgGCDgIS-2Brjv3E'
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search_value}&client_id=${key}&per_page=12`
        let data = await fetch(url)
        data = await data.json()
        console.log(data,"data")
        displayImagess(data)
       
    }
})