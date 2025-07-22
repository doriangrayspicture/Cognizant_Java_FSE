import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from './TrainerMock'; // Adjust path if necessary

function TrainerDetail() {
  const { id } = useParams(); // Get the 'id' from the URL parameters 

  // Find the trainer in your mock data based on the id
  const trainer = trainersMock.find(t => t.trainerId === id);

  if (!trainer) {
    return <h2>Trainer not found!</h2>;
  }

  return (
    <div>
      <h2>Trainers Details</h2> {/* As per Figure 8 */}
      <h3>{trainer.name} ({trainer.technology})</h3>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetail;