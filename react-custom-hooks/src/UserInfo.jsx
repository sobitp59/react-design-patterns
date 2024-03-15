import React from "react";
import { useCurrentUser } from "./custom-hooks/useCurrentUser";
import { useUser } from "./custom-hooks/useUser";
import { useResource } from "./custom-hooks/useResource";
import { useDataSource } from "./custom-hooks/useDataSource";
import { serverResource } from "./utils/serverResource";

const UserInfo = ({ userId }) => {
  // const user = useCurrentUser();
  // const user = useUser(userId);
  // const user = useResource(`http://localhost:8000/users/${userId}`);
  const user = useDataSource(
    serverResource(`http://localhost:8000/users/${userId}`)
  );

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
