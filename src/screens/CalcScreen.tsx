import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Buttons from "../components/Buttons";
import { Row, Col } from "react-bootstrap";

const rowLayout = {
  noGutters: true,
  className: "justify-content-md-center",
};

const colLayout = {
  lg: 1,
};

const CalcScreen = () => {
  const [state, setState] = useState("");

  function clear() {
    setState("");
  }

  function equals() {
    setState(eval(state));
  }

  return (
    <div>
      <Row {...rowLayout}>
        <Col lg={4}>
          <TextInput value={state} />
        </Col>
      </Row>
      <Row {...rowLayout}>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="1"
            onClick={() => {
              setState(state + "1");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="2"
            onClick={() => {
              setState(state + "2");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="3"
            onClick={() => {
              setState(state + "3");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="+"
            onClick={() => {
              setState(state + "+");
            }}
          />
        </Col>
      </Row>
      <Row {...rowLayout}>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="4"
            onClick={() => {
              setState(state + "4");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="5"
            onClick={() => {
              setState(state + "5");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="6"
            onClick={() => {
              setState(state + "6");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="-"
            onClick={() => {
              setState(state + "-");
            }}
          />
        </Col>
      </Row>
      <Row {...rowLayout}>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="7"
            onClick={() => {
              setState(state + "7");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="8"
            onClick={() => {
              setState(state + "8");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="9"
            onClick={() => {
              setState(state + "9");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="*"
            onClick={() => {
              setState(state + "*");
            }}
          />
        </Col>
      </Row>
      <Row {...rowLayout}>
        <Col {...colLayout}>
          <Buttons type="primary" buttonText=" " />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="0"
            onClick={() => {
              setState(state + "0");
            }}
          />
        </Col>
        <Col {...colLayout}>
          <Buttons type="primary" buttonText=" " onClick={equals} />
        </Col>
        <Col {...colLayout}>
          <Buttons
            type="primary"
            buttonText="/"
            onClick={() => {
              setState(state + "/");
            }}
          />
        </Col>
      </Row>
      <Row {...rowLayout}>
        <Col {...colLayout}>
          <Buttons type="primary" buttonText="RECALL" />
        </Col>
        <Col {...colLayout}>
          <Buttons type="primary" buttonText="CLEAR" onClick={clear} />
        </Col>
        <Col {...colLayout}>
          <Buttons type="primary" buttonText="<-" />
        </Col>
        <Col {...colLayout}>
          <Buttons type="primary" buttonText="=" onClick={equals} />
        </Col>
      </Row>
    </div>
  );
};

export default CalcScreen;
