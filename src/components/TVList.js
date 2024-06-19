import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container, Col, Row } from "react-bootstrap";

const TVList = () => {
  const [tvs, setTvs] = useState([]);
  const getTvs = async () => {
    try {
      const config = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqxSAgnIfRLqw13BQqYaihQhubUYJvCtHFtjSN1v9ZE",
        },
      };
      const result = await axios.get(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        config
      );
      setTvs(result.data.results);
      console.log(result.data.results);
    } catch (err) {
      console.log("---", err);
    }
  };

  useEffect(() => {
    getTvs();
  }, []);

  return (
    <Container>
      <Row>
        {tvs?.map((tv) => (
          <Col className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={"https://image.tmdb.org/t/p/w500" + tv.poster_path}
              />
              <Card.Body>
                <Card.Title>{tv.name.slice(0, 10)}</Card.Title>
                <Card.Text>
                  {tv.overview.length === 0
                    ? "No overview :("
                    : tv.overview.slice(0, 80)}
                </Card.Text>
                <Button variant="primary">Go detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TVList;
