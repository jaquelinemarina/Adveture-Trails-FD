import * as PropTypes from "prop-types"
import "./style.css"

function CardTrail({ trailInfo }) {
    return (
        <>
            <h1>{trailInfo.trailName}</h1>
            <span>{trailInfo.city}, {trailInfo.state}</span>
        </>
    )
}

CardTrail.propTypes = {
    trailInfo: PropTypes.exact({
        trailName: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        path: PropTypes.number.isRequired,
        difficulty: PropTypes.string.isRequired,
        trailType: PropTypes.oneOf(['Hiking', 'Trekking', 'Ciclismo']),
        owner: PropTypes.string.isRequired,
        urlImg: PropTypes.string.isRequired,
    })
}

export default CardTrail