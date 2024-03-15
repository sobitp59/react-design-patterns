import React from "react";
import { useEffect } from "react";

const ControlledForm = () => {
  const [error, setError] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [hairColor, setHairColor] = React.useState("");

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (name.length > 10) {
      setError("Name is too long");
    } else if (name.length > 0 && name.length < 3) {
      setError("Name is too short");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleNameInputChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />

      <button>submit</button>
    </form>
  );
};

export default ControlledForm;
