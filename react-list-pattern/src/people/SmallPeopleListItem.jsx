import React from "react";

const SmallPeopleListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      {name} - {age}
    </p>
  );
};

export default SmallPeopleListItem;
