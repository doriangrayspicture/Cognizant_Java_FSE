import Trainer from './trainer';
import trainersMock from './TrainerMock';
import { Link } from 'react-router-dom'; // Add this import

function TrainersList() {
    return (
        <div>
            <h2>Trainers List</h2> {/* As per Figure 5 */}
            <ul>
                {trainersMock.map(trainer => (
                    <li key={trainer.trainerId}>
                        <Link to={`/trainers/${trainer.trainerId}`}>{trainer.name}</Link> {/* Modified line */}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default TrainersList;
