import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import css from "../../styles.module.css"

const StayledLink = styled(NavLink)`
    &.active {
        color: yellow
    }
`
const Headers = () => {
    return (
        <div className={css.headers}>
            <StayledLink to="/" className={css.link}>
                Home
            </StayledLink>
            <StayledLink to="/movies" className={css.link}>
                Movies
            </StayledLink>
        </div>
    )
}

export default Headers