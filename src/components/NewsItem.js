import React, { Component } from 'react'

export class NewsItem extends Component {
    static propTypes = {}
    render() {
        let { title, description,image,newsURL} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href= {newsURL} target="_blank" className="btn btn-dark">Click for article</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem