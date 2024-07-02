import photo3 from '../assets/images/3.jpg'
import PropTypes from 'prop-types';

export const Photo3 = ({ className }) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={photo3} alt="Viaducto,  Colombia" className='image' />
        </div>
    )
}

Photo3.prototype = {
    className: PropTypes.string
}