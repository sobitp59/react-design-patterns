import React, { useState, useEffect } from "react";

const ResourceLoader = ({ children, resourceUrl, resourceName }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(resourceUrl);
      const data = await response.json();
      console.log(data);
      setState(data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};

export default ResourceLoader;
