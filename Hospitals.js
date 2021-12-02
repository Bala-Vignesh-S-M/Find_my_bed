import React, { useState } from 'react';
import {data, Ariyalurdata, Chengalpattudata, Chennaidata, Coimbatoredata, Cuddaloredata, Dharmapuridata, Dindiguldata, Erodedata, Kallakurichidata, Kanchipuramdata, Kanyakumaridata, Karurdata, Krishnagiridata, Maduraidata, Nagapattinamdata, Namakkaldata, Nilgirisdata, Perambalurdata, Pudukkottaidata, Ramanathapuramdata, Ranipetdata, Salemdata, Sivagangadata, Tenkasidata, Thanjavurdata, Thenidata, Thoothukudidata, Tiruchirappallidata, Tirunelvelidata, Tirupathurdata, Tiruppurdata, Tiruvallurdata, Tiruvannamalaidata, Tiruvarurdata, Velloredata, Viluppuramdata, Virudhunagardata} from '../data' 
import { Link } from 'react-router-dom';
export const Ariyalur = () => {
    const [Hospital, setHospital] = useState(Ariyalurdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}

export const Chengalpattu = () => {
    const [Hospital, setHospital] = useState(Chengalpattudata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}

export const Chennai = () => {
    const [Hospital, setHospital] = useState(Chennaidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Coimbatore = () => {
    const [Hospital, setHospital] = useState(Coimbatoredata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Cuddalore = () => {
    const [Hospital, setHospital] = useState(Cuddaloredata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Dharmapuri = () => {
    const [Hospital, setHospital] = useState(Dharmapuridata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Dindigul = () => {
    const [Hospital, setHospital] = useState(Dindiguldata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Erode = () => {
    const [Hospital, setHospital] = useState(Erodedata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Kallakurichi = () => {
    const [Hospital, setHospital] = useState(Kallakurichidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Kanchipuram = () => {
    const [Hospital, setHospital] = useState(Kanchipuramdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Kanyakumari = () => {
    const [Hospital, setHospital] = useState(Kanyakumaridata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Karur = () => {
    const [Hospital, setHospital] = useState(Karurdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
         <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Krishnagiri = () => {
    const [Hospital, setHospital] = useState(Krishnagiridata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Madurai = () => {
    const [Hospital, setHospital] = useState(Maduraidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Nagapattinam = () => {
    const [Hospital, setHospital] = useState(Nagapattinamdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Namakkal = () => {
    const [Hospital, setHospital] = useState(Namakkaldata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Nilgiris = () => {
    const [Hospital, setHospital] = useState(Nilgirisdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Perambalur = () => {
    const [Hospital, setHospital] = useState(Perambalurdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Pudukkottai = () => {
    const [Hospital, setHospital] = useState(Pudukkottaidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Ramanathapuram = () => {
    const [Hospital, setHospital] = useState(Ramanathapuramdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
         <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Ranipet = () => {
    const [Hospital, setHospital] = useState(Ranipetdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Salem = () => {
    const [Hospital, setHospital] = useState(Salemdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Sivaganga = () => {
    const [Hospital, setHospital] = useState(Sivagangadata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Tenkasi = () => {
    const [Hospital, setHospital] = useState(Tenkasidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Thanjavur = () => {
    const [Hospital, setHospital] = useState(Thanjavurdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Theni = () => {
    const [Hospital, setHospital] = useState(Thenidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Thoothukudi = () => {
    const [Hospital, setHospital] = useState(Thoothukudidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Tiruchirappalli = () => {
    const [Hospital, setHospital] = useState(Tiruchirappallidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Tirunelveli = () => {
    const [Hospital, setHospital] = useState(Tirunelvelidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Tirupathur = () => {
    const [Hospital, setHospital] = useState(Tirupathurdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Tiruppur = () => {
    const [Hospital, setHospital] = useState(Tiruppurdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Tiruvallur = () => {
    const [Hospital, setHospital] = useState(Tiruvallurdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Tiruvannamalai = () => {
    const [Hospital, setHospital] = useState(Tiruvannamalaidata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Tiruvarur = () => {
    const [Hospital, setHospital] = useState(Tiruvarurdata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Vellore = () => {
    const [Hospital, setHospital] = useState(Velloredata);
    
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}
export const Viluppuram = () => {
    const [Hospital, setHospital] = useState(Viluppuramdata);
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}

export const Virudhunagar = () => {
    const [Hospital, setHospital] = useState(Virudhunagardata);
  return (
    <div>
      <h1>Hospital Page</h1>
      {Hospital.map((person) => {
        return (
          <div key={person.id} className='item'>
              <h3>Hospital:&nbsp;&nbsp;<b>{person.Hname}</b></h3>  
              <h3>Beds Available:&nbsp;&nbsp;<b>{person.beds}</b></h3>
              <h3>contact:&nbsp;&nbsp;<b>{person.cno}</b></h3>
          </div>
        );
      })}
    </div>
  );
}

