const arr = [1,5,10,"olá",true]


let soNumeros = arr.some(function (el){

    return  typeof el === "number" 
})


console.log(soNumeros)

arr.filter(function (el, i, _arr){
       
        return true
})

console.log(arr)



const arr2 = arr.forEach(function (el, i , _arr){
    console.log()
})