import React from "react";
import withEditableUser from "./hoc/withEditableUser";
import withEditableResource from "./hoc/withEditableResource";

const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <label name={name}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label name={age}>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => onChangeUser({ age: e.target.value })}
          />
        </label>
        <label name={hairColor}>
          Hair Color:
          <input
            value={hairColor}
            type="text"
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onSaveUser}>Save</button>
        <button onClick={onResetUser}>reset</button>
      </>
    ) : (
      <p>loading...</p>
    );
  },
  "http://localhost:8000/users/2",
  "user"
);

export default UserInfoForm;

// import React from "react";
// import withEditableUser from "./hoc/withEditableUser";

// const UserInfoForm = withEditableUser(
//   ({ user, onChangeUser, onSaveUser, onResetUser }) => {
//     const { name, age, hairColor } = user || {};

//     return user ? (
//       <>
//         <label name={name}>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => onChangeUser({ name: e.target.value })}
//           />
//         </label>
//         <label name={age}>
//           Age:
//           <input
//             type="text"
//             value={age}
//             onChange={(e) => onChangeUser({ age: e.target.value })}
//           />
//         </label>
//         <label name={hairColor}>
//           Hair Color:
//           <input
//             value={hairColor}
//             type="text"
//             onChange={(e) => onChangeUser({ hairColor: e.target.value })}
//           />
//         </label>
//         <button onClick={() => onSaveUser({ user })}>Save</button>
//         <button onClick={onResetUser}>reset</button>
//       </>
//     ) : (
//       <p>loading...</p>
//     );
//   },
//   "3"
// );

// export default UserInfoForm;
