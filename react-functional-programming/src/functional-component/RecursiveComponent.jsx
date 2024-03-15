const isObject = (data) => typeof data === "object" && data !== null;

export const RescursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  return (
    <>
      {pairs.map(([key, value]) => (
        <>
          <li>
            {key} :{" "}
            <ul>
              <RescursiveComponent data={value} />
            </ul>
          </li>
        </>
      ))}
    </>
  );
};
