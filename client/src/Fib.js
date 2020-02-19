import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Fib() {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  async function fetchValues() {
    const res = await axios.get('/api/values/current');
    setValues(res.data);
  }

  async function fetchIndexes() {
    const res = await axios.get('/api/values/all');
    setSeenIndexes(res.data);
  }

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  function renderSeenIndexes() {
    return seenIndexes.join(', ');
  }

  function renderValues() {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      )
    }

    return entries;
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', { index });
    setIndex('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Yo dawg, enter your index</label>
        <input value={index} onChange={event => setIndex(event.target.value)} />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen</h3>
      {renderSeenIndexes()}

      <h3>Calculated values</h3>
      {renderValues()}
    </div>
  )
}
