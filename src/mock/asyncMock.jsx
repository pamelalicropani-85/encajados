const productos =[
    {
        id:'01',
        name: 'Burbujas Light',
        description: '1000 piezas',
        stock: 45,
        price: 30000,
        category: 'nuevos',
        img: "/burbujas.jpg"
    },
    {
        id:'02',
        name: 'Burbujas Violet',
        description: '1000 piezas',
        stock: 25,
        price: 30000,
        category: 'favoritos',
        img: '/burbujas1.jpg'
    },
    {
        id:'03',
        name: 'Burbujas Green',
        description: '1000 piezas',
        stock: 40,
        price: 25000,
        category: 'oferta',
        img: '/burbujas2.jpg'
    },
    {
        id:'04',
        name: 'Hojas Multi',
        description: '2000 piezas',
        stock: 15,
        price: 55000,
        category: 'favoritos',
        img: '/hojas.jpg'
    },
    {
        id:'05',
        name: 'Hojas Otoño',
        description: '2000 piezas',
        stock: 10,
        price: 50000,
        category: 'nuevos',
        img: '/hojas1.jpg'
    },
    {
        id:'06',
        name: 'Hojas de Rosa',
        description: '3000 piezas',
        stock: 50,
        price: 70000,
        category: 'oferta',
        img: '/hojas2.jpg'
    },
    {
        id:'07',
        name: 'Lineas ',
        description: '2000 piezas',
        stock: 35,
        price: 20000,
        category: 'oferta',
        img: '/lineas.jpg'
    },
    {
        id:'08',
        name: 'Mas lineas',
        description: '2000 piezas',
        stock: 20,
        price: 30000,
        category: 'favoritos',
        img: '/lineas1.jpg'
    },
    {
        id:'09',
        name: 'Psico',
        description: '3000 piezas',
        stock: 35,
        price: 45000,
        category: 'nuevos',
        img: '/lineas2.jpg'
    },
    {
        id:'10',
        name: 'Pincelada',
        description: '9000 piezas',
        stock: 10,
        price: 120000,
        category: 'favoritos',
        img: '/pintura.jpg'
    },
    {
        id:'11',
        name: 'Paint Green',
        description: '5000 piezas',
        stock: 50,
        price: 40000,
        category: 'nuevos',
        img: '/pintura1.jpg'
    },
    {
        id:'12',
        name: 'Antiguo',
        description: '1000 piezas',
        stock: 40,
        price: 25000,
        category: 'oferta',
        img: '/pintura2.jpg'
    },

]

let error = false

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un error intente mas tarde')
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct =(id)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (error){
                reject('Hubo un error intente mas tarde')
            }else{
                let found = productos.find((item)=> item.id ===id)
                resolve(found)
            }
        },2000)
    })
}
