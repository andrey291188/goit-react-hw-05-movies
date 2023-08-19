import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import requestAlltoday from 'service/requestAllToday';
import { Loader } from 'components/loader/Loader';
import MovieItemList from 'components/MovieItemList/MovieItemList';

const HomePage = () => {
  const [arrayVideo, setArrayVideo] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    setLoader(true);
    try {
      const response = await requestAlltoday();
      if (!response.results.length) {
        return alert(`Data not found`);
      }
      setArrayVideo([...response.results]);
    } catch (error) {
      setErrors(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ul>
      {loader && <Loader />}
      {arrayVideo.length > 0 &&
        arrayVideo?.map(({ title, id, name }) => (
          <MovieItemList id={`/movies/${id}`} title={title || name} location={location} key={id}/>
        ))}
      {errors && <p>Sorry something went wrong, try again</p>}
    </ul>
  );
};

export default HomePage;
