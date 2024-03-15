import React from "react";
import printProps from "./hoc/printProps";
import UserInfo from "./UserInfo";
import withUser from "./hoc/withUser";
import UserInfoForm from "./UserInfoForm";

// const UserInfoWrapped = printProps(UserInfo);
const UserInfoWrapped = withUser(UserInfo, "2");

const App = () => {
  return <UserInfoForm />;
};

export default App;
