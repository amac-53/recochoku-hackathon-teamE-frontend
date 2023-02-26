import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import SearchTab from './components/SearchTab'
import Card from './components/Card'
import { SortBar } from './components/SortBar'
import axios from 'axios';

const Home = () => {
    const { venue } = useParams();
    const [conditions, setConditions] = useState({
        'limit': 42,
        'prefecture': '',
        'startDate': '',
        'endDate': '',
        'sort_field': '',
        'sort_order': '',
    })

    console.log(venue)
    // axios.get("http://localhost:5000/posts/1")
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <SearchTab cat={venue} setConditions={setConditions}/>
                    </Col>
                    <Col md={7}>
                        <Col xs={{ span: 3, offset: 7 }}>
                            <SortBar cat={venue} setConditions={setConditions}/>
                        </Col>
                        <Card cat={venue} conditions={conditions}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
