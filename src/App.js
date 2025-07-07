import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <GoogleOAuthProvider clientId="1005021956690-sbahlppbru5qffbq9sadidmfpfmcihai.apps.googleusercontent.com">
      <TasksPage />
    </GoogleOAuthProvider>
  );
}

export default App;
