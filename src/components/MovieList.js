import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const config = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqxSAgnIfRLqw13BQqYaihQhubUYJvCtHFtjSN1v9ZE",
        },
      };
      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        config
      );
      setMovies(result.data.results);
      console.log(result.data.results);
    } catch (err) {
      console.log("---", err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Row>
        {movies?.map((movie) => (
          <Col className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              />
              <Card.Body>
                <Card.Title>{movie.title.slice(0, 10)}</Card.Title>
                <Card.Text>{movie.overview.slice(0, 80)}</Card.Text>
                <Link to={`/movie/${movie.id}`}>
                  <Button variant="primary">Go detail</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
