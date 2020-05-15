import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Styles from './Slider.module.scss';
import { arrow } from '../../../assets/icons';
import { FullWidthMovie } from '../../presentationals';
import Container from '../Container/Container';
import { IMovie } from '../../../types/movie';

interface IOwnProps {
}

type Props = IOwnProps;

class Slider extends Component<Props> {
  render() {
    const mockedMovie: IMovie[] = [{
      averageRating: "8.1",
      backdrop_url: "http://image.tmdb.org/t/p/w500/ByDf0zjLSumz1MP1cDEo2JWVtU.jpg",
      directors: [],
      endYear: "",
      genres: [],
      id: "tt0133093",
      image_url: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      numVotes: 16915,
      poster_url: "http://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      primaryTitle: "The Matrix",
      principals: [],
      runtimeMinutes: "",
      startYear: "1999",
      summary: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      titleType: "movie",
      wikipedia_url: "http://en.wikipedia.org/wiki/The_Matrix",
      writers: [],
      youtube_url: "https://www.youtube-nocookie.com/embed/vKQi3bBA1y8",
      title: "",
      user: "",
      moviedb: [],
      rapid: [],
      tastedb: []
    },
    {
      averageRating: "8.2",
      backdrop_url: "http://image.tmdb.org/t/p/w500/pPj1yM2PXiC56GkUYmoT3qR9zka.jpg",
      directors: [],
      endYear: "",
      genres: [],
      id: "tt0076759",
      image_url: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      numVotes: 13580,
      poster_url: "http://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      primaryTitle: "Star Wars",
      principals: [],
      runtimeMinutes: "",
      startYear: "1977",
      summary: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      titleType: "movie",
      wikipedia_url: "https://en.wikipedia.org/wiki/Star_Wars_(film)",
      writers: [],
      youtube_url: "https://www.youtube-nocookie.com/embed/1g3_CFmnU7k",
      title: "",
      user: "",
      moviedb: [],
      rapid: [],
      tastedb: [],
    }];

    return (
      <div className={Styles.wrapper}>
        <div className={Styles.titleWrapper}>
          <Container>
            <h1 className={Styles.heading}>Top picks</h1>
          </Container>
        </div>
        <Carousel
          arrowLeft={<div className={Styles.arrowLeft}>{arrow}</div>}
          arrowRight={<div className={Styles.arrowRight}>{arrow}</div>}
          addArrowClickHandler
          draggable={false}
          infinite
          autoPlay={5000}
          animationSpeed={800}
        >
          {mockedMovie.map((movie: IMovie) => <FullWidthMovie key={movie.id} movie={movie} />)}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
