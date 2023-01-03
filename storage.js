class Storage{
    
    static addMovieToStorage (newMovie){
        
        let movies = this.getMovieFromStorage();

        movies.push(newMovie);

        localStorage.setItem ("movies", JSON.stringify (movies));
    }
    static getMovieFromStorage (){
        let movies;
        if (localStorage.getItem('movies') == null){
            movies = [];
        }
        else {
            movies = JSON.parse(localStorage.getItem('movies'));
        }
        return movies;
    }
    static deleteMovieFromStorage(movieTitle){
        let movies = this.getMovieFromStorage();

        movies.forEach(function(movie,index){
            if (movie.title == movieTitle){
                movies.splice(index, 1);
            }
        });
        localStorage.setItem ("movies", JSON.stringify (movies));
    }
    static clearAllMovieFromStorage (){
        localStorage.removeItem("movies");
    }
}