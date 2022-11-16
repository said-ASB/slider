const myarray = [
    {
        img : "./111.jpg",
        number : "1"
    },
    {
        img : "/22.jpeg",
        number : "2"
    },
    {
        img : "./333.jpg",
        number : "3"
    },
    {
        img : "./444.jpg",
        number : "4"
    },

]

const slider = document.querySelector(".slider")
 const nextbtn = document.querySelector(".nextbtn")
const prevbtn = document.querySelector(".prevbtn")
let indexarray = 0

window.addEventListener('DOMContentLoaded',()=>{
    index() 
})





function index(){
    let pic = myarray[indexarray]
       const insert =  `<div class = "contchild">
                            <img src=${pic.img} class ="img1">
                                <h2>${pic.number}</h2>
                         </div>`
    slider.innerHTML = insert
}

nextbtn.addEventListener('click',()=>{
    next()
    if(prevbtn.classList.contains('prevbtn') || prevbtn.classList.contains('hide')){
        prevbtn.classList.remove('prevbtn')
        prevbtn.classList.remove('hide')
        prevbtn.classList.add('active')
    }else{
        prevbtn.classList.add('prevbtn')
    }
})
prevbtn.addEventListener('click',()=>{
    prev()
    if(nextbtn.classList.contains('hide')){
        nextbtn.classList.remove('hide')
        nextbtn.classList.add('nextbtn')
    }else{
        nextbtn.classList.add('nextbtn')
    }
})


function next(){
     indexarray += 1
     if(indexarray >= myarray.length-1){
        nextbtn.classList.add('hide')
     }
     index()
}

function prev(){
    indexarray -= 1
    if(indexarray  <= 0){
        prevbtn.classList.add('hide')
    }
    index()
}




























// const  myarray = [
//     {
//         img : "./111.jpg",
//         number : "1"
//     },
//     {
//         img : "/22.jpeg",
//         number : "2"
//     },
//     {
//         img : "./333.jpg",
//         number : "3"
//     },
//      {
//         img : "./444.jpg",
//         number : "4"
//     },
 
// ]

// const slider = document.querySelector(".slider")
// const nextbtn = document.querySelector(".nextbtn")
// const prevbtn = document.querySelector(".prevbtn")
// let firstindex = 0

// window.addEventListener("DOMContentLoaded",()=>{
//     index()
// })

// function index(){
//     const pic = myarray[firstindex]
//    const  paragar =  (
//             `<div class = "contchild">
//                     <img src=${pic.img} class ="img1">
//                     <h2>${pic.number}</h2>
//             </div>`
//         )
    
//     slider.innerHTML = paragar
// }



// nextbtn.addEventListener('click',()=>{
//     next()
//     if(prevbtn.classList.contains('prevbtn') || prevbtn.classList.contains('hide')){
//         prevbtn.classList.remove('prevbtn')       
//         prevbtn.classList.remove('hide')
//         prevbtn.classList.add('active')
//        }else{
//         prevbtn.classList.add('prevbtn') }
// })


// prevbtn.addEventListener('click',()=>{
//     prev()
//     if(nextbtn.classList.contains('hide')){
//         nextbtn.classList.remove('hide')
//         nextbtn.classList.add('nextbtn')
//        }else{
//         nextbtn.classList.add('nextbtn') }
// })
   


// function next(){
//     firstindex += 1
//     console.log("nextbtn" , firstindex)

//     if(firstindex >= myarray.length-1 )
//         ( nextbtn.classList.add('hide')  
//         )
    
//     index()
// }

// function prev(){
//     firstindex -= 1
//     console.log("prevbtn" , firstindex)
//     if(firstindex <= 0 ){
//         ( prevbtn.classList.add('hide')) 
//     }
        
    
//     index()
// }