import Navbar from './Navbar';
import Home from './Home'
function App() {
  const title = 'Welcome to Maher Brikae Portfolio' 
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <h1>{ title }</h1>
      </div>
    </div>
  );
}

export default App;
