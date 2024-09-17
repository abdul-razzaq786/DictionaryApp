import React, { useState } from 'react';

const Dictionary = () => {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
    { word: "Java", meaning: "A language you can use to write instructions for computers." }
];

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const entry = dictionary.find(item => item.word.toLowerCase() === lowercasedSearchTerm);
    setResult(entry ? entry.meaning : 'Word not found in the dictionary.');
  };

  return (
    <div style={{
        textAlign:'center'
    }}>
        <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h3>Definition:</h3>
      <div>
        {result}
      </div>
    </div>
  );
};

export default Dictionary;
