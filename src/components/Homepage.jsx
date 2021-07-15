import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Homepage.scss';
import ticketCard from '../assets/ticketCard.jpg';
import {
    Link
  } from "react-router-dom";

function Homepage() {
    return (
        <div className="homePage">
            <div className="header">
                <div className="blur">
                    <Container>
                        <div className="header_desc">
                            <h1>Experience National Zoo Wildlife</h1>
                            <span>National Zoo houses more than 300 species and 
                                50 endangered species from reptiles to insects</span>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="ticketDiv">
               <div className="ticketCard">
                   <div className="img">
                        <img src={ticketCard} alt=""></img>
                   </div>
                   <div className="desc">
                        <div className="title">
                            <h4>Today at the Zoo</h4>
                        </div>
                        <div className="title_desc">
                            <span> The Girrafe Show</span>
                        </div>
                        <div className="buttons">
                            <h5>Learn More</h5>
                            <Link to="/tickets">
                                <button>Buy Ticket</button>
                            </Link>
                            
                        </div>
                   </div>
               </div>        
            </div>

            <div className="cards">
                <div className="card_1">
                    <div className="desc">

                    </div>
                    <div className="img">

                    </div>
                    
                </div>
                <div className="card_2">
                    <div className="desc">
                        
                    </div>
                    <div className="img">

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Homepage
