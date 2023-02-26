import React, { useState, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate } from "react-router-dom";
import { VenueContext } from "../App";


export const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const venue = useContext(VenueContext);

  const pageList = [
    { "cat": "カレンダー", 'name': 'calender' },
    { "cat": "一覧", 'name': 'list' },
  ]
  
  const handleChange = (e, newValue) => {
    setValue(newValue);
    navigate(`/${venue}/${pageList[value].name}`);
  }

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 10}}>
      <Navbar expand="lg" style={{ background: "#CC0000" }}>
        <Container>
          <Link to={`/${venue}/list`} onClick={() => {setValue(0)}} className="text-white text-decoration-none fs-2">Band Band</Link>
        </Container>
      </Navbar>
      {/* tab */}
      <Tabs className="bg-white" value={value} onChange={handleChange} variant="fullWidth" centered>
        <Tab label="一覧" />
        <Tab label="カレンダー" />
      </Tabs>
    </header>
  );
};

export default Header;
