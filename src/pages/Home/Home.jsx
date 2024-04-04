import { Loader } from 'Components/Loader/Loader';
import MoviesList from 'Components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

import { fetchMovies, onFetchError } from 'services/api';
import { SectionStyle } from 'pages/Pages.styled';

const endPoint = '/trending/movie/day';


const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    fetchMovies(endPoint)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError)
      .finally(setLoading(false));
  }, [films]);

  return (
    <SectionStyle>
          {loading && <Loader />}
          <h2>Movies in trend</h2>
      <MoviesList films={films} />
    </SectionStyle>
  );
};

export default Home;
