import "./App.css";

import { useState } from "react";

import {
  Button,
  FormGroup,
  Collapse,
  CardBody,
  Card,
  Label,
  Input,
  FormFeedback,
  FormText,
  UncontrolledPopover,
  PopoverBody,
  Spinner,
  PopoverHeader,
  Form,
  Fade,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Toast,
  ToastHeader,
  ToastBody,
  UncontrolledAlert,
} from "reactstrap";

const MyCustomButton = (props) => {
  return (
    <button style={{ backgroundColor: props.color }}>{props.children}</button>
  );
};

function App() {
  const [isValid, setIsValid] = useState(false);
  const [showCollapse, setShowCollapse] = useState(true);
  const [showToast, setShowToast] = useState(true);
  const [ShowModal, setShowModal] = useState(true);

  const toggleCollapse = () => setShowCollapse((prev) => !prev);
  const toggleToast = () => setShowToast((prev) => !prev);
  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <h1>Reactstrap</h1>
      <h2>Buttons</h2>

      {/* <MyCustomButton color="red">Click Me!</MyCustomButton>
      <MyCustomButton color="blue">Click Me!</MyCustomButton>
      <MyCustomButton color="green">Click Me!</MyCustomButton>
      <MyCustomButton color="yellow">Click Me!</MyCustomButton> */}

      <Button color="primary" size="sm">
        Click me!
      </Button>
      <Button color="success" outline={true}>
        Click me!
      </Button>
      <Button color="danger" size="lg">
        Click me!
      </Button>

      <Form className="form-col" onSubmit={(e) => e.preventDefault()}>
        <h2>Inputs</h2>
        <FormGroup floating>
          <Input
            required
            valid={isValid}
            invalid={!isValid}
            onKeyUp={(e) => {
              setIsValid(e.target.validity.valid);
            }}
            name="email"
            type="email"
            placeholder="Email"
            minLength={8}
            id="example1"
          />
          <Label htmlFor="example1"></Label>
          <FormFeedback tooltop valid>
            Will show if input is valid
          </FormFeedback>
          <FormText>Example help text, that remains unchanged</FormText>
          <Button type="submit">Submit</Button>
        </FormGroup>
      </Form>

      <FormGroup>
        <Label htmlFor="exampleDate">Date</Label>
        <Input id="exampleDate" name="date" type="date" />
      </FormGroup>

      <Button onClick={toggleCollapse}>Toggle Collapse</Button>

      <Collapse isOpen={showCollapse}>
        <Card>
          <CardBody>Yay it is a card</CardBody>
        </Card>
      </Collapse>

      <Button type="button" id="UncontrolledPopover">
        Launch Popover
      </Button>

      <UncontrolledPopover placement="top" target="UncontrolledPopover">
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>I will pop up as a small message window!</PopoverBody>
      </UncontrolledPopover>

      <Button onClick={toggleToast}>Show/Hide Toast</Button>
      <Fade timeout={500} in={showToast}>
        <Toast isOpen={showToast}>
          <ToastHeader icon="primary" toggle={toggleToast}>
            New Message
          </ToastHeader>
          <ToastBody>Error signing up?</ToastBody>
        </Toast>
      </Fade>

      <UncontrolledAlert>
        I am an alert and I can be dismissed
      </UncontrolledAlert>

      <Spinner className="m-5" color="primary"></Spinner>

      <div>
        <Button outline={true} color="info" onClick={toggleModal}>
          Toggle Model
        </Button>
        <Modal centered={true} idOpen={ShowModal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>

          <ModalBody>Enter user info</ModalBody>

          <ModalFooter>
            <Button>Do something</Button>
            <Button color="danger">Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default App;
