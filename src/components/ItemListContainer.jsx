import { useEffect, useState } from "react"
import { getProducts, productos } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { addDoc, collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer =({saludo})=>{
const [data, setData]=useState([])
const [loading, setLoading] = useState(false)
const {type} =useParams()
console.log(type)

    useEffect (()=>{
        setLoading(true)
        const prodColl = type ? query(collection(db, "items"), where("category", "==", type)): collection(db, "items")
        getDocs(prodColl)
        .then ((res)=> {
            const list = res.docs.map((doc)=>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch ((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[type])   
    //     getProducts()
    //     .then ((res)=>{
    //         if (type){
    //             setData(res.filter((prod)=>prod.category === type))
    //         }else{
    //             setData(res)
    //         }
    //     })
    //     .catch ((error)=>console.log(error))
    //     .finally(()=> setLoading(false))
    // },[type])
    //     // console.log('ItemListContainer', data)
    
    return(
        <>
        {
        loading
        ?<LoaderComponent text={type ? 'Cargando categoria...' : 'Cargando productos...'}/>
        :<div>
            <h1 style={{textAlign:'center', marginTop:'2rem'}}>{saludo}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}
export default ItemListContainer