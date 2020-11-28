import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import HomeContent from './components/HomeContent';
import LoginForm from './components/LoginForm';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
      <Heading />
      <HomeContent />
      <LoginForm />
      <NewsList />
    </div>
  );
}

export default App;
