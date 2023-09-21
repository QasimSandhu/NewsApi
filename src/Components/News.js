import React, { Component } from 'react'
import NewsItem from './NewsItem';


export class News extends Component {
    render() {
        return (
            <div className='container my-3' >
                <div className="row">
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="muDescription" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="muDescription" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="muDescription" />
                    </div>
                    <div className="col-md-3">
                        <NewsItem title="myTitle" description="muDescription" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
