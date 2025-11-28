// App.jsx
import './App.css';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">
          Welcome to My App
        </h1>
        <p className="text-gray-700 mb-6">
          This is a simple React application.
        </p>
        <button 
          onClick={() => alert('Button clicked!')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Click Me
        </button>
      </main>
      
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; 2023 My App</p>
      </footer>
    </>
  );
}

export default App;