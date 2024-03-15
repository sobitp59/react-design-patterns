import { RescursiveComponent } from "./functional-component/RecursiveComponent";
import {
  DangerButton,
  SuccessButton,
  WarningButton,
} from "./functional-component/composition";
import { HappyButton, SadButton } from "./functional-component/partialApply";

const nestedMessages = {
  a: 1,
  b: {
    b1: 2,
    b2: {
      b21: 3,
    },
    b3: {
      b31: {
        message: "Hello",
      },
      b32: {
        message: "hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
  d: {
    d1: {
      d11: {
        message: "Hey there!",
      },
    },
  },
  e: {
    e1: "nice to meet you",
  },
  f: {
    f1: {
      f11: {
        f111: {
          f1111: {
            f11111: {
              f111111: {
                f1111111: {
                  message: "7 deep nested object",
                },
              },
            },
          },
        },
      },
    },
  },
};

function App() {
  return (
    <>
      <RescursiveComponent data={nestedMessages} />
      <DangerButton text="Task deleted!" />
      <SuccessButton text="Data saved successfully!" />
      <WarningButton text="Warning! Do not click!" />
      <HappyButton text="Happy!" />
      <SadButton text="Sad!" />
    </>
  );
}

export default App;
