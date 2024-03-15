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

export const DangerButton = (props) => {
  return <Button color="red" {...props} />;
};

export const SuccessButton = (props) => {
  return <Button color="green" {...props} />;
};

export const WarningButton = (props) => {
  return <Button color="yellow" {...props} />;
};
