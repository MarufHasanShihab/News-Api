const loadCategory = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    displayCategory(data.data.news_category)
}

const displayCategory = (categorys) =>{
    const tabContainer = document.getElementById('tab_container')
    categorys.slice(0,3).forEach(category =>{
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="loadSingleNewsData('${category.category_id}')" class="btn btn-active btn-ghost">${category.category_name}</button>
        `
        tabContainer.appendChild(div);
    })
}

const loadSingleNewsData = async(id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    const data = await res.json()
    displayNews(data.data)
}

const displayNews = (allNews)=>{
    const cardContainer =  document.getElementById("news_container");
    cardContainer.textContent = "";
    console.log(allNews)
    allNews?.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.classList = "card w-92 bg-base-100 shadow-xl"
        newsCard.innerHTML = `
        <figure><img src="${news?.thumbnail_url}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">
            ${news.title.slice(0,50)}
            <div class="badge badge-secondary">${news.rating?.badge}</div>
            </h2>
            <p>${news.details.slice(0,50)}</p>
            <div class="flex justify-between items-center">
            <div class="flex items-center gap-4">
            <div>
            <img class="w-10 rounded-full" src="${news.author.img}">
            </div>
            <div>
            <h4>${news.author.name}</h4>
            <p>${news.author.published_date}</p>
            </div>
            </div>
            <div>
            <button class="btn btn-active btn-neutral">Details</button>
            </div>
            </div>
        </div>
        `
        cardContainer.appendChild(newsCard)
    })
}
loadCategory()