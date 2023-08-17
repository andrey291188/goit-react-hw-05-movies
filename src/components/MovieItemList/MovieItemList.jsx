import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from "../styles.module.css";

const MovieItemList = ({title, id, location}) => {
  
  return (
    <li className={css.movie_request}>
      <Link to={`${id}`} className={css.more_info} state={location}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItemList;

MovieItemList.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
}