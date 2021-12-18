import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "../../page/footer/footer.style.scss";

const FormInputComponent = (props) => {
  return(
    <Form>
      <InputGroup className="mb-2">
        <Form.Control id="inlineFormInputGroup" placeholder={props.placeholder} style={props.style} ></Form.Control>

        {props.avatar === "true" ? <InputGroup.Text>@</InputGroup.Text>
          : null
        }
      </InputGroup>
    </Form>
  )
};

export default FormInputComponent;