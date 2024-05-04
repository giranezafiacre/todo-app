import React, { Component } from 'react';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update import to include Routes
import About from './pages/about';
import Dashboard from './pages/dashboard'; // Update import to capitalize Dashboard
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Routes> {/* Use Routes instead of div */}
              <Route path='/' element={<Dashboard />
              } />
              <Route path='/about' element={<About />} /> {/* Use element prop and capitalize 'about' */}
              <Route path='/todo' element={<Dashboard />} /> {/* Use element prop and capitalize 'todo' */}
            </Routes> {/* Close Routes */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
