import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import creditsRequest from 'service/creditsRequest';
import css from '../../../../styles.module.css';
import CastItemList from 'components/CastItemList/CastItemList';
import { Loader } from 'components/loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [dataCast, setDataCast] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    getRequest(movieId);
  }, [movieId]);

  const getRequest = async id => {
    setLoader(true);
    try {
      const response = await creditsRequest(id);
      if (!response.cast.length) {
        throw new Error()
      }
      setDataCast([...response.cast]);
    } catch (error) {
      setErrors(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ul className={css.cast}>
      {loader && <Loader />}
      {dataCast.length > 0 && dataCast.map(({ id, name, character, profile_path }) => (
        <CastItemList key={id} name={name} character={character} profile_path={profile_path || ""}/>
      ))}
      {errors && <p>Sorry no actors found</p>}
    </ul>
  );
};

export default Cast;
