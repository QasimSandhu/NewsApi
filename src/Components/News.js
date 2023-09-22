import React, { Component } from 'react'
import NewsItem from './NewsItem';


export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }

    async componentDidMount() {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        } else {
            const APiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2023-08-22&sortBy=publishedAt&apiKey=91f50a86b7dd45e895aa659ad948a38b&page=1&&pageSize=20";
            const ApiData = await fetch(APiUrl);
            const parsedData = await ApiData.json();
            this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
        }
    }

    handlePreClick = async () => {
        const APiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-08-22&sortBy=publishedAt&apiKey=91f50a86b7dd45e895aa659ad948a38b&page=${this.state.page - 1}&pageSize=20`;
        const ApiData = await fetch(APiUrl);
        const parsedData = await ApiData.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        const APiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-08-22&sortBy=publishedAt&apiKey=91f50a86b7dd45e895aa659ad948a38b&page=${this.state.page + 1}&pageSize=20`;
        const ApiData = await fetch(APiUrl);
        const parsedData = await ApiData.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
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
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
