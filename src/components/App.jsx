import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import Home from '../pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import MovieDetails from '../pages/MovieDetailes/MovieDetailes';
// import Cast from 'Components/Cast/Cast';
// import Reviews from 'Components/Reviews/Reviews';
import Layout from 'Components/Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetailes/MovieDetailes'));
const Cast = lazy(() => import('Components/Cast/Cast'));
const Reviews = lazy(() => import('Components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
