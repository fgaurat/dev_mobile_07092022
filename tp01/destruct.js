const arr =[10,20,30,40]

const [a,b,...c] = arr
// // console.log(a,b,c)
// const r = add(10,20,30,40)
// console.log(r)

// const r = add(30,40)
const r = add(...c)
console.log(r)

function add(...arr){
    result =0
    for(const i of arr){
        result+=i
    }

    return result
}



const o = {name:"GAURAT",firstName:"fred",age:46,job:"dev"}

const {name,firstName,...lereste} = o
console.log(name,firstName,lereste)

const o1 = {...o}

o1.name = "TUTU"

console.log(o)
console.log(o1)



