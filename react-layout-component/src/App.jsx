import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ background: "red" }}>Left Hand: {name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ background: "green" }}>Right Hand: {message}</h1>;
};

function App() {
  return (
    // <SplitScreen
    //   left={LeftHandComponent}
    //   right={RightHandComponent}
    //   leftWeight={5}
    // />
    <SplitScreen leftWeight={2} rightWeight={3}>
      <LeftHandComponent name={"Sobit Prasad"} />
      <RightHandComponent message={"Hello World"} />
    </SplitScreen>
  );
}

export default App;
