import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import Genre from "./Genre";
import axios from "axios";

const SearchButton = ({ cat }) => {
  const onButtonClicked = () => {
    // まだ何も
  };

  return (
    <Form className="p-3 mt-4">
      <p>絞り込み検索</p>
      <hr />
      <Row className="justify-content-center">
        <details className="mb-5">
          <Genre />
        </details>
        <Button
          variant="danger"
          type="submit"
          onClick={onButtonClicked}
          class="btn btn-secondary dropdown-toggle"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          検索
        </Button>
      </Row>
    </Form>
  );
};

export default SearchButton;
