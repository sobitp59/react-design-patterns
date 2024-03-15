import React from "react";
import { useEffect } from "react";

const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = React.useState(null);
    useEffect(() => {
      (async () => {
        const response = await fetch(`http://localhost:8000/users/${userId}`);
        const data = await response.json();
        setUser(data);
      })();
    }, [userId]);

    console.log(user);

    return <Component {...props} user={user} />;
  };
};

export default withUser;
