import React from 'react'
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap'
import Wards from './Wards'
import SearchButton from './SearchButton'

const SearchTab = ({cat, setConditions}) => {
    
    const onWardSelected = (e) => setConditions((prevState) => ({ ...prevState, "ward": e.target.value }))

    return (
        <Form className="bg-warning p-3 my-5">
            <Row className="justify-content-center">
                {/* 23区 */}
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Select">東京23区</Form.Label>
                    <Form.Select id="Select" onChange={onWardSelected}>
                        <Wards />
                    </Form.Select>
                </Form.Group>
                <SearchButton />
            </Row>
        </Form>
    )
}

export default SearchTab