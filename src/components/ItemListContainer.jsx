import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer =({saludo})=>{
const [data, setData]=useState([])
const [loading, setLoading] = useState(false)
const {type} =useParams()

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
        .catch ((error)=> console.error(error))
        .finally(()=> setLoading(false))
    },[type])
    
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