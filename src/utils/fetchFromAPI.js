import axios from "axios";



let BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '24d26049a7msha1220be216e6e38p1c282cjsnac36b4cd7c76',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) =>{
   const {data} =  await axios.get(`${BASE_URL}/${url}`,options)
   return data
}

