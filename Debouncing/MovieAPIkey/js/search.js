async function searchMovies() {

    try {
        let movie_name = document.querySelector("#movie_name").value;
        let response = await fetch(`http://www.omdbapi.com/?apikey=b277cbff&s=${movie_name}`);

        let data = await response.json();

        let actual_data = data.Search;
        appendMovies(actual_data)

    }
    catch (error){
        console.log("Error:",error);
    }
}

function appendMovies(myData) {

    myData.forEach(function(el){
        let card = document.createElement("div");
        card.setAttribute("id","movieCard");

        let image = document.createElement("img");
        image.setAttribute("id","movieImage");
        image.src = el.Poster;

        let name = document.createElement("p");
        name.setAttribute("id","movieName");
        name.innerText = `Movie Name: ${el.Title}`;

        let year = document.createElement("p");
        year.setAttribute("id","year");
        year.innerText =`Year: ${el.Year}`;

        let p_div = document.createElement("div");
        p_div.setAttribute("id","pTagDiv");
        p_div.append(name,year);

        card.append(image,p_div);

        document.getElementById("movies").append(card);
    });
}

