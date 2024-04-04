import MoviesList from 'Components/MoviesList/MoviesList';
import SearchBar from 'Components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearhMovies, onFetchError } from 'services/api';
import { Notify } from 'notiflix';
import { Loader } from 'Components/Loader/Loader';
 const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontSize: '24px',
};

const endPoint = '/search/movie';

const Movies = () => {
  const [searhfilms, setSearhFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('query'));
 
  
  const searchQuery = searchParams.get('query')??'';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    if (searhfilms.length > 0) {
      return
    };
      setLoading(true)
    fetchSearhMovies(endPoint, searchQuery)
      .then(data => {
        setSearhFilms(data.results);
      })
      .catch(onFetchError)
      .finally(setLoading(false));
  }, [searchQuery, searhfilms]);

  const onSubmitSearchBar = (e) => {
    e.preventDefault();
    const searchValue = e.target.query.value;
    if (!searchValue) {
      return Notify.info('Enter your request, please!', paramsForNotify);
    }
    setSearchParams({ query: searchValue }); // записуємо пошукове значення в URL
   
    //  searchParams.set( 'query', searchValue );
    //     setSearchParams(searchParams);можна мутувати обєкт параметрів  searchParams за допомогою методу set якщо параметрів там більше одного змінюючи тільки одну властивість в ньому і вже потім записати в setSearchParams таким чином не втрачається решта параметрів які не зміюємо при записі
    setSearhFilms([]);
    e.target.reset();
  }
    

  return (
    <>
      {loading && <Loader/>}
      <SearchBar onSubmitSearchBar={onSubmitSearchBar} />
      <MoviesList films={searhfilms} />
    </>
  );
};
export default Movies;

