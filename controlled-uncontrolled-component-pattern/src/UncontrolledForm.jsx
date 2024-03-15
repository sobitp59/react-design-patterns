import React from "react";

const UncontrolledForm = () => {
  const nameInputRef = React.useRef();
  const ageInputRef = React.useRef();
  const hairColorInputRef = React.useRef();

  const handleSubmit = (event) => {
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    const hairColor = hairColorInputRef.current.value;
    console.log({ name, age, hairColor });
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" ref={nameInputRef} />
      <input type="number" name="age" placeholder="Age" ref={ageInputRef} />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        ref={hairColorInputRef}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
