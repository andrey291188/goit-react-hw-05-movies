import axios from "axios";


async function detailsRequest (movie_id) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGM3MjViYmU2YWZiZDk3NzEwNTBkODAxN2E1Yzk1OCIsInN1YiI6IjY0ZGM5N2YyMzcxMDk3MDExYzUyMjkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SZ16pKVVZS_QZ7Uem4lr0Lt3wQqutmu-dtJ9xHrA60g'
        }
      };

    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`, options)
    return data
 }
 
export default detailsRequest 