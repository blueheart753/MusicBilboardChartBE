import React from 'react';

function Section(props) {
  const { titleMent, ment, mentClass } = props;

  return (
    <div className="mentBox">
      <div className="showMents show_page">
        <h2 className={mentClass}>{titleMent}</h2>
        <p>{ment}</p>
      </div>
    </div>
  );
}

export default Section;
