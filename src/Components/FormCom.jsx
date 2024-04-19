import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Forms(props) {
  return (
    <Form.Group as={Col} controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        autoComplete={props.autocomplete}
        id={props.id}
        isInvalid={props.error}
      />
      {props.error && (
        <Form.Control.Feedback type="invalid">
          {props.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default Forms;
