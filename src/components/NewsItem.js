import React from 'react'

const NewsItem =(props)=>{
        let { title, description,image_url,link,creator,pubDate,source_id} = props;
        return (
            <div>
                <div className="card" style={{border: "2px solid black"}}>
                    {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span> */}
                    <img src={image_url} className="card-img-top" alt="..." />
                    <div className="container">
                    <li className="text-danger mt-3">Source: {source_id}</li></div>
                    <div className="card-body ">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {creator} on {new Date(pubDate).toGMTString()}</small></p>
                        <a rel="noreferrer" href= {link} target="_blank" className="btn btn-dark">Click for article</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem