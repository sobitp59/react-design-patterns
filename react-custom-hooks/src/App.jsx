import ProductInfo from "./ProductInfo";
import UserInfo from "./UserInfo";

function App() {
  return (
    <>
      <div>
        <UserInfo userId={1} />
        <UserInfo userId={2} />
        <UserInfo userId={3} />
        <UserInfo userId={4} />
        <ProductInfo productId={2} />
        <ProductInfo productId={4} />
      </div>
    </>
  );
}

export default App;
