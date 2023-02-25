import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import SearchTab from './components/SearchTab'
import Card from './components/Card'
import SearchSelect from './components/SearchSelect'
import { SortBar } from './components/SortBar'

const Home = () => {
    const { cat } = useParams();
    const [conditions, setConditions] = useState({
        'limit': 42,
        'prefecture': '',
        'startDate': '',
        'endDate': '',
        'sort_field': '',
        'sort_order': '',
    })

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <SearchTab cat={cat} setConditions={setConditions}/>
                        <SearchSelect cat={cat} setConditions={setConditions}/>
                    </Col>
                    <Col md={7}>
                        <Col xs={{ span: 3, offset: 7 }}>
                            <SortBar cat={cat} setConditions={setConditions}/>
                        </Col>
                        <Card cat={cat} conditions={conditions}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
