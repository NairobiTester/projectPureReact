import React from 'react';
import ReactDOM from 'react-dom';

// Nested components
 function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
 }

 const Person = () => <h2>Stephen OkenoChile</h2>;  // implicit return
 const Message = () => {                            // explicit return
  return <p>Hi everyone. Happy coding with React</p>;
 };

 ReactDOM.render(<Greeting />, document.getElementById('root'));