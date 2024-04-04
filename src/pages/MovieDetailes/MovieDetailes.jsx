import { useState, useEffect, useRef } from 'react';
import { Loader } from 'Components/Loader/Loader';
// import { BsArrowLeftShort } from 'react-icons/bs';
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  NavLink,
} from 'react-router-dom';
import { fetchMovieDetails, onFetchError } from 'services/api';
import { SectionStyle } from 'pages/Pages.styled';
import { AddListStyle } from 'pages/Pages.styled';
const endPoint = '/movie';

const MovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  console.log(backLinkRef);
  // const params=useParams()
  // console.log(params)

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieDetails(endPoint, movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(onFetchError)
      .finally(setLoading(false));
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    poster_path,
    title,
    
    release_date,
    genres,
    vote_average,
    overview,
  } = movie;

  return (
    <SectionStyle>
      <Link to={backLinkRef.current}>{'<<<< BACK'}</Link>
      <h2>Movie detailes :</h2>
      {loading && <Loader />}
      {movie && (
        <>
          <img
            src={
              poster_path ? (
                `https://image.tmdb.org/t/p/w500/${poster_path}` //лінк вказаний в документації бекенду для отримання картинок куди передаємо отриманий лінк кожної картинки
              ) : (
                <p>Ups, ... noImagefound</p>
              )
            }
            alt={title}
            width="200"
          />
          <h3>{title}</h3>
          <p>
            <b>Release Date :</b>
            {release_date}
          </p>

          <p>
            <b>Genres :</b>
            {genres.map(genre => genre.name.toLowerCase())}
          </p>
          <p>
            <b>Ranking :</b>
            {vote_average}
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <h2>Additional information :</h2>
          <AddListStyle>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </AddListStyle>

          <Outlet />
        </>
      )}
    </SectionStyle>
  );
};

export default MovieDetails;
