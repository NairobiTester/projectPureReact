import React from "react";
import ReactDOM from "react-dom";

/**function HelloWorld() {
  return (<>
  <h1>Develop with React</h1>
      <p>Hello OkenoChile</p>
      </>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')

);

/** Below is another way to write react code, which is not recommended because it is hard to read than the one above
const Greeting = () => {
  return React.createElement(
  'div',  // Wrapper element
  {},   // Props
  React.createElement('h1', {}, 'hello world') // component
 );
};

 ReactDOM.render(<Greeting />, document.getElementById('root')); **/

/**  // Nested components
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
  return (
  <p>Hi everyone. Happy coding with React</p>
  );
 };

 ReactDOM.render(<Greeting />, document.getElementById('root'));
 ***/

// Creating a book-selling app
//CSS
/** import './index.css';
 function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
    );
 }

 const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />      
    </article>
  );
 };

  const Image = () => (
    <img src = '../images/cover.jpg' alt='The Last Lion Book' />
  );
  const Title = () => <h1>The Last Lion</h1>;
  const Author = () => <h4 style={{fontSize: '0.75rem', marginTop: '0.25rem'}}>William Manchester & Paul Reid</h4>; //inline css appliead as JavaScript object

  ReactDOM.render(<BookList />, document.getElementById('root')
  ); **/

/** // The above code can still be written as follows, the preferred way.
 

import "./index.css";
import imgSrc from "./images/cover.jpg";

const author = "William Manchester & Paul Reid";
const title = "The Last Lion";
//const imgSrc = './images/cover.jpg';
function BookList() {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = () => {
	return (
		<article className="book">
			<img src={imgSrc} alt="The Last Lion Book" />
			<h1>{title}</h1>
			<h4>{author.toUpperCase()}</h4>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById("root"));



/** //Exaple of React 18 render
import React from 'react';
import { createRoot } from 'react-dom';

function App() {
  return <h1>Hello, React 18!</h1>;
}

const rootElement = document.getElementById('root');

// Using createRoot() instead of ReactDOM.render()
createRoot(rootElement).render(<App />); **/

/*** // Props

import "./index.css";
import imgSrc from "./images/cover.jpg";
import imgSrc1 from "./images/cover1.jpg";

const firstBook = {
	img: imgSrc,
	alt1: "The Last Lion Book",
	title: "The Last Lion",
	author: "William Manchester & Paul Reid",
};
const secondBook = {
	img: imgSrc1,
	alt1: "YOU are a BADASS book",
	title: "YOU are a BADASS",
	author: "Jen Sincero",
};

function BookList() {
	return (
		<section className="booklist">
			<Book
				img={firstBook.img}
				alt1={firstBook.alt1}
				title={firstBook.title}
				author={firstBook.author}
			>
				<p>Winston Spencer Churchill Defender of the Realm, 1940-1965</p>
			</Book>
			<Book
				img={secondBook.img}
				alt1={secondBook.alt1}
				title={secondBook.title}
				author={secondBook.author}
			>
				<p>
					How to stop doubting your greatness and start living an awesome life
				</p>
			</Book>
		</section>
	);
}
// the above <p>s are the children props
const Book = (props) => {
	const { img, alt1, title, author, children } = props;
	console.log(props);
	return (
		<article className="book">
			<img src={img} alt={alt1} />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{children}
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById("root")); **/

/** uses book={book} and not {...book}, which is used next and is preferrable
 
import "./index.css";
import imgSrc from "./images/cover.jpg";
import imgSrc1 from "./images/cover1.jpg";
import imgSrc2 from "./images/cover2.jpg";

const books = [
	{
		id: 1,
		img: imgSrc,
		alt1: "The Last Lion Book",
		title: "The Last Lion",
		author: "William Manchester & Paul Reid",
	},
	{
		id: 2,
		img: imgSrc1,
		alt1: "YOU are a BADASS book",
		title: "YOU are a BADASS",
		author: "Jen Sincero",
	},
	{
		id: 3,
		img: imgSrc2,
		alt1: "Will Africa Feed China? book",
		title: "Will Africa Feed China?",
		author: "Deborah Brautigam",
	},
];

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return (
					<Book key={book.id} book={book}></Book>
				); //uses {book} object.
			})}
		</section>
	);
}
// the above <p>s are the children props
const Book = (props) => {
	const { img, alt1, title, author } = props.book;
	return (
		<article className="book">
			<img src={img} alt={alt1} />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById("root"));
 ***/

/** //writing the above using the spread operator to spread the properties of the book object

import "./index.css";
import imgSrc from "./images/cover.jpg";
import imgSrc1 from "./images/cover1.jpg";
import imgSrc2 from "./images/cover2.jpg";

const books = [
	{
		id: 1,
		img: imgSrc,
		alt1: "The Last Lion Book",
		title: "The Last Lion",
		author: "William Manchester & Paul Reid",
	},
	{
		id: 2,
		img: imgSrc1,
		alt1: "YOU are a BADASS book",
		title: "YOU are a BADASS",
		author: "Jen Sincero",
	},
	{
		id: 3,
		img: imgSrc2,
		alt1: "Will Africa Feed China? book",
		title: "Will Africa Feed China?",
		author: "Deborah Brautigam",
	},
];

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book}></Book>; // spread operator {...book} is used inplace of book={book} to spread the properties of the book object.
			})}
		</section>
	);
}

const Book = (props) => {
	const { img, alt1, title, author } = props; // because we used spread operator here we then use 'props' and not 'props.book'
	return (
		<article className="book">
			<img src={img} alt={alt1} />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById("root"));

***/

// Events
import "./index.css";
import { books } from "./data";
import Book from "./Book";

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book}></Book>; // spread operator {...book} is used inplace of book={book} to spread the properties of the book object.
			})}
		</section>
	);
}

ReactDOM.render(<BookList />, document.getElementById("root"));
