import React from 'react';

function CourseDetails(props) {
  const coursedet = (
    <ul>
      {props.courses.map((course) => (
        <div key={course.id} className="course-item">
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
     
      {coursedet}
    </div>
  );
}

export default CourseDetails;