import React, { Component } from 'react'
import NewsItem from './NewsItem';


export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true
        }
    }

    async componentDidMount() {
        let APiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2023-08-22&sortBy=publishedAt&apiKey=91f50a86b7dd45e895aa659ad948a38b";
        let ApiData = await fetch(APiUrl);
        let parsedData = await ApiData.json();
        this.setState({ parsedData: parsedData.articles })
    }

    render() {
        return (
            <div className='container my-3' >
                <h2>News Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 70) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
