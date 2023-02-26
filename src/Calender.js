import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const localizer = momentLocalizer(moment)

const formats = {
    dateFormat: 'D',
    dayFormat: 'D(ddd)',
    monthHeaderFormat: 'YYYY年M月',
    dayHeaderFormat: 'M月D日(ddd)',
    dayRangeHeaderFormat: 'YYYY年M月',
}

const MyCalendar = () => {
    const events = []

    return (
        <div className="m-5">
            <Container fluid className="mb-5 pb-5">
                <Row>
                    <Col>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            timeslots={2}
                            defaultView={Views.WEEK}
                            onSelectEvent={event => alert(event.title)}
                            views={['month', 'week', 'day']}
                            formats={formats}
                            style={{ height: 600 }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


// import React, { useState } from 'react';
// import { Container, Row } from 'react-bootstrap';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const MyCalendar = () => {
//     const [value, onChange] = useState(new Date());

//     return (
//         <Container>
//             <Row className="justfy-content-center p-5 m-5">
//                 <Calendar onChange={onChange} value={value} defaultView={"month"} />
//             </Row>
//         </Container>
//     );
// }

export default MyCalendar;