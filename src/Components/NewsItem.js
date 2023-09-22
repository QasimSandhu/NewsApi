import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className='container my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl ? imageUrl : "https://cmg-cmg-tv-10070-prod.cdn.arcpublishing.com/resizer/XfUA9tDsZY6qJO8j0Hz06TZ2hpM=/1440x810/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/E4CZZ5DGAZF7VG7TXWWZIY4XKE.png"} className="card-img-top" alt="Failed to load images" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
