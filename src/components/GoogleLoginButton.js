import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GoogleLoginButton = () => {
  return (
    <div className="mb-6 text-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log('✅ Google user:', decoded);
          localStorage.setItem('user', JSON.stringify(decoded)); // ✅ save to local storage
          window.location.reload(); // refresh to update UI
        }}
        onError={() => {
          console.log('❌ Google Login Failed');
        }}
      />
    </div>
  );
};

export default GoogleLoginButton;