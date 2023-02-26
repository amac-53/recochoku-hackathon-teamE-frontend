import React, { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import "./Card.css";
import axios from "axios";
import { EmptyBand } from "./EmptyBand";
import { getSortPar } from "../util/sortKeyValue"
import { Button } from "react-bootstrap";
import { VenueContext } from "../App";

const Card = ({ conditions }) => {

    const [posts, setPosts] = useState([])
    const [content, setContent] = useState([])
    const venue = useContext(VenueContext);

    useEffect(() => {
        console.log(venue)
        // const sort = conditions["sort_value"] ?
        //     `&sort_field=${getSortPar(conditions['sort_value']).key}&sort_value=${getSortPar(conditions['sort_value']).value}`
        //     : ''

        // const hallName = conditions['hallName'] ? `hallName=${conditions['hallName']}` : ''
        const area = conditions['area'] ? `?area=${conditions['area']}` : ''


        // ?${hallName}&${area}
        console.log(`http://localhost:5000/posts${area}`)
        axios(`http://localhost:5000/posts${area}`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
    }, [conditions])

    const onButtonClicked = () => {
        alert("本当にオファーをかけますか？")
    }

    // card
    useEffect(() => {
        setContent(posts.map(post => {
            if (post.hall[0].name == venue) {
                return (
                    <></>
                )
            }

            return (
                <Container>
                    <Row className="col-12 article-card mx-2">
                        <Col className="col-3">
                            <Image src="https://meetia.net/wp-content/uploads/2019/03/82fb45f0938d43333f4ab56726d3b494-1128x750.jpg" className="article-img" />
                        </Col>
                        <Col className="list-article col-6">
                            <p className="title fw-bold">{post.bandName}</p>
                            <p>{post.genre}</p>
                            <p>{post.area}</p>
                            <p>{post.hall[0].name}</p>
                        </Col>
                        <Col className="col-3">
                            <Button
                                variant="danger"
                                type="submit"
                                onClick={onButtonClicked}
                                class="btn btn-secondary dropdown-toggle"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                オファーをかける
                            </Button>
                        </Col>
                    </Row>
                </Container>
            )
        }))
    }, [posts])


    return (
        <div>
            <Container className="my-4">
                <Row className="row">
                    {posts.length !== 0 ? content : <EmptyBand />}
                </Row>
            </Container>
        </div>
    );
};

export default Card;
