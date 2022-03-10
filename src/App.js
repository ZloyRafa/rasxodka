
import { useState } from "react/cjs/react.production.min";
import ProductList from "./components/ProductList";


function App() {
  const [products, setProducts] = useState([
    { id: 1, title: 'товар 1', price: 150, amount: 5 },
    { id: 2, title: 'товар 2', price: 321, amount: 12 },
    { id: 3, title: 'товар 3', price: 99.5, amount: 33 },
    { id: 4, title: 'товар 4', price: 199.99, amount: 14 },
    { id: 5, title: 'товар 5', price: 150, amount: 1 },
    { id: 6, title: 'товар 6', price: 150, amount: 0 },
    { id: 7, title: 'товар 7', price: 150, amount: 123 },
    { id: 8, title: 'товар 8', price: 150, amount: 14 },
    { id: 9, title: 'товар 9', price: 150, amount: 87 },
  ]);

  

  return (

    <div className="App">
      <form>
        
      </form>

      <ProductList
        products={products}
      />

    </div>
  );
}

export default App;
