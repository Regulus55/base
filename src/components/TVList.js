import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const TVList = () => {
  const [tvs, setTvs] = useState([]);
  const getTvs = async () => {
    try {
      const config = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsIm5iZiI6MTcxOTIxMDg1MS4xNjU4MDIsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNIY0SUY7H__4HBJosyB8LiU9wRAXWRAj6fgf0vHh1Y",
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
          <Col className="'mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  tv.poster_path === null
                    ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAAB6CAMAAADkgxNVAAAAUVBMVEXy8vJmZmbz8/P29vb6+vrCwsLv7+/e3t5QUFB7e3tYWFicnJxgYGD///9zc3Ph4eGsrKy0tLRsbGyDg4O6urrLy8ulpaWRkZGLi4vV1dXp6enKClYdAAAFHElEQVR4nO2biZaqMAyGIQlFoKxlf/8HvQFGZbCOVUudO4f/uIxayWfapukynvfrBZ8GMNDBaEcHox0djHZ0MNrRwWhHB6MdHYx2dDDa0cFoRwejHR2MdnQw2tHBaEd/jREwJWvCPRgBsFGRLakGjE0/4UcqT/YUxwXZZ8RQyiC0pUDK0NT2E4xB3BHaEnVxYNokn2JMjKvnoVlKdmO0FqoORjs6GL99+2VmV4ywhJGXxnxHjEhNolQy0CuQbhhBdHJW8Wv9CJjE/qy41od2mC9+x4ALRsBB+mfl+qsAcA52x4ITP1J7YZR3rOFYF4Gn/8wJY6qujK2msgHSNo5lXDXaluCGsb8yalNBrOf2yjmYjsUJI5bxhbHRWIP8/GmEGiNuYs9YnSGU2F6FuzREZz9rh1A3jPx6QYwHjTEqrt1eagq4iY8eNRFPS04qvK1LoObSEibdONrVWAgohroOQWMKx2yNKLsbOw7zHkIdoked9L9B3gxFn84f4dxUV5D5BujTjJhX/pax3+SaH2YEjOSW0Y83Y9FHGcHD4hbxJtB/1o80bBvjouxbAPoso8i0iL5M1kxOGW8Dn66mZ8hgndo5jI/bdUQKTncQff80Xgu7mxeOQT0ArC6iCTsrR64CkLOxkJPYOFb5arwmTdi5arXm6GheCEvLk9V1DFkllXpPXjIgN4zUfvHI7AsSMPzJi3PRs0En80Lqrnm4XKob7oWdVW2flzD3Z4SpLa5MZxMkv/fAjdPv+ZqCOWCk5FvDm9vkJq+950mBThhvPTZBCvXYjUsAcsAIVNx4jCEpr0wg45L2ZwTtcCflSOOP0fFScgpA+zLCnSDIIYjCzABSRpwB7coI1N7pGlN1jybVPQWgHRnZi9oM9gsypNykujnfxR39qOkuL3jSH/fzI9J9L86Qfo4mHUd2+zGm9YMwPXUckxAUB+1OjO2DtGamzI1CkOzvray+xygfpgz+3HFSs46zD6MBIot7t0nH+SjjFILCH6YMv4GRO044GJTag/FRkr1SbJCl6dfJ32ME7GJzyoeEcWd8euaJfTSA0qRjmykrdjk7Ax56wpa8J7Zrn9uPBHt6xupTjJ/Rn2aE5bZa7Hn94MJjUy9/cdrNEisy2KlaXr4oBj0yYicuZADtvJ68RX2b+3XGMm4QRLSsIC8PtWbTzYJn32BMuoUR0DvPuxGQ+MZ3Dn/TX1wOlyfydNuvOzMWQR9OjDhESs0rZ1gMqWr7qk76akDRqawEDKO+UwIDpTrxxNlRW4xNQiLyRDZy26T5FEiT+jXm8YCNSoOOxkykUUPNyfOykYrSPWNN0ciMQ0fszpEvNDFmI4gMIVcU5sgFvGnFsYKhSynsUveMad1ChEHLM1oVwuLHmREmRsSwkCJUHJy4kArqInLPGHBdMmNdoJaR22MQiZAjlFBY903T6Pbid2askdpSsR85Tkb5ljFtk5SUyNmPgv1YEHp3jgHtykgwZhkMPeEcJjeM/YCYCawECp/bI+Lw6lHZt/zopV3MXXaAYjY/MVbMWDFjxH7E+hSmqoDi5EE1iM54AmOLEZqBXRcmAvOub8X8VhBSwYyFB2OJY6LKuiDBT2oqpGrnMdzjQYUz83m1D7925GgecWC+86vpAyqJsJrGGXr5UPTLvw3mZALEnPiI83VgcqiAc14BHrUqUMWyNeKa0VxN+cS/Jmi1OyNw1b9pZH/G94386fmMQx2MdnQw2tHBaEcHox0djHb0XzD+AzjQS+kZoB+eAAAAAElFTkSuQmCC"
                    : "https://image.tmdb.org/t/p/w500" + tv.poster_path
                }
              />
              <Card.Body>
                <Card.Title>
                  <h1>{tv.name.slice(0, 10)}</h1>
                </Card.Title>
                <Card.Text>
                  {tv.overview.length === 0
                    ? "no overview"
                    : tv.overview.slice(0, 80)}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TVList;
