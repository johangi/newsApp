// const date = new Date();
// const todaysDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;

// class Article{
//     constructor(){
//         this.apiKey = '863d0a6431664782b0f4495cb5da05cb';
//         this.articleURI = 'https://newsapi.org/v2/everything';
//     }

//     async homepage(){
//         const query = `${this.articleURI}?q=Biden&from=${todaysDate}&sortBy=popularity&apiKey=${this.apiKey}`;

//         return articles[0];
//     }

//     async articleSearch(search){
//         const query = `${this.articleURI}?q=${search}&from=${todaysDate}&sortBy=popularity&apiKey=${this.apiKey}`;

//         return articles[0];
//     }
// }
const newsSection = document.getElementById('newsSection')

async function request(){
    const result = await fetch('https://newsapi.org/v2/everything?q=Biden&apiKey=863d0a6431664782b0f4495cb5da05cb')
    const response = await result.json();
    console.log(response.articles[0])
    let output = `
    <img src='${response.articles[0].urlToImage}' width='1000px'></img>
    <h2>${response.articles[0].title}</h2>
    `
    newsSection.innerHTML += output;
    return response.articles[0]
}