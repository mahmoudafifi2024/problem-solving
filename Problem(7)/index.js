const isDiscount = true
const Discount = 0.10

let originalPrice = 100

const afterDiscount = originalPrice * Discount

function CostAfterDiscount(originalPrice){
    if(isDiscount === true){
        return originalPrice * Discount
    }else{
        return originalPrice
    }
}

console.log(CostAfterDiscount(1000))
console.log(CostAfterDiscount(8000))