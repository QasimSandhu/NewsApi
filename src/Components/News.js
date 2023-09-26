import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';


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
        const APiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=91f50a86b7dd45e895aa659ad948a38b&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        const ApiData = await fetch(APiUrl);
        const parsedData = await ApiData.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    handlePreClick = async () => {
        const APiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=91f50a86b7dd45e895aa659ad948a38b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        const ApiData = await fetch(APiUrl);
        const parsedData = await ApiData.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            const APiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=91f50a86b7dd45e895aa659ad948a38b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            const ApiData = await fetch(APiUrl);
            const parsedData = await ApiData.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className='container my-3' >
                <h2 className='text-center'>News Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 70) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                {!this.state.loading && <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>

                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>}
            </div>
        )
    }
}

export default News
