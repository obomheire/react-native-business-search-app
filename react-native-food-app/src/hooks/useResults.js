import {useState, useEffect} from "react";
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

const searchApi = async (serachTerm) => {
      try{
        const response = await yelp.get('/search', {
          params:{
            limit: 50,
            term: serachTerm,
            location: 'califonia'
          }
        })
        setResults(response.data.businesses)
      }catch(error){
        setErrorMessage('Somthing went wrong')
      }
 }

 useEffect(() => {
  searchApi('pasta')
 }, [])

 return [results, searchApi, errorMessage]
}