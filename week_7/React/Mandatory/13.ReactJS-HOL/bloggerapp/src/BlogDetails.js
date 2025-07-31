import React from 'react';

function BlogDetails(props) {
  const blogdet = (
    <ul>
      {props.blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      
      {blogdet}
    </div>
  );
}

export default BlogDetails;