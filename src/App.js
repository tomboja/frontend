import './resources/styles/App.css'
import StudentsList from './components/admin/Student'
import RegistrationPage from './components/admin/RegistrationPage';
import Header from './components/Header/header';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="rootApp">
      {/* <Header /> */}
      <StudentsList />
      <RegistrationPage />
    </div>
  );
}

export default App;
