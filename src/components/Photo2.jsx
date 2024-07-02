import photo2 from '../assets/images/2.jpg'
import PropTypes from 'prop-types';

export const Photo2 = ({ className }) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={photo2} alt="Viaducto,  Colombia" className='image' />
        </div>
    )
}

Photo2.prototype = {
    className: PropTypes.string
}