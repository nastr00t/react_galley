import PropTypes from 'prop-types';

export const Photo = ({ id, texto, className }) => {
  const url = `/src/assets/images/${id}.jpg`;
  return (
    <div className={`image-container ${className}`}>
      <img src={url} alt={texto} className='image' />
    </div>
  )
}
Photo.prototype = {
  className: PropTypes.string
}