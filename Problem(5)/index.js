
let ProductPrice = 7

function Validity (ProductPrice){
    if(typeof ProductPrice === "number"){
        return "Valid"
    }else{
        return "Invalid"
    }
}

console.log(Validity(5))
console.log(Validity("ASD"))