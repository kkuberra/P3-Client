import React, { Component } from 'react';

const Header = () => {
  return (
    <header >
    <div className="logo">
        <img src="./golfHQ.png" style={{ height: "80px", width: "auto" }}/>
    </div>
    <div className = 'info'>
         <h2>Welcome to Frisbee Golf HQ</h2>
            <h4 className="details">Frisbee Golf HQ lets you find and locate frisbee golf courses around town. <p>Frisbee Golf HQ also lets you leave comments about each course, like if you made a hole in one or even let people know that lost your disc at a particular park.
            <p>Click on a course marker to get started and to find out about the course.</p></p></h4>
    </div>
    </header>
  );
};
export default Header;