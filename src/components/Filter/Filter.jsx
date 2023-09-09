import React from 'react';

const Filter = ({ onChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        onChange={onChange}
        type="text"
        name="name"
        label="Search"
        id="search"
      />
    </div>
  );
};

export default Filter;
