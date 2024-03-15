import { useState, useEffect } from "react";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:8000/users/${userId}`);
      const data = await response.json();
      setUser(data);
    })();
  }, [userId]);

  return user;
};
