import React ,{ useState, useEffect } from 'react';
import {Modal, Button, Form } from "react-bootstrap";


export default function AddMovie ()
{
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
            <div>
            <Button style={{marginTop:"30px", marginBottom:"50px", marginLeft:"50%"}} variant="primary" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control type="email" placeholder="Enter title" />
                        <Form.Label>Movie Image</Form.Label>
                        <Form.Control type="email" placeholder="Enter image" />
                        <Form.Label>Movie Description</Form.Label>
                        <Form.Control type="email" placeholder="Enter description" />
                        <Form.Label>Rate</Form.Label>
                        <Form.Control type="password" placeholder="Enter rate" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Add Movie
                    </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add Movie
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
}