import css from "../styles.module.css"
import PropTypes from 'prop-types';

const CastItemList = ({ name, character, profile_path}) => {
 
    const defaultImg = "https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png"
    return (
        <li className={css.cast_item}>
          <img
            src={profile_path ? `https://image.tmdb.org/t/p/w300${profile_path}` : defaultImg}
            alt={name}
            width={300}
            height={450}
          />
          <h3>{name}</h3>
          <p>
            Character: <b>{character}</b>
          </p>
        </li> 
    )
}

export default CastItemList

CastItemList.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
}