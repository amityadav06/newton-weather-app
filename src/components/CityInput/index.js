import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function CityInput({city, setCity, fetchCityWeather}) {
  const [error, setError] = React.useState("");


  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  //console.log("city", city);

  const handleSubmit = ()=>{
      //logic to see the input is not empty
      if(!city)
      {
          //alert("field is empty");
            setError("City field is empty");
      }else{
          //setError("");
          // Make API call
          fetchCityWeather();
      }
  }

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Enter city"
            onChange={handleInputChange}
          />
          <p className="text-danger">{error}</p>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default CityInput;
