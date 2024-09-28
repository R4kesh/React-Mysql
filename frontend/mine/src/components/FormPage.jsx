// frontend/src/components/FormPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [data,setData]=useState([])
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/add', { name, email });
      if (response.status === 200) {
        navigate('/success');
      }
    } catch (err) {
      setError('Failed to save user');
    }
  };

  const handleShow=async ()=>{
    try {

      const res=await axios.get('http://localhost:5000/api/users/show')
      console.log('data',res.data.data)
      if(res){
        setData(res.data.data)
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h2>Enter your details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <button onClick={handleShow}>Show</button>
      {error && <p>{error}</p>}


      {data.map((user)=>
        <h1 key={user.id}>{user.name}</h1>
      )}
         
    </div>
  );
};

export default FormPage;
