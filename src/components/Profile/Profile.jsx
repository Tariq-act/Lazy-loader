import React from 'react';
import './Profile.styles.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Profile = ({ src }) => {
  return (
    <div className='profile-pic'>
      <LazyLoadImage src={src} alt='profile' />
    </div>
  );
};

export default Profile;
