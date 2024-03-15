import React from "react";

const LargePeopleListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{hairColor}</p>
      <h3>hobbies</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

export default LargePeopleListItem;
