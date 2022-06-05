import { AppRouter } from './routers/AppRouter';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

