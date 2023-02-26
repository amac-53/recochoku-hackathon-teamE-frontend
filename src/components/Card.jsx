import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image'
import "./Card.css";
import axios from "axios";
import moment from "moment";
import { EmptyBand } from "./EmptyBand";
import { getSortPar } from "../util/sortKeyValue"

const Card = ({cat, conditions}) => {

    const [posts, setPosts] = useState([])
    const [content, setContent] = useState([])
    // useEffect(() => {
    //     const sort = conditions["sort_value"] ?
    //         `&sort_field=${getSortPar(conditions['sort_value']).key}&sort_value=${getSortPar(conditions['sort_value']).value}`
    //         : ''

    //     const limit = conditions['limit'] ? `?limit=${conditions['limit']}` : '' 
    //     const startDate = conditions['startDate'] ? `&start_date=${conditions['startDate']}` : '' 
    //     const endDate = conditions['endDate'] ? `&end_date=${conditions['endDate']}` : '' 
    //     const prefecture = conditions['prefecture'] ? `&prefecture=${conditions['prefecture']}` : ''
    //     const superCat = cat === '0' ? '' : `&super_category_id=${cat}`

    //     console.log(`${process.env.REACT_APP_HOST_NAME}/api/search${limit}${startDate}${endDate}${prefecture}${sort}${superCat}`)
    //     axios(`${process.env.REACT_APP_HOST_NAME}/api/search${limit}${startDate}${endDate}${prefecture}${sort}${superCat}`)
    //     .then(res =>{
    //         setPosts(res.data)
    //     })
    // }, [conditions, cat])

    // useEffect(() => {
    //     setContent(posts.map(post => (
    //         <Row className="col-5 article-card mx-2">
    //             <Col className="list-article col-8">
    //                 <p className="title font-weight-bold">{post.title}</p>
    //                 <p className="mt-2">{moment(post['created_at']).fromNow()}</p>
    //                 <p>{post.company_name}</p>
    //             </Col>
    //             <Col className="col-4">
    //                 <Image src={post.main_image} className="article-img" />
    //             </Col>
    //         </Row>
    //     )));
    // }, [posts])


    return (
    <div>
        <Container className="my-4">
            <Row className="row">
                { posts.length !== 0 ? content : <EmptyBand />}
            </Row>
        </Container>
    </div>
    );
};

export default Card;
