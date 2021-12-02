import React, { useState } from 'react';
import { data } from '../data';
import { Link } from 'react-router-dom';
const Hospitals = () => {
    const [Hospital, setHospital] = useState(data);
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
            <Link to={`/${person.name}`} className='btn'>
              {person.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Hospitals;