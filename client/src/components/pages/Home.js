import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <div className="mt-4 jumbotron">
        <h1 className="text-center">MERN Starter</h1>
        </div>
        <section>
          <h2>Mern Starter Template</h2>
          <p>Contains the following features.</p>
          <ul>
            <li>Bootstrap CSS and JS</li>
            <li>Log in system</li>
            <li>Protected routes</li>
            <li>CRU for Users model</li>
            <li>CRUD for Posts model</li>
            <li>User:Posts 1TM realtionship</li>
          </ul>
        </section>
    </div>
  )
}

export default Home;