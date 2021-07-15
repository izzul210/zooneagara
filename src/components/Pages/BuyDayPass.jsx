import React, {useState} from 'react';
import  './BuyTickets.scss';
import {Container} from 'react-bootstrap';
import {FiPlusSquare} from 'react-icons/fi';
import {FiMinusSquare} from 'react-icons/fi';
import dayPass from '../../assets/dayPass.jpg';

function BuyDayPass() {
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [senior, setSenior] = useState(0);
    const [student, setStudent] = useState(0);
 

    return (
        <div className="buyDayPass">
            <Container>
                <div className="content">
                    <div className="ticketNum">
                        <h1>Buy Day-Pass Ticket</h1>
                        <div className="price">
                            <div className="details">
                                <span>Adult (15+ Yr)</span>
                                <h6>RM XX</h6>
                            </div>
                            <div className="choose">
                                <button onClick={() => setAdult(adult + 1)}>
                                    <FiPlusSquare size={30}/>
                                </button>
                                <h4>{adult}</h4>
                                <button onClick={() => (adult !== 0)&&setAdult(adult - 1)}>
                                    <FiMinusSquare size={30}/>
                                </button>
                            </div>
                        </div>
                        <div className="price">
                            <div className="details">
                                <span>Child (4-14 Yr)</span>
                                <h6>RM XX</h6>
                            </div>
                            <div className="choose">
                                <button onClick={() => setChild(child + 1)}>
                                    <FiPlusSquare size={30}/>
                                </button>
                                <h4>{child}</h4>
                                <button onClick={() => (child !== 0)&&setChild(child - 1)}>
                                    <FiMinusSquare size={30}/>
                                </button>
                            </div>
                        </div>
                        <div className="price">
                            <div className="details">
                                <span>Senior (65+ Yr)</span>
                                <h6>RM XX</h6>
                            </div>
                            <div className="choose">
                                <button onClick={() => setSenior(senior + 1)}>
                                    <FiPlusSquare size={30}/>
                                </button>
                                <h4>{senior}</h4>
                                <button onClick={() => (senior !== 0)&&setSenior(senior - 1)}>
                                    <FiMinusSquare size={30}/>
                                </button>
                            </div>
                        </div>
                        <div className="price">
                            <div className="details">
                                <span>Student (ID)</span>
                                <h6>RM XX</h6>
                            </div>
                            <div className="choose">
                                <button onClick={() => setStudent(student + 1)}>
                                    <FiPlusSquare size={30}/>
                                </button>
                                <h4>{student}</h4>
                                <button onClick={() => (student !== 0)&&setStudent(student - 1)}>
                                    <FiMinusSquare size={30}/>
                                </button>
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="add">Add to cart</button>
                            <button className="checkout">Checkout</button>
                        </div>
                    </div>
                    <div className="image">
                        <img src={dayPass} alt=""></img>
                    </div>
                </div>  
            </Container>
        </div>
    )
}

export default BuyDayPass
