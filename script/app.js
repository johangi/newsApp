const newsSection = document.getElementById('newsSection');
const searchBTN = document.getElementById('searchBTN');
const searchInput = document.getElementById('searchInput');
const egilNewsBTN = document.getElementById('homeBTN');
const loadNewsBtn = document.getElementById('loadNewsBtn')

async function request(){
    const fetchReq = await fetch('https://newsapi.org/v2/everything?q="Gay porn"&apiKey=863d0a6431664782b0f4495cb5da05cb');
    const response = await fetchReq.json();
    const result = response.articles;
    for(i = 0; i < 25; i++){
        let output = `
        <div class='align-middle text-center mt-5'>
        <a href="${result[i].url}" target="_blank" class="text-dark news-article"><img src='${result[i].urlToImage}' width='70%' class='border rounded-4 mb-3'></img>
        <h2 class="ps-5 pe-5">${result[i].title}</h2>
        <h5>${result[i].source.name}</h5></a>
        </div>
        `;
        newsSection.innerHTML += output;
    };
    loadNewsBtn.classList.add('d-none')
};

async function search(){
    let query = searchInput.value;
    const fetchRequest = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=863d0a6431664782b0f4495cb5da05cb`);
    const searchResponse = await fetchRequest.json();
    const result = searchResponse.articles;
    newsSection.innerHTML = ``;
    for(i = 0; i < 25; i = i+3){
        let output = `
    <div class="card-group" style="border-radius: 20%;">
        <div class="card m-3">
            <img src="${result[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${result[i].title}</h5>
            <p class="card-text">${result[i].description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">${result[i].source.name}</small>
            </div>
        </div>
        <div class="card m-3" style="border-radius: 20%;">
            <img src="${result[i+1].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${result[i+1].title}</h5>
            <p class="card-text">${result[i+1].description}</p>
            </div>
            <div class="card-footer">
            <small class="text-muted">${result[i+1].source.name}</small>
            </div>
        </div>
        <div class="card m-3" style="border-radius: 20%;">
            <img src="${result[i+2].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${result[i+2].title}</h5>
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
    loadNewsBtn.classList.add('d-none')
};

async function categories(query){
    loadNewsBtn.classList.add('d-none')
    const fetchReq = await fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=863d0a6431664782b0f4495cb5da05cb`);
    const searchRes = await fetchReq.json();
    const result = searchRes.articles;
    newsSection.innerHTML = ``;
    for(i = 0; i < result.length; i++){
        let output = `
        <div class='align-middle text-center mt-5 justify-content-center'>
        <a href="${result[i].url}" target="_blank" class="text-dark news-article"><img src='${result[i].urlToImage}' width='50%' class='border rounded-4 mb-3'></img>
        <h2 class="paddingRightLeft">${result[i].title}</h2>
        <h5>${result[i].source.name}</h5></a>
        </div>
        `;
        newsSection.innerHTML += output;
    };
}

searchInput.addEventListener('keydown', e =>{
    if(e.key === 'Enter'){
        search();
    }
})