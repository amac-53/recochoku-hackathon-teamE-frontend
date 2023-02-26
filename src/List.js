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
        'hallName': 'KyotoMojo',
        'area': '渋谷',
    })

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={3} className="pt-5">
                        <SearchTab setConditions={setConditions}/>
                    </Col>
                    <Col md={7}>
                        <Col xs={{ span: 3, offset: 9 }}>
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
