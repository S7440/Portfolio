import React from 'react';

function Project({ title, description, headerImage }) {
  return (

    <div className="project">
      <div className="project-header-image" style={{ backgroundImage: `url(${headerImage})` }}></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>

  );
}

export default Project;