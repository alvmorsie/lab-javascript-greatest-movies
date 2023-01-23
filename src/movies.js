// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(eachMovie => {
        return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
    })
    //console.log(stevenMovies)
    return stevenMovies.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }
    const totalScore = moviesArray.reduce((acc, eachMovie) => {
        if (eachMovie.score) {
            return acc + eachMovie.score
        }
        else {
            return acc
        }
    }, 0)

    return Number((totalScore / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const moviesDrama = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes('Drama')
    })
    return scoresAverage(moviesDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray]
    moviesCopy.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        }
        else if (a.year < b.year) {
            return -1
        }
        else {
            if (a.title > b.title) {
                return 1
            }
            else if (a.title < b.title) {
                return -1
            }
            return 0
        }
    })
    return moviesCopy

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMoviesCopy = JSON.parse(JSON.stringify(moviesArray))
    newMoviesCopy.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        }
        else if (a.title < b.title) {
            return -1
        }
        else {
            return 0
        }
    })
    if (newMoviesCopy.length > 20) {
        return newMoviesCopy.splice(20)
    }
    const moviesTitle = newMoviesCopy.map((eachMovie) => eachMovie.title)
    return moviesTitle


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
