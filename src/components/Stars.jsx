import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import Star from './Star'

function Stars({count}) {
    if (typeof count !== 'number' || (count < 1) || count > 5) {
        return null;
    }

    const stars = [];
    for (let i = 0; i < count; i ++) {
        stars.push(<Star key={nanoid(20)}/>);
    }
    console.log(count);

    return (
        <ul className="card-body-stars u-clearfix">
            {
                stars.map(star => star)
            }
        </ul>
    )
}

Stars.defaultProps = {
    count : 0
}

Stars.propTypes = {
    count : PropTypes.number.isRequired
}

export default Stars