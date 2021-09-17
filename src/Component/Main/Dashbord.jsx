import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Dashbord.css";

export const Dashboard = () => {
  return (
    <div>
      <Card>
        <Row className="dashboard">
          <Col>
            <Link to="/admin">
              <Button className="dashbtn">
                <b>MANAGE SOURCES</b>
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/team">
              <Button className="dashbtn">
                <b>MANAGE TEAM</b>
              </Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
