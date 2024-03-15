import { useState, useEffect } from "react";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(resourceUrl);
      const data = await response.json();
      setResource(data);
    })();
  }, [resourceUrl]);

  return resource;
};
