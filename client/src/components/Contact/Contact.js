import React, { useState } from "react";
import "../../css/Contact.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import domain from "../../config";

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [comment, setComment] = useState("")

  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [websiteError, setWebsiteError] = useState("")
  const [commentError, setCommentError] = useState("")

  const [isConfirmed, setIsConfirmed] = useState("")
  const [isSent, setIsSent] = useState()

  const handleSubmit = (e) => {
    setIsConfirmed("")
    e.preventDefault();

    if (name.length < 2) {
      return setNameError("Please enter valid name") 
    } 

    if (!email.includes("@")) {
      return setEmailError("Please enter valid email") 
    }
    if (comment.length < 2) {
      return setCommentError("Please enter valid message") 
    }

    fetch(domain + "/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        website: website,
        comment: comment
      }),
    })
      .then((res) => {
        if (res.ok){
        setIsConfirmed("Message submitted successfully!!!")}
        else{
          setIsConfirmed("Unsuccessfull submit")
          setIsSent(true)
        }
      })
      

    setName("")
    setEmail("")
    setWebsite("")
    setComment("")

    setNameError("")
    setEmailError("")
    setWebsiteError("")
    setCommentError("")
     
  };
  return (
    <Container className="wholeForm">
      <Row>
        <Col>
          <h1 className="text-center mt-3"> Contact Us </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center mt-3">
            If you have any suggestions or just want to contact us, please
            complete this form
          </p>
        </Col>
      </Row>
      {isConfirmed ?  <p className={isSent ? "alert alert-warning mt-1" : "alert alert-success mt-1"}  role="alert" >{isConfirmed} </p>: ""}

      <Form className="text-centre contact-form p-3" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            Name <span className="asterisk">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
           {nameError ?  <p className="form-message text-white bg-danger mt-1">{nameError} </p>: ""}
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Email <span className="asterisk">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            value={email} onChange={(e) => setEmail(e.target.value)} 
          />
          {emailError ?  <p className="form-message text-white bg-danger mt-1">{emailError} </p>: ""}
        </Form.Group>

        <Form.Group>
          <Form.Label>Website </Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter website"
            name="website"
            id="website"
            value={website} onChange={(e) => setWebsite(e.target.value)} 
          />
          {websiteError ?  <p className="form-message text-white bg-danger mt-1">{websiteError} </p>: ""}
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Comment <span className="asterisk">*</span>
          </Form.Label>
          <Form.Control
            row="5"
            as="textarea"
            name="comment"
            placeholder="Enter text here..."
            value={comment}
            onChange={(e)=> setComment(e.target.value)}
          />
          {commentError ?  <p className="form-message text-white bg-danger mt-1">{commentError} </p>: ""}
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default Contact;
