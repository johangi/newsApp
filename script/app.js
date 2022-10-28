const newsSection = document.getElementById('newsSection');
const searchBTN = document.getElementById('searchBTN');
const searchInput = document.getElementById('searchInput');
const egilNewsBTN = document.getElementById('homeBTN');
const loadNewsBtn = document.getElementById('loadNewsBtn')

async function categories(query){
    loadNewsBtn.classList.add('d-none')
    const fetchReq = await fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=0ce5e7b82aeb4cdcbd6106237e4e4b3b`);
    const searchRes = await fetchReq.json();
    const result = searchRes.articles;
    newsSection.innerHTML = ``;
    for(i = 0; i < result.length; i++){
        let output = `
        <div class="card-group">
        <div class="card m-3">
            <img src="${result[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><a href="${result[i].url}" style="text-decoration: none; color: #6A7A8Eff;">${result[i].title}</a></h5>
            <p class="card-text">${result[i].description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">${result[i].source.name}</small>
            </div>
        </div>
        <div class="card m-3">
            <img src="${result[i+1].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"<a href="${result[i].url}" style="text-decoration: none; color: #6A7A8Eff;">${result[i].title}</a></h5>
            <p class="card-text">${result[i+1].description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">${result[i+1].source.name}</small>
            </div>
        </div>
        <div class="card m-3">
            <img src="${result[i+2].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><a href="${result[i].url}" style="text-decoration: none; color: #6A7A8Eff;">${result[i].title}</a></h5>
            <p class="card-text">${result[i+2].description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">${result[i+2].source.name}</small>
            </div>
        </div>
        </div>
        `;
        newsSection.innerHTML += output;
    };
}

async function search(){
    loadNewsBtn.classList.add('d-none');
    let query = searchInput.value;
    const fetchRequest = await fetch(`https://newsapi.org/v2/everything?q="${query}"&apiKey=863d0a6431664782b0f4495cb5da05cb`);
    const searchResponse = await fetchRequest.json();
    const result = searchResponse.articles;
    newsSection.innerHTML = ``;
    for(i = 0; i < 25; i = i+3){
        let output = `
    <div class="card-group">
        <div class="card m-3">
            <img src="${result[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><a href="${result[i].url}" style="text-decoration: none; color: #6A7A8Eff;">${result[i].title}</a></h5>
            <p class="card-text">${result[i].description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">${result[i].source.name}</small>
            </div>
        </div>
        <div class="card m-3">
            <img src="${result[i+1].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><a href="${result[i+1].url}" style="text-decoration: none; color: #6A7A8Eff;">${result[i+1].title}</a></h5>
            <p class="card-text">${result[i+1].description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">${result[i+1].source.name}</small>
            </div>
        </div>
        <div class="card m-3">
            <img src="${result[i+2].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><a href="${result[i+2].url}" style="text-decoration: none; color: #6A7A8Eff;">${result[i+2].title}</a></h5>
            <p class="card-text">${result[i+2].description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">${result[i+2].source.name}</small>
            </div>
        </div>
    </div>
        `;
        newsSection.innerHTML += output;
    };
};

searchInput.addEventListener('keydown', e =>{
    if(e.key === 'Enter'){
        search();
    }
})