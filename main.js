/*
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(yesOrNoData => {
        console.log(yesOrNoData);
        console.log(yesOrNoData.length + " movies fetched");
        console.log(yesOrNoData[0])

        function logFilmInformation(numberInArray) {

            console.log(yesOrNoData[numberInArray].title + " is a movie from " + yesOrNoData[numberInArray].year + " that is " + yesOrNoData[numberInArray].running_times + " seconds long. It has a rating of " + yesOrNoData[numberInArray].rating + " out of " + yesOrNoData[numberInArray].votes + " votes.")
        }

        logFilmInformation(0);
        searchMovies()

        function filler(list, array) {
             for (let i = 0; i < array.length; i++) {
                 let createTitleTag = document.createElement("li");
                 let createYearTag = document.createElement("p");
                 let createRunTimeTag = document.createElement("p");
                 let createRatingTag = document.createElement("p");
                 let createVotesTag = document.createElement("p");
                 createTitleTag.appendChild(document.createTextNode(array[i].title));
                 createYearTag.appendChild(document.createTextNode("Year: " + array[i].year));
                 createRunTimeTag.appendChild(document.createTextNode("Running time: " + array[i].running_times));
                 createRatingTag.appendChild(document.createTextNode("Rating: " + array[i].rating));
                 createVotesTag.appendChild(document.createTextNode("Votes: " + array[i].votes));
                 list.appendChild(createTitleTag);
                 list.appendChild(createYearTag);
                 list.appendChild(createRunTimeTag);
                 list.appendChild(createRatingTag);
                 list.appendChild(createVotesTag);
             }
         }
         let ul = document.getElementById("list");
         filler(ul, yesOrNoData)
 */

//Create a button with the text Get newer movies.
// When clicked it should only show movies that came out after 2014.
        /*
                const selectButton = document.querySelector("button");
                let ul = document.getElementById("list");

                selectButton.addEventListener('click', function (){
                    for (let i = 0; i < yesOrNoData.length; i++) {
                        if (yesOrNoData[i].year >= 2014){
                        let createTitleTag = document.createElement("li");
                        let createYearTag = document.createElement("p");
                        let createRunTimeTag = document.createElement("p");
                        let createRatingTag = document.createElement("p");
                        let createVotesTag = document.createElement("p");
                        createTitleTag.appendChild(document.createTextNode(yesOrNoData[i].title));
                        createYearTag.appendChild(document.createTextNode("Year: " + yesOrNoData[i].year));
                        createRunTimeTag.appendChild(document.createTextNode("Running time: " + yesOrNoData[i].running_times));
                        createRatingTag.appendChild(document.createTextNode("Rating: " + yesOrNoData[i].rating));
                        createVotesTag.appendChild(document.createTextNode("Votes: " + yesOrNoData[i].votes));
                        ul.appendChild(createTitleTag);
                        ul.appendChild(createYearTag);
                        ul.appendChild(createRunTimeTag);
                        ul.appendChild(createRatingTag);
                        ul.appendChild(createVotesTag);
                    }}
                })


            )
        */



const moviesCardTemplate = document.querySelector("[data-movies-template]")
const moviesCardContainer = document.querySelector("[data-movies-cards-container]")
const searchInput = document.querySelector("[data-search]")


let movies = [];
console.log(movies)

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    movies.forEach(movie => {
        const isVisible = movie.title.toLowerCase().includes(value)
        movie.element.classList.toggle("hide", !isVisible)

    })
})

fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(res => res.json())
    .then(data => {
   movies = data.map(movie => {
        const card = moviesCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = movie.title
        body.textContent = movie.rating
        moviesCardContainer.append(card)
        return { title: movie.title, rating: movie.rating, element: movies-card }
        })
    })


