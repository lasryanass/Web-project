import React from "react";
import Navbar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import SignIn from './components/Login';
import Footer from './components/Footer';
import Accueil from './components/Accueil';



const Home = () => {
  return (
    <>
      <Navbar />
      <Accueil />
      <Footer />
    </>
  );
};

const SignInPage = () => {
  return (
    <>
      <Navbar />
      <SignIn />
      <Footer />
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login">
        <SignInPage />
      </Route>
    </Switch>
  );
};

export default App;