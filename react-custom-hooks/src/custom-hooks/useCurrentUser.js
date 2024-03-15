import { useState, useEffect } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/current-user");
      const data = await response.json();
      setUser(data);
    })();
  }, []);

  return user;
};
