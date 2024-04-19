import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("TASK"));
    if (data && data.length > 0) {
      const latestUserData = data[data.length - 1];
      setUserData(latestUserData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData({ ...updatedUserData, [name]: value });
  };

  const handleEdit = () => {
    setEditMode(true);
    setUpdatedUserData(userData);
  };

  const handleSave = () => {
    setUserData(updatedUserData);
    setEditMode(false);
  };

  return (
    <Container>
      <div className="profile-page">
        <h2 className="text-center">Profile Page</h2>
        <Row>
          <h4 className="text-center mt-2">User Details:</h4>
          {editMode ? (
            <Form>
              <Row className="text-center mt-4">
                <Col>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={updatedUserData.name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={updatedUserData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                      name="phone"
                      value={updatedUserData.phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      name="address"
                      value={updatedUserData.address}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <Form.Group controlId="formLanguage">
                    <Form.Label>Languages</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter languages"
                      name="language"
                      value={updatedUserData.language}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      name="gender"
                      value={updatedUserData.gender}
                      onChange={handleInputChange}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter description"
                      name="description"
                      value={updatedUserData.description}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <Button variant="primary" onClick={handleSave}>
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          ) : (
            <>
              <Row className="text-center mt-4">
                <Col>
                  <p>
                    <strong>Name:</strong> {userData.name}
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>Email:</strong> {userData.email}
                  </p>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <p>
                    <strong>Phone:</strong> {userData.phone}
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>Address:</strong> {userData.address}
                  </p>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <p>
                    <strong>Languages:</strong> {userData.language}
                  </p>
                </Col>
                <Col>
                  <p>
                    <strong>Gender:</strong> {userData.gender}
                  </p>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <p>
                    <strong>Description:</strong> {userData.description}
                  </p>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <Button variant="primary" onClick={handleEdit}>
                    Edit
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default Profile;
