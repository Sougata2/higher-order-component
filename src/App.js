import { faker } from "@faker-js/faker";
import ProductList from "./ProductList";
import withToggles from "./withToggles";

const products = Array.from({ length: 20 }, function () {
  return {
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  };
});

const ProductListWithToggle = withToggles(ProductList);

function App() {
  return (
    <>
      <ProductListWithToggle title={"Products"} items={products} />
    </>
  );
}

export default App;
