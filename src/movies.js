// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// ONE LINE Arrow function version
const getAllDirectors = (arr) => arr.map(arrayElement => arrayElement.director)

// Traditional function version
// function getAllDirectors(array) {
//   let directorArray = array.map((arrayElement) => {
//     return arrayElement.director
//   }) 
//   return directorArray
//} //The getAllDirectors() function will receive (array), the .map() function will be applied to array, and arrayElement function will 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// LONG VERSION
// function howManyMovies(arr) {
//   let tempArray = arr.filter(drama => drama.director === 'Steven Spielberg' && drama.genre.includes('Drama'))
//   return tempArray.length
// }
// ONE LINE VERSION
const howManyMovies = (arr) => arr.filter(drama => drama.director === 'Steven Spielberg' && drama.genre.includes('Drama')).length

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// Long VERSION
// function scoresAverage(arr) {
//   let totalScore = arr.reduce((acc, val) => {
//     //console.log(number.score)
//     return acc + val.score;
//   }, 0);
//   let average = totalScore / arr.length;
//   // console.log(arr) // debug line
//   return Number(average.toFixed(2))
//   //return Math.floor(average * 100) / 100 //alternate method of 2 decimal rounding
// }
// Cleaner code VERSION
const scoresAverage = (arr) => {
  let sum = arr.reduce((acc, val) => {
    return acc + val.score
  }, 0);
  let average = sum / arr.length

  return Number(average.toFixed(2))
  //return isNaN(Number(average.toFixed(2))) ? 0 : Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (arr) => {
    let dramaArray = arr.filter((eachMovie) => eachMovie.genre.includes('Drama'))
    return isNaN(scoresAverage(dramaArray)) ? 0 : scoresAverage(dramaArray); // shorthand version of if-else statements
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(arr) {
//   return arr.sort((a,b)=>{
// return a.year- b.year
//   })
// }
// One line VERSION
const orderByYear = (array) => array.sort((a, b) => a.year - b.year)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(array) {
//   let variable = array.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1
//     } else if (a.title > b.title) {
//       return 1
//     } else {
//       return 0
//     }
//   })
// return variable.slice(0,20)
// }
// One line VERSION
const orderAlphabetically = (array) => array.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}