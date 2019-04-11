// Code your solution here

// function findMatching(array, string){
//     let result = array.filter(function(item){
//         return item.toLowerCase() === string.toLowerCase()
//     })
//     return result
// }

// function findMatching(array, string){
//     return array.filter(function(item){
//         return item.toLowerCase() === string.toLowerCase()
//     })
// }

function findMatching(array, string){
    return array.filter((item) => item.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
    return array.filter((item) => item.toLowerCase().slice(0, string.length) === string.toLowerCase())
}

function matchName(array, string){
    return array.filter( (item) => item.name.toLowerCase() === string.toLowerCase() )
}