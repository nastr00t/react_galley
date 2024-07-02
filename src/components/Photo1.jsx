import photo1 from '../assets/images/1.jpg'
import PropTypes from 'prop-types';

export const Photo1 = ({ className }) => {
    return (
        <div className='image-container ${className}'>
            <img src={photo1} alt="Viaducto,  Colombia" className='image' />
        </div>
    )
}

Photo1.prototype = {
    className: PropTypes.string
}