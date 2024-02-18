import React, { useCallback } from 'react';
import { Alert } from 'react-native';

const useCustomAlert = () => {
  const showAlert = useCallback((title, message, buttons, options) => {
    Alert.alert(title, message, buttons, options);
  }, []);

  return { showAlert };
};

export default useCustomAlert;
