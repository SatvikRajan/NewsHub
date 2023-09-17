import React from 'react'

const NewsItem =(props)=>{
        let { title, description,image,newsURL,author,date,source} = props;
        return (
            <div>
                <div className="card" style={{border: "2px solid black"}}>
                    {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span> */}
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="container">
                    <li className="text-danger mt-3">Source: {source}</li></div>
                    <div className="card-body ">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href= {newsURL} target="_blank" className="btn btn-dark">Click for article</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem