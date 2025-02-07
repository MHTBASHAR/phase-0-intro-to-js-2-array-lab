// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function  destructivelyAppendCat(name){
    return cats.push(name)
}
function  destructivelyRemoveFirstCat(){
    return cats.shift()
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    return [name, ...cats];
}
function removeLastCat(){
    return cats.slice(0, 2);
}
function removeFirstCat(){
    return cats.slice(1, cats.length);
}