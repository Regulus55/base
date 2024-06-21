import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Detail = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const params = useParams();

  const getData = async () => {
    try {
      const config = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqxSAgnIfRLqw13BQqYaihQhubUYJvCtHFtjSN1v9ZE",
        },
      };
      const result = await axios.get(
        location.pathname.includes("movie")
          ? `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`
          : `https://api.themoviedb.org/3/tv/${params.id}language=en-US`,
        config
      );
      setData(result.data);
      console.log("+++", result.data);
    } catch (err) {
      console.log("---", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row />

      <Row>
        <Col />

        <Col>
          <img
            style={{ height: "600px", width: "400px" }}
            src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          />
        </Col>
        <Col xs={3}>
          <h1>
            {location.pathname.includes("movie") ? data.title : data.name}
          </h1>
          <div>{data.overview}</div>
        </Col>

        <Col />
      </Row>

      <Row />
    </Container>
  );
};

export default Detail;
