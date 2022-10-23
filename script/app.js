const apiKey = '863d0a6431664782b0f4495cb5da05cb';
const getURL = `https://newsapi.org/v2/everything?q=${userInput}&from=2022-10-21&sortBy=popularity&apiKey=${apiKey}`
const request = new Request(getURL)

fetch(request)
    .then(function(response) {
        console.log(response.json());
    })