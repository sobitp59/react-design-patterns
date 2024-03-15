import CurrentUserLoader from "./CurrentUserLoader";
import DataSource from "./DataSource";
import Modal from "./Modal";
import NumberedList from "./NumberedList";
import RegularList from "./RegularList";
import ResourceLoader from "./ResourceLoader";
import UserLoader from "./UserLoader";
import LargePeopleListItem from "./people/LargePeopleListItem";
import SmallPeopleListItem from "./people/SmallPeopleListItem";
import UserInfo from "./people/UserInfo";
import LargeProductListItem from "./products/LargeProductListItem";
import ProductInfo from "./products/ProductInfo";
import SmallProductListItem from "./products/SmallProductListItem";

const getServerData = (url) => async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Paragraph = ({ text }) => <p>{text}</p>;
const Text = ({ text }) => <h1>{text}</h1>;

function App() {
  return (
    <>
      {/* -------- MODAL ------- */}
      {/* <Modal>
          <LargeProductListItem product={products[0]} />
        </Modal> */}

      {/* -------- LIST PATTERN ------- */}
      {/* <NumberedList
        items={people}
        resourceName="person"
        itemComponent={SmallPeopleListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePeopleListItem}
      />
      <hr />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      /> */}

      {/* -------- CONTAINER PATTERN ------- */}

      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}

      {/* <UserLoader userId="3">
        <UserInfo />
      </UserLoader> */}

      <ResourceLoader
        resourceUrl={`http://localhost:8000/users/3`}
        resourceName={"user"}
      >
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader
        resourceUrl={`http://localhost:8000/products/4`}
        resourceName={"product"}
      >
        <ProductInfo />
      </ResourceLoader>
      <DataSource
        getDataFunc={getServerData("http://localhost:8000/users/3")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={getServerData("http://localhost:8000/products/4")}
        resourceName={"product"}
      >
        <ProductInfo />
      </DataSource>
      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName={"text"}
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
