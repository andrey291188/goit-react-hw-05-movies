import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/loader/Loader';
import reviewsRequest from 'service/reviewsRequest';
import css from "../../../../styles.module.css"

const Reviews = () => {
  const { movieId } = useParams();
  const [dataReviews, setDataReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    getRequest(movieId);
  }, [movieId]);

  const getRequest = async id => {
    setLoader(true);
    try {
      const response = await reviewsRequest(id);
      if (!response.results.length) {
        throw new Error()
      }
      setDataReviews([...response.results]);
    } catch (error) {
      setErrors(true);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ul className={css.reviews}>
      {loader && <Loader />}
      {dataReviews.length > 0 && dataReviews.map(({id, author, content}) => (
        <li key={id}>
          <h4 className={css.reviews_author}>{author}</h4> 
          <p>{content}</p>
        </li>
      ))}
      {errors && <p>Sorry no reviews found</p>}
    </ul>
  );
};

export default Reviews;
