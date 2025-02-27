import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';

const GoogleAuthButton = ({ onSuccess, onFailure }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.9 }}
      className="flex justify-center"
    >
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
        theme="filled_blue"
        shape="circle"
        size="large"
        text="signin_with"
      />
    </motion.div>
  );
};

export default GoogleAuthButton;
