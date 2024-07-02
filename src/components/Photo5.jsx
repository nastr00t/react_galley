import photo5 from '../assets/images/5.jpg'
import PropTypes from 'prop-types';

export const Photo5 = ({ className }) => {
    return (
        <div className='image-container ${className}'>
            <img src={photo5} alt="Viaducto,  Colombia" className='image' />
        </div>
    )
}

Photo5.prototype = {
    className: PropTypes.string
}