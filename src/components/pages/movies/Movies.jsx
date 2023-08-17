import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import css from '../../styles.module.css';
import searchMovies from 'service/searchMovie';
import { Loader } from 'components/loader/Loader';
import MovieItemList from 'components/MovieItemList/MovieItemList';

const Movies = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const query = queryParams.get('query') ?? '';
  const [request, setRequest] = useState('');
  const [dataMovie, setDataMovie] = useState([]);
  const [loader, setLoader] = useState(false)
  const [errors, setErrors] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (query === '') {
      return;
    }
    getRequest(query);
  }, [query]);

  const getRequest = async text => {
    setLoader(true)
    try {
      const response = await searchMovies(text);
      if (!response.results.length) {
        return alert('Sorry, no results were found for your search');
      }
      setDataMovie([...response.results]);
    } catch (error) {
      setErrors(true)
    } finally {
      setLoader(false)
    }
  };
  const handleSearch = e => {
    setRequest(e.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (request.trim() === '') {
      alert('Enter your request');
    }
    const nextParams = request !== '' ? { query: request } : {};
    setQueryParams(nextParams);
    setRequest("")
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={css.input}
          onChange={handleSearch}
          value={request}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <ul>
        {loader && <Loader/>}
        {dataMovie.length > 0 && dataMovie.map(({ id, title, name }) => (
          <MovieItemList key={id} id={`${id}`} title={title || name} location={location}/>
        ))}
        {errors && <p>Sorry something went wrong, try again</p>}
      </ul>
    </div>
  );
};

export default Movies;
