import photo6 from '../assets/images/6.jpg'
import PropTypes from 'prop-types';

export const Photo6 = ({ className }) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={photo6} alt="Viaducto,  Colombia" className='image' />
        </div>
    )
}

Photo6.prototype = {
    className: PropTypes.string
}