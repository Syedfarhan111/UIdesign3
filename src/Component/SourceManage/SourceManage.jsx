import React, { useState, useEffect } from "react";
import { Row, Col, Form, InputGroup, Card, Button } from "react-bootstrap";
import { InfoUser } from "../../Reducer/InfoUser.js";
import "./SourceManage.css";

export const SourceManage = () => {
  const [arrshow, setArrshow] = useState(false);
  const [showlogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [isvalid, setIsvalid] = useState(true);

  useEffect(() => {
    if (InfoUser.UserName === username.trim()) {
      setIsvalid(true);
    } else setIsvalid(false);
  }, [username]);

  return (
    <div>
      <br />
      <Row>
        <Col md={1}></Col>
        <Col md={2}>
          <Card className="subhead">
            <b>SELECT SOURCES</b>
          </Card>
        </Col>
        <br />
        <br />
        <br />
      </Row>
      <Row className="checkboxes">
        <Col md={1}></Col>
        <Col md={2}>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              onClick={() => setArrshow(!arrshow)}
            />
            <img
              src="./facebook-logo.png"
              alt="img"
              style={{ width: "40px" }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <img src="./twitter.png" alt="img" style={{ width: "50px" }} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <img src="./ytlogo.png" alt="img" style={{ width: "50px" }} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <img
              src="./Linkedin-Logo.png"
              alt="img"
              style={{ width: "50px" }}
            />
          </InputGroup>
        </Col>
        <Col md={2}>
          {arrshow ? (
            <img
              className="arrowimg"
              src="./arrow.png"
              style={{ width: "100px" }}
              alt="imge"
              onClick={() => setShowLogin(true)}
            />
          ) : null}
        </Col>
        <Col md={6}>
          {showlogin ? (
            <div>
              <Row>
                <Col md={6}></Col>
                <Col md={4}>
                  <Card className="subhead">
                    <b>CONFIGURE SOURCE</b>
                  </Card>
                </Col>
                <Col md={2}></Col>
              </Row>
              <br />
              <br />
              <Card>
                <Row>
                  <Col md={2}>
                    <img
                      src="./facebook-logo.png"
                      alt="img"
                      style={{ width: "40px" }}
                    />
                  </Col>
                </Row>
                <Row className="usernamerow">
                  <Col md={1}></Col>
                  <Col md={2}>User :</Col>
                  <Col md={7}>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="User Name"
                    />
                  </Col>
                  <Col md={1}>
                    {isvalid ? <Button>Start Ingestion</Button> : null}
                  </Col>
                  <Col></Col>
                </Row>
              </Card>
              <Row>
                <Col md={8}></Col>
                <Col md={4}>
                  {isvalid ? (
                    <img
                      src="./ytarrow.png"
                      style={{ width: "100px" }}
                      alt="imge"
                    />
                  ) : null}
                </Col>
              </Row>
            </div>
          ) : null}
        </Col>
      </Row>
    </div>
  );
};
