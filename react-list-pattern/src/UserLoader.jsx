import React, { useState, useEffect } from "react";

const UserLoader = ({ children, userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:8000/users/${userId}`);
      const data = await response.json();
      console.log(data);
      setUser(data);
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UserLoader;
