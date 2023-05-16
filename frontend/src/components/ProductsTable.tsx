import React, { useEffect, useState } from 'react';
import { Product } from '../interfaces';

function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Code</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Name</th>
          <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Sales Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.code}>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{product.code}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{product.name}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{product.sales_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;