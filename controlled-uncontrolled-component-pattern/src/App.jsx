import ControlledForm from "./ControlledForm";
import UncontrolledModal from "./UncontrolledModal";
import UncontrolledForm from "./UncontrolledForm";
import ControlledModal from "./ControlledModal";
import { useState } from "react";
import UncontrolledOnboardingFlow from "./UncontrolledOnboardingFlow";
import ControlledOnboardingFlow from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>
    <button onClick={() => goToNext({ name: "Sobit Prasad" })}>next</button>
  </>
);

const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step Two</h1>
    <button onClick={() => goToNext({ age: "100" })}>next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step Three</h1>
    <p>congratulations! you qualify for senior discount!</p>
    <button onClick={() => goToNext({})}>next</button>
  </>
);

const StepFour = ({ goToNext }) => (
  <>
    <h1>Step Four</h1>
    <button onClick={() => goToNext({ hairColor: "green" })}>next</button>
  </>
);

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onboardingData, setOnboardingData] = useState({});

  const onNext = (stepData, childrenLength) => {
    if (currentIndex > childrenLength - 1) {
      alert("onboarding finished");
    }
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex((prev) => prev + 1);

    console.log(currentIndex);

    console.log(childrenLength);
  };

  return (
    <>
      {/* uncontrolled form */}
      <UncontrolledForm />
      <ControlledForm />
      {/* uncontrolled form */}

      {/* uncontrolled modal */}
      <UncontrolledModal />
      <ControlledModal
        shouldShow={shouldShowModal}
        onCloseRequest={() => setShouldShowModal(false)}
      >
        <h1>Modal Content</h1>
        <p>This is the modal content</p>
      </ControlledModal>
      <button onClick={() => setShouldShowModal((prev) => !prev)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>
      {/* uncontrolled modal */}

      {/* uncontrolled onboarding flow */}
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("onboarding finished");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>

      <ControlledOnboardingFlow onNext={onNext} currentIndex={currentIndex}>
        <StepOne />
        <StepTwo />
        {onboardingData?.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>

      {/* uncontrolled onboarding flow */}
    </>
  );
}

export default App;
