class UI{

    static addMovieToUI(newMovie){
        const movieList= document.getElementById("films");
        movieList.innerHTML += `
        <tr>
            <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
            <td>${newMovie.title}</td>
            <td>${newMovie.director}</td>
            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Remove Movie</a></td>
        </tr>`;
        console.log(movieList);
    }

    static  clearInputs(element1,element2,element3){
        element1.innerHTML = "";
        element2.innerHTML = "";
        element3.innerHTML = "";
    }

    static  displaysMessage(message, type){
        const cardBody = document.querySelector(".card-body");
        // alert
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        cardBody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },2500)
    }

    static loadAllMovies(movies){
        const movieList = document.getElementById("films");
        movies.forEach(function(movie){
            movieList.innerHTML += `
            <tr>
                <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
                <td>${movie.title}</td>
                <td>${movie.director}</td>
                <td><a href="#" id = "delete-movie" class = "btn btn-danger">Remove Movie</a></td>
            </tr>`;
        });
    }

    static deleteMovieFromUI(element){
        element.parentElement.parentElement.remove();
    }
    
    static clearAllMovieFromUI(){
        const movieList = document.getElementById("films");
        while (movieList.firstElementChild !== null){
            movieList.firstElementChild.remove();
        }
    }
}