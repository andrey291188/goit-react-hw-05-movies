import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from '../../../styles.module.css';
import detailsRequest from 'service/detailsRequest';
import { useRef } from 'react';
import { Loader } from 'components/loader/Loader';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState();
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState(false);
  const location = useLocation();
  const backLocationRefs = useRef(location.state ?? "/") ;
  const defaultImg =
    'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png';

  useEffect(() => {
    getRequest(movieId);
  }, [movieId]);

  const getRequest = async id => {
    setLoader(true);
    try {
      const response = await detailsRequest(id);
      setDataMovie([response]);
    } catch (error) {
      setErrors(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className={css.movie_details}>
      <Link to={backLocationRefs.current} className={css.button_back}>
        Go Back
      </Link>
      {loader && <Loader />}
      {dataMovie &&
        dataMovie.map(
          ({
            poster_path,
            title,
            overview,
            vote_average,
            genres,
            id,
            release_date,
          }) => (
            <div key={id} className={css.details}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defaultImg
                }
                alt={title}
                className={css.poster}
                width={500}
              />
              <ul>
                <li>
                  <h3>
                    {title} ({release_date || "no info"})
                  </h3>
                </li>
                <li>
                  <p>User score: {vote_average || "no info"}</p>
                </li>
                <p>
                  <b>Overview</b>
                </p>
                <li>
                  <p className={css.overview}>{overview || "no info"}</p>
                </li>
                <p>
                  <b>Genres</b>
                </p>
                <li className={css.genres}>
                  {genres.length > 0 ? genres.map(({ id, name }) => (
                    <p key={id} className={css.genres_item}>
                      {name}
                    </p>
                  )) : <p className={css.genres_item}>no info</p> }
                </li>
              </ul>
            </div>
          )
        )}
      {errors && <p>Sorry something went wrong, try again</p>}
      <Link to="cast" className={css.more_info}>
        Cast
      </Link>
      <Link to="reviews" className={css.more_info}>
        Reviews
      </Link>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
