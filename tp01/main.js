

function hello(name){

    const s = `Hello ${name}` // interpolation de variable


    for(i=0;i<10;i++){
        const name=`val ${i}`
        console.log(name)
    }
    s = "tiiti"

    if(true){
        let u = "yes"
        console.log("in if "+s)
    }

    console.log(s)

}


s = 12
console.log(s)

hello('Fred')
console.log(s)