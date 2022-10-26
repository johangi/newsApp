const newsSection = document.getElementById('newsSection')

window.onload = async function request(){
    const result = await fetch('https://newsapi.org/v2/everything?q=Biden&apiKey=863d0a6431664782b0f4495cb5da05cb')
    const response = await result.json();
    const result2 = response.articles
    for(i = 0; i < 25; i++){
        let output = `
        <div class='align-middle text-center mt-5'>
        <a href="${result2[i].url}" target="_blank" class="text-dark news-article"><img src='${result2[i].urlToImage}' width='1000px' class='border rounded-4 mb-3'></img>
        <h2>${result2[i].title}</h2></a>
        </div>
        `
        newsSection.innerHTML += output;
    }
    return response.articles[0]
}