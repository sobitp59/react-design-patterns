import React from "react";

const ControlledOnboardingFlow = ({
  children,
  onFinish,
  onNext,
  currentIndex,
}) => {
  const currentChild = React.Children.toArray(children)[currentIndex];
  const goToNext = (stepData) => {
    onNext(stepData, children.length);
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

export default ControlledOnboardingFlow;
