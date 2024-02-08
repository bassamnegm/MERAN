import React from 'react'

function MovieCard({ data }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} />
            <div className="card-body">
                <h5 className="card-title"> {data.title}</h5>
                <p className="card-text">
                    {data.overview}
                </p>
                <a href="#" className="btn btn-primary">
                    go to
                </a>
            </div>
        </div>
    )
}

export default MovieCard