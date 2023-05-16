import React, { useState, useEffect } from 'react';

interface Pack {
  pack_id: number;
  product_names: string;
  total_price: string;
}

const PacksTable = () => {
  const [packs, setPacks] = useState<Pack[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/packs')
      .then((response) => response.json())
      .then((data) => setPacks(data));
  }, []);

  return (
    <table style={{ minWidth: '650px', borderCollapse: 'collapse', border: '1px solid black' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Pack ID</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Product Names</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {packs.map((pack) => (
          <tr key={pack.pack_id}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{pack.pack_id}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{pack.product_names}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{pack.total_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PacksTable;
