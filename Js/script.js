const loadCategory = async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    displayCategory(data.data.news_category)
}

const displayCategory = (categorys) =>{
    console.log(categorys)
    const tabContainer = document.getElementById('tab_container')
    categorys.slice(0,3).forEach(category =>{
        const div = document.createElement('div');
        div.innerHTML = `
        <button class="btn btn-active btn-ghost">${category.category_name}</button>
        `
        tabContainer.appendChild(div);
    })
}
loadCategory()