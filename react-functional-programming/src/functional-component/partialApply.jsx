export const partialApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size ? "16px" : "8px",
        fontSize: size ? "32px" : "16px",
        background: color ? color : "blue",
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const HappyButton = partialApply(Button, { color: "purple" });
export const SadButton = partialApply(Button, {
  color: "darkblue",
  size: "large",
});
