import React from 'react';
import './ReviewOrder.scss';
import {Container} from 'react-bootstrap';
import dayPass from '../../assets/dayPass.jpg';
import {
    Link
  } from "react-router-dom";

function ReviewOrder() {
    return (
        <div className="reviewOrder">
            <Container >
                <div className="content">
                    <h1>Review Your Order</h1>
                    <div className="details">
                        <div className="image">
                            <h4>Order</h4>
                            <img src={dayPass} alt=""></img>
                        </div>
                        <div className='tickets'>
                            <h4>Day Pass</h4>
                            <div className="price">
                                <span>Adult (15+ Yr)</span>
                                <span>1</span>
                                <span>RM XX</span>
                            </div>
                            <div className="price">
                                <span>Adult (15+ Yr)</span>
                                <span>3</span>
                                <span>RM XX</span>
                            </div>
                        </div>
                        <div className='total'>
                             <h4>Total</h4>
                             <h3>RMXX.XX</h3>
                        </div>
                    </div>
                    <div className="button">
                        <Link to="/tickets/contactdetail">
                            <button>Next</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ReviewOrder
