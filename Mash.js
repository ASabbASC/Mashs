//Step 1
function mash(){
return "You live in a "+getHome()+", and will have " +getChildrenCount()+" kids, and you drive a "+ getCar();
}
console.log(mash())
// Step 2
function getHome(){
    let random = ["Mansion", "Apartment", 
    "Shack", "House"]
    random.push(process.argv[2])
    return random[Math.floor(Math.random()*random.length)];

}
console.log(getHome());
// Step 3
function getChildrenCount(){
    return Math.floor(Math.random()*100);
}
//Step 4
function getCar(){
    let randomCar = ["Lambo", "Converible", 
    "Bugatti","Koen"]
    return randomCar[Math.floor(Math.random()*randomCar.length)];
}

