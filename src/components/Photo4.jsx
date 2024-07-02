import photo4 from '../assets/images/4.jpg'
import PropTypes from 'prop-types';

export const Photo4 = ({ className }) => {
    return (
        <div className='image-container ${className}'>
            <img src={photo4} alt="Viaducto,  Colombia" className='image' />
        </div>
    )
}

Photo4.prototype = {
    className: PropTypes.string
}