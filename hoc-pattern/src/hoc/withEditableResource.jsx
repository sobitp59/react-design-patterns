import React from "react";
import { useEffect } from "react";

const capitalizeString = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [data, setData] = React.useState(null);
    const [originalData, setOriginalData] = React.useState(null);

    useEffect(() => {
      (async () => {
        const response = await fetch(resourcePath);
        const result = await response.json();
        setData(result);
        setOriginalData(result);
      })();
    }, []);

    const onChange = (changes) => {
      console.log(data);
      return setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await fetch(resourcePath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setData(result);
      setOriginalData(result);
      alert("User saved successfully");
    };

    const onReset = () => {
      setData(originalData);
      alert("User reset successfully");
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalizeString(resourceName)}`]: onChange,
      [`onSave${capitalizeString(resourceName)}`]: onSave,
      [`onReset${capitalizeString(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};

export default withEditableResource;
