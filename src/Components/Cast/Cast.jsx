import { useState, useEffect } from 'react';
import { fetchMovieCast, onFetchError } from 'services/api';
import { useParams } from 'react-router-dom';
import { Loader } from 'Components/Loader/Loader';
import { LiStyle, UlStyle } from '../MoviesList/MoviesList.styled';
const endPoint = '/movie';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    setLoading(true);
    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(onFetchError)
      .finally(setLoading(false));
  }, [movieId]);
    return (
      <>
        <h3>Cast:</h3>
        {loading && <Loader />}
        {cast && (
          <UlStyle>
            {cast.map(({ id, name, character, profile_path }) => (
              <LiStyle key={id}>
                <b>{name}</b>
                <p>character:{character}</p>
                <img
                  src={
                    profile_path ? (
                      `https://image.tmdb.org/t/p/w500/${profile_path}` //лінк вказаний в документації бекенду для отримання картинок куди передаємо отриманий лінк кожної картинки
                    ) : (
                      <p>Ups, ... noImagefound</p>
                    )
                  }
                  alt={name}
                  width="100"
                />
              </LiStyle>
            ))}
          </UlStyle>
        )}
      </>
    );
};

export default Cast;
