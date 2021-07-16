import React, {useState} from 'react';
import './ContactDetail.scss';
import {Container, Form} from 'react-bootstrap';

function ContactDetail() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAdress] = useState("");


    return (
        <div className="contactDetail">
            <Container>
                <h2>Contact Details / Billing Address</h2>
                <div className="form">
                <Form className="formLeft">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" 
                                      placeholder="Ali bin Abu"  
                                      value={name}
                                      onChange={(e) => setName(e.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="phone" 
                                      placeholder="+60123456789" 
                                      value={phone}
                                      onChange={(e) => setPhone(e.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" 
                                      placeholder="ali@email.com" 
                                      value={email}
                                      onChange={(e) => setEmail(e.value)} />
                    </Form.Group>
                </Form>  
                <Form className="formRight">
                    <Form.Group>
                        <Form.Label>Adress</Form.Label>
                        <Form.Control type="adress" placeholder="123 Street Avenue" />
                        <Form.Control type="adress" placeholder="" />
                        <Form.Control type="adress" placeholder="" />
                    </Form.Group>
                    <div className="formBottom">
                        <div className="total">
                            <span>Total</span>
                            <h3>RMXX.XX</h3>
                        </div>
                        <button>Pay Now</button>
                    </div>
                    
                </Form>  
                </div>
            </Container>
            
        </div>
    )
}

export default ContactDetail
