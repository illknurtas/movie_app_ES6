const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.getElementById("clear-films");

eventListener();
function eventListener() {
    form.addEventListener('submit',addMovie);
    document.addEventListener("DOMContentLoaded", function(){
        let movies = Storage.getMovieFromStorage();
        UI.loadAllMovies(movies);
    });
    cardBody.addEventListener("click",deleteMovie);
    clear.addEventListener("click",clearAllMovie);
}

function addMovie(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "" ){
        // error
        UI.displaysMessage("Please fill all the fields!","danger");
    }
    else{
        // new movie
        const newMovie = new Movie(title, director, url);

        UI.addMovieToUI(newMovie);
        Storage.addMovieToStorage(newMovie);

        UI.displaysMessage("New movie added successfully!","success");
        
    }
    UI.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}

function deleteMovie(e){
    if (e.target.id === "delete-movie"){
        UI.deleteMovieFromUI(e.target);

        Storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        
        UI.displaysMessage("Movie deleted successfully!","success");
    }
}

function clearAllMovie(){
    if (confirm("Are you sure to delete all?")){
        UI.clearAllMovieFromUI();
        Storage.clearAllMovieFromStorage();
    }
}