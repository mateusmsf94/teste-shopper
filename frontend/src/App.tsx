import React, { useState, useEffect } from "react";
import CSVInput from './components/InputFile';
import ProductsTable from './components/ProductsTable';
import PacksTable from './components/PacksTable';

function App() {
  const [products, setProducts] = useState([]);
  const [packs, setPacks] = useState([]);

  

  return (
    <div className="App">
      <CSVInput  />
      <ProductsTable  />
      <PacksTable />
    </div>
  );
}

export default App;
