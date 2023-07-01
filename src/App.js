import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import { useState, useEffect } from "react";

const CLIENT_ID = "5ef1f4f9e30742918740f31f83a74c96";
const CLIENT_SECRET = "8668236d9a8b41d48b1a0896589bd754";


function App() {
  const [serachInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Access Token
    var authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
    }
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])

  // Search 
  




  return (
    <div className="App">

      {/* search container */}
      <Container>
        <InputGroup className="mb-3" size="lg">
          {/* text input */}
          <FormControl 
            placeholder="Search For Artist"
            type="input"
            onKeyDown={event => {
              if (event.key === "Enter") {
                console.log("pressed enter");
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          /> 
          <Button onClick={event => {console.log("button pressed")}}>
            Search
          </Button>
        </InputGroup>
      </Container>

      {/* albums container */}
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Title</Card.Title>
            </Card.Body>  
          </Card>
        </Row> 
      </Container>
    </div>
  );
}

export default App;
