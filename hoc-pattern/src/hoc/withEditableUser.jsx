import React from "react";
import { useEffect } from "react";

const withEditableUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = React.useState(null);
    const [originalUser, setOriginalUser] = React.useState(null);

    useEffect(() => {
      (async () => {
        const response = await fetch(`http://localhost:8000/users/${userId}`);
        const data = await response.json();
        setUser(data);
        setOriginalUser(data);
      })();
    }, []);

    const onChangeUser = (changes) => {
      return setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await fetch(`http://localhost:8000/users/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      setUser(data);
      setOriginalUser(data);
      alert("User saved successfully");
    };

    const onResetUser = () => {
      setUser(originalUser);
      alert("User reset successfully");
    };

    return (
      <Component
        user={user}
        {...props}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};

export default withEditableUser;
