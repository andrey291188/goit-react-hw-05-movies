import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const Movies = lazy(() => import('./pages/movies/Movies'));
const MovieDetails = lazy(() =>
  import('./pages/movies/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./pages/movies/MovieDetails/cast/Cast'));
const Reviews = lazy(() =>
  import('./pages/movies/MovieDetails/reviews/Reviews')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
