import Heading from './components/Heading';
import HomeContent from './components/HomeContent';
import LoginForm from './components/LoginForm';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
      <Heading content="This is a title"/>
      <HomeContent />
      <LoginForm />
      <NewsList />
    </div>
  );
}

export default App;
