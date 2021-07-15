import React from 'react';
import './Ticket.scss';
import {Container, Row, Col} from 'react-bootstrap';

import dayPass from '../assets/dayPass.jpg';
import groupPass from '../assets/groupPass.jpg';


function Tickets() {
    return (
        <div className="tickets">
            <div className="header">
                <div className="blur">
                    <Container>
                        <div className="header_desc">
                            <h1>Tickets</h1>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="ticketCards">
                <div className="dayPass">
                    <div className="img">
                        <img src={dayPass} alt=""></img>
                    </div>
                    <div className="details">
                        <h3>Day Pass</h3>
                        <div className="price">
                            <span>Adult (15+ Yr)</span>
                            <span>RM XX</span>
                        </div>
                        <div className="price">
                            <span>Child (4-14 Yr)</span>
                            <span>RM XX</span>
                        </div>
                        <div className="price">
                            <span>Senior (65+ Yr)</span>
                            <span>RM XX</span>
                        </div>
                        <div className="price">
                            <span>Student(ID)</span>
                            <span>RM XX</span>
                        </div>
                    </div>
                    <div className="button">
                        <button>Buy Day Pass</button>
                    </div>

                </div>
                <div className="groupPass">
                    <div className="img">
                        <img src={groupPass} alt=""></img>
                    </div>
                    <div className="details">
                        <h3>Group Pass</h3>
                        <div className="price">
                            <span>Adult (15+ Yr)</span>
                            <span>RM XX</span>
                        </div>
                        <div className="price">
                            <span>Child (4-14 Yr)</span>
                            <span>RM XX</span>
                        </div>
                        <div className="price">
                            <span>Senior (65+ Yr)</span>
                            <span>RM XX</span>
                        </div>
                        <div className="price">
                            <span>Student(ID)</span>
                            <span>RM XX</span>
                        </div>
                    </div>
                    <div className="button">
                        <button>Buy Group Pass</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets
