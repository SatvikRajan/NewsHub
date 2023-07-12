import React, { Component } from 'react'

export class NewsItem extends Component {
    static propTypes = {}
    render() {
        let { title, description,image,newsURL,author,date,source} = this.props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{source}</span>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href= {newsURL} target="_blank" className="btn btn-dark">Click for article</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem