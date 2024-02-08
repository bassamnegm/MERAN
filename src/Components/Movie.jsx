
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import { axiosInstance } from '../axios/instance';

function Movie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axiosInstance.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c").then(data => {
            console.log(data.data.results)
            setMovies([...data.data.results]);
        })
    }, [])
    return (
        <div className='row'>
            {
                movies.map((item) => {
                    return <div key={item.id} className='col-3 mt-1'> <MovieCard data={item} /></div>
                })
            }
        </div>
    )
}

export default Movie