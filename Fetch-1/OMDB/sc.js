// http://www.omdbapi.com/?apikey=b277cbff&s


async function movies(){
    let movie_name = document.querySelector("#movie_name").value;
    let res = await fetch(`http://www.omdbapi.com/?apikey=b277cbff&s=${movie_name}`);
    let data = await res.json();
    let myData = data.Search;
    appendMovies(myData);
}

function appendMovies(datafromAPI){
    datafromAPI.forEach(function(el){
        let card = document.createElement("div");
        let poster = document.createElement("img");
        poster.src = el.Poster;
        let title = document.createElement("p");
        title.innerText = el.Title;
        card.append(poster,title);
        document.querySelector("#display").append(card);
    });
}