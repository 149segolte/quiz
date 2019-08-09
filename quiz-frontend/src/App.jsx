import React from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import QuizPage from './QuizPage';
import CreateQuiz from './CreteQuiz';
import './App.css';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/quiz/:quizId' component={QuizPage} />
        <Route path='/createquiz' component={CreateQuiz} />
      </Switch>
    </Router>
  );
}

export default App;
