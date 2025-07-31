import React from 'react';

// The component receives 'props' as an argument
function BookDetails(props) {
  // Access the 'books' array from props
  const bookdet = (
    <ul>
      {/* Use map() to iterate over the books array and render each book */}
      {props.books.map((book) => (
        <div key={book.id} className="book-item"> {/* Added className for potential styling */}
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      
      {bookdet} 
    </div>
  );
}

export default BookDetails;