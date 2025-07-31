import React from 'react';
import './App.css';


import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';


export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

export const blogs = [
  { id: 201, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 202, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' },
];

export const courses = [
  { id: 301, name: 'Angular', date: '4/5/2021' },
  { id: 302, name: 'React', date: '6/3/2020' },
];

function App() {
  return (
    <div className="App">
     
      <div className="components-container">
       
        <div className="component-wrapper">
          <h1>Course Details</h1>
          <CourseDetails courses={courses} />
        </div>
        <div className="component-wrapper">
          <h1>Book Details</h1>
          <BookDetails books={books} />
        </div>
        <div className="component-wrapper">
          <h1>Blog Details</h1>
          <BlogDetails blogs={blogs} />
        </div>
      </div>
    </div>
  );
}

export default App;