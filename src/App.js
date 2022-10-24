import './resources/styles/App.css'
import StudentsList from './components/admin/Student'
import RegistrationPage from './components/admin/RegistrationPage';
import Header from './components/Header/header';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './components/admin/LoginPage';

function App() {
  return (
    <div className="rootApp">
      {/* <Header /> */}
      {/* <StudentsList /> */}
      <LoginPage />
      {/* <RegistrationPage /> */}
    </div>
  );
}

export default App;
