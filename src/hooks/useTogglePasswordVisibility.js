import React from 'react';
export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = React.useState(true);
    const [rightIcon, setRightIcon] = React.useState('eye-outline');

  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye-outline') {
        setRightIcon('eye-off-outline');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off-outline') {
        setRightIcon('eye-outline');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };