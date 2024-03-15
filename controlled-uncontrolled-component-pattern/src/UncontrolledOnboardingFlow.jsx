import React from "react";

const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = React.useState({});
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const currentChild = React.Children.toArray(children)[currentIndex];
  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      ...onboardingData,
      ...stepData,
    };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }
    setOnboardingData(updatedData);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

export default UncontrolledOnboardingFlow;
