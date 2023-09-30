import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div className='container my-3'>
                <div className="card">
                    <img src={imageUrl ? imageUrl : "https://i-invdn-com.investing.com/news/LYNXMPEB280W7_L.jpg"} className="card-img-top" alt="Failed to load images" style={{ height: "152px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Qasim Sandhu" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
