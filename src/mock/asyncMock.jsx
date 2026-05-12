const productos =[
    {
        id:'01',
        name: 'meme1',
        description: 'llegue tarde',
        stock: 50,
        price: 3000,
        category: 'Nuevos',
        img: 'https://i.postimg.cc/xCFPg68m/5.jpg'
    },
    {
        id:'02',
        name: 'meme2',
        description: 'no nos',
        stock: 50,
        price: 3000,
        category: 'Nuevos',
        img: 'https://i.postimg.cc/DZFzHhJT/8.jpg'
    },
    {
        id:'03',
        name: 'meme3',
        description: 'me canse',
        stock: 50,
        price: 3000,
        category: 'Nuevos',
        img: 'https://i.postimg.cc/sXBTkkkd/3.jpg'
    },
    {
        id:'04',
        name: 'meme4',
        description: 'lloradita',
        stock: 50,
        price: 3000,
        category: 'Nuevos',
        img: 'https://i.postimg.cc/8CxR6j0d/4.jpg'
    },

]

let error = false
export const getProducts =()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (error){
                reject('Hubo un error intente mas tarde')
            }else{
                resolve(productos)
            }
        },2000)
    })
}
