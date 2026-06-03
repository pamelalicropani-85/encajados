import FetchList from './FetchList'
import { useFetch } from '../hooks/useFetch'


const FetchContainer = () => {
  const {data, error, loading} = useFetch('https://api.pexels.com/v1/search?query=abstract&per_page=15', {
    headers: { Authorization: import.meta.env.VITE_PEXELS_API_KEY }
  })

  console.log({data, loading, error})

  return (
    <div>
        <h1>FetchContainer</h1>
        <FetchList data={data?.photos || []}/>
    </div>
  )
}

export default FetchContainer