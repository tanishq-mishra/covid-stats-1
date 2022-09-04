import React, { Component } from 'react';
import { Container, Col, Row } from "reactstrap";
import axios from 'axios';

function NewsCard({ article }) {
    const date = new Date(article.publishedAt);
    if (article.description === null) {
        return <div></div>

    }
    else {
        return (
            <Col md={6} xl={4} style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="news-card" >
                    <div className="news-top">
                        <img src={article.urlToImage} alt={article.title}></img>
                        <div>button</div>
                    </div>
                    <div className="news-bottom">
                        <h3><a href={article.url} target='blank'>{article.title}</a></h3>
                        <p>{article.description.substring(0, 220)}...</p>
                        <div className="news-author">
                            <div>{article.author}</div>
                            <div>{date.toLocaleString()}</div>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []

        }
    }

    componentDidMount() {
        axios.get('/getNews').then(response => {
            this.setState({
                data: response.data.articles
            })
        })
    }

    render() {
        const Cards = () => {
            return this.state.data.map((article, index) => {
                return <NewsCard article={article} key={index} />
            })
        }

        return (
            <div className='news-container'>
                <Container>
                    <h1>Latest Updates</h1>
                    <Row>
                        <Cards />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default News;