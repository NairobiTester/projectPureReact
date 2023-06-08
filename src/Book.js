import React from "react";

const Book = (props) => {
	const { img, alt1, title, author } = props; // because we used spread operator here we then use 'props' and not 'props.book'
	const clickHandler = (e) => {
		// e is used to access the event object.
		// Click handler fxn to be referenced later. Another option is that the fxn can be set inline. See <h1> in JSX below.
		console.log(e);
		console.log(e.target);
		alert("hello OkenoChile");
	};
	//useful in complex scenarios e.g where data has to be passed to the DB.
	const complexExample = (author) => {
		console.log(author);
	};
	return (
		<article
			className="book"
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img src={img} alt={alt1} />
			<h1 onClick={() => console.log(title)}>{title}</h1>
			<h4>{author}</h4>
			<button type="button" onClick={clickHandler}>
				Reference Example
			</button>
			<button type="button" onClick={() => complexExample(author)}>
				complex
			</button>
		</article>
	); // call the click handler fxn as reference - onClick={clickHandler}.
	//If you have to pass in an argument into a fxn passed to onClick, you must set it up as an arrow fxn.
};
export default Book;
