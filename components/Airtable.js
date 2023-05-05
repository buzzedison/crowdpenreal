import React from 'react';

const AirtableForm = () => {
  return (
    <iframe
      className="airtable-embed"
      src="https://airtable.com/embed/shrYWPiAcooakbBA0?backgroundColor=gray"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style={{ background: 'transparent', border: '1px solid #ccc' }}
    ></iframe>
  );
};

export default AirtableForm;
