import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Av = styled.div`
  width: ${props => props.size === 'large' ? '96px' :
    props.size === 'small' ? '24px' : '48px'
  };
  border-radius: ${props => props.circle ? '50%' : '4px' };
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Avatar = ({ src, size, circle }) => (
  <Av size={size} circle={circle}>
    <img src={src} alt='avatar' />
  </Av>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  circle: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Avatar.defaultProps = {
  size: 'medium',
  circle: false
}

export default Avatar;
