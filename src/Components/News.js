import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
        country: "us",
        pageSize: 8,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }

    async updateNews() {
        const APiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=91f50a86b7dd45e895aa659ad948a38b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        const ApiData = await fetch(APiUrl);
        const parsedData = await ApiData.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    async componentDidMount() {
        // const APiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=91f50a86b7dd45e895aa659ad948a38b&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // const ApiData = await fetch(APiUrl);
        // const parsedData = await ApiData.json();
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        this.updateNews();
    }

    handlePreClick = async () => {
        // const APiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apikey=91f50a86b7dd45e895aa659ad948a38b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // const ApiData = await fetch(APiUrl);
        // const parsedData = await ApiData.json();
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     const APiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apikey=91f50a86b7dd45e895aa659ad948a38b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     const ApiData = await fetch(APiUrl);
        //     const parsedData = await ApiData.json();
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-3' >
                <h2 className='text-center my-5'>News Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 70) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>
                {this.state.loading === false && <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>

                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>}
            </div>
        )
    }
}

export default News
