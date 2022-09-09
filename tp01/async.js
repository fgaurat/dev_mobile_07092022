
function getTodo(todoId){

    const p = new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            const r = {id:todoId,title:`Todo : ${todoId}`,completed:false}
            resolve(r)
    
        },1000)
    })

    return p
}


// const pTodo = getTodo(1)
//     .then( (todo) =>{ 
//         console.log(todo)
//         return getTodo(todo.id+1)
//     })
//     .then( (todo) =>{ 
//         console.log(todo)
//         return getTodo(todo.id+1)
//     })
//     .then( (todo) =>{ 
//         console.log(todo)
//         return getTodo(todo.id+1)
//     })
//     .then( (todo) =>{ 
//         console.log(todo)
//         return getTodo(todo.id+1)
//     })



    // const ptodo1 = getTodo(1)
    // const ptodo2 = getTodo(2)
    // const ptodo3 = getTodo(3)
    // const ptodo4 = getTodo(4)

    // Promise.all([ptodo1,ptodo2,ptodo3,ptodo4]).then( arr => console.log(arr))



    async function main(){

        const todo1 = await getTodo(1)
        console.log(todo1)
        const todo2 = await getTodo(todo1.id+1)
        console.log(todo2)
        const todo3 = await getTodo(todo2.id+1)
        console.log(todo3)
        const todo4 = await getTodo(todo3.id+1)     
        console.log(todo4)
    }

    main()