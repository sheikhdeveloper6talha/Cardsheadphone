let images = ['first-removebg-preview.png' , 'fourth-removebg-preview.png' , 'third-removebg-preview.png' , 'second-removebg-preview.png']
let Price = ['$20.92' , '$120.87' , '$54.08' , '$90.0']
let index = 0;
let imgs = document.getElementById('imgs') 
let price = document.getElementById('price') 
console.dir(imgs);

let next = ()=>{
    index++
    if(index >= images.length){
        index = 0
    }
   
   imgs.src = `./public/image/${images[index]}`
   price.textContent = Price[index]
}
let prev = ()=>{
    index--
    if(index < 0){
        index = 3
    }
   
    imgs.src = `./public/image/${images[index]}`
   price.textContent = Price[index]

}


