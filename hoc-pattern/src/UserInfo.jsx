import React from "react";

const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
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
  ) : (
    <p>loading...</p>
  );
};

export default UserInfo;
