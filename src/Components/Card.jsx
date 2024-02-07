import React from 'react'

function Card({ data }) {


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: data.color }}>
                    {data.age}
                </a>
            </div>
        </div>
    )
}

export default Card