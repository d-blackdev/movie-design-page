import React from "react";
import { Form, FormControl, InputGroup, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./input.css";
import { BsSearch } from "react-icons/bs";

function Input(props) {
  return (
    <Form className="form">
      <div className="input-cont ">
        <BsSearch className="input-icon" />
        <FormControl
          placeholder={props.holder}
          type={props.type}
          className={props.long ? "input long" : "input small"}
          //   style={{ width: `${props.width} !important` }}
        />
      </div>
    </Form>
  );
}
Input.propTypes = {
  // label : PropTypes.string().isRequired(),
  type: PropTypes.string.isRequired,
  holder: PropTypes.string.isRequired,
};
export default Input;
Input.defaultProps = {
  type: "text",
  holder: "Input",
};
