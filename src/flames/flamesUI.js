import { useState } from 'react';
import './flamesUI.css';

function FlamesUI() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [loading,setLoading]=useState(false);
  const clearForm = () => {
    setName1('');
    setName2('');
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    
  }

  return (
    <div className="container">
     {loading?<img src="https://media.tenor.com/axAeNjNIUBsAAAAC/spinner-loading.gif" alt='loading'></img>:null}
      <h2>Welcome to Flames</h2>
      <form id="myForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name1">Your name:</label>
          <input
            type="text"
            id="name1"
            name="myName"
            required
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name2">Your Partner name:</label>
          <input
            type="text"
            id="name2"
            name="mineName"
            required
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
        <div className='btn-container'>
          <button type="submit" className="btn" disabled={loading}>Submit</button>
          <button type="button" className="btn" disabled={loading} onClick={clearForm}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default FlamesUI;
