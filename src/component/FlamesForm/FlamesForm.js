import React, { useEffect, useState, useRef } from 'react';
import Modal from '../Modal/showModal.js';

import './FlamesForm.css';

import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap';

const FlamesForm = (props) => {
  const PATTERN = /^\s*[a-zA-z]+\s*([a-zA-z]*\s*)*$/;
  const [male, setMale] = useState('');
  const [female, setFemale] = useState('');
  const [modal, setModal] = useState(true);
  const formRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 3000);
  }, []);

  const nameSaver = () => {};

  return (
    <div clasName="form">
      <Form ref={formRef}>
        <FormGroup row>
          <Label for="male" sm={3}>
            Male
          </Label>
          <Col sm={6}>
            <Input
              type="text"
              name="male"
              id="male"
              placeholder="Enter name"
              onChange={(event) => {
                setTimeout(() => {
                  setMale(event.target.value);
                }, 1000);
              }}
            />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="female" sm={3}>
            Female
          </Label>
          <Col sm={6}>
            <Input
              type="text"
              name="female"
              id="female"
              placeholder="Enter name"
              onChange={(event) => {
                setTimeout(() => {
                  setFemale(event.target.value);
                }, 1000);
              }}
            />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Col >
            <Button
              color="success"
              disabled={!(male.match(PATTERN) && female.match(PATTERN))}
              onClick={() => {
                props.flamesService(male, female);
                nameSaver();
              }}
            >
              Click me
            </Button>
          </Col>
        </FormGroup>
      </Form>
      <Modal modal={modal} title="Flames">
        we know the flames in our school days. It's all about the numberic
        difference between two names.
      </Modal>
    </div>
  );
};

export default FlamesForm;
