import React, { useState, useEffect, ChangeEvent } from 'react';
import Papa from 'papaparse';

interface Product {
  code: number;
  name: string;
  cost_price: string;
  sales_price: string;
}

interface CSVRow {
  product_code: string;
  new_price: string;
}

interface Message {
  type: 'error' | 'success';
  text: string;
}

const CSVInputComponent: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [csvFile, setCsvFile] = useState<File | undefined>();
  const [isValid, setIsValid] = useState(false);
  const [validatedData, setValidatedData] = useState<CSVRow[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  // Fetch the data from the localhost
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data: Product[]) => setData(data));
  }, []);

  // Process the csv file
  const handleFileRead = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : undefined;
    setCsvFile(file);
  };

  const validateFile = () => {
    if (!csvFile) return;
  
    Papa.parse(csvFile, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
            let validatedRows: CSVRow[] = [];
            let newMessages: Message[] = [];
            (results.data as CSVRow[]).forEach((row, index) => {
          let rowValid = true; // Initialize rowValid to true at the start of each iteration

          // Skip if row is empty or any field is missing
          if (!row || !row.product_code || !row.new_price) {
            newMessages.push({ type: 'error', text: `Row ${index + 1} is empty or a field is missing` });
            rowValid = false;
          }

          // Check if product code exists
          const product = data.find((item) => Number(item.code) === parseInt(row.product_code));
          if (!product) {
            newMessages.push({ type: 'error', text: `Product code ${row.product_code} does not exist` });
            rowValid = false;
          }

          // Check if price is valid
          const newPrice = parseFloat(row.new_price);
          if (isNaN(newPrice)) {
            newMessages.push({ type: 'error', text: `Invalid price for product code ${row.product_code}` });
            rowValid = false;
          }

          // Check if new price is not lower than cost price
          if (newPrice < parseFloat(product?.cost_price || '0')) {
            newMessages.push({ type: 'error', text: `New price for product code ${row.product_code} can't be lower than cost price` });
            rowValid = false;
          }

          // Check if new price is not 10% higher or lower than the sales price
          const salesPrice = parseFloat(product?.sales_price || '0');
          if (newPrice < 0.9 * salesPrice || newPrice > 1.1 * salesPrice) {
            newMessages.push({ type: 'error', text: `New price for product code ${row.product_code} can't be 10% higher or lower than the sales price` });
            rowValid = false;
          }

          if (rowValid) {
            validatedRows.push(row);
            newMessages.push({
                type: 'success',
                text: `Product code ${row.product_code} is valid - Name: ${product?.name}, Sales Price: ${product?.sales_price}, New Price: ${row.new_price}`,
              });
            }
          });
          setIsValid(validatedRows.length === results.data.length); // Set isValid to true only if all rows are valid
          setValidatedData(validatedRows);
          setMessages(newMessages);
        }
      });
    };
  
    const handleUpdate = () => {
      if (isValid) {
        const updatePromises = validatedData.map(row => {
          const productCode = parseInt(row.product_code);
          const newPrice = parseFloat(row.new_price);
          
          return fetch('http://localhost:3001/products/updateProductPrice', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productCode, newPrice })
          });
        });
    
        Promise.all(updatePromises)
          .then(responses => Promise.all(responses.map(res => res.json())))
          .then(data => {
            console.log(data);
            window.location.reload();  // Refresh the page after all updates are completed
          })
          .catch(err => console.log('Error:', err));
      }
    };
    
    return (
      <div>
        <input type="file" accept=".csv" onChange={handleFileRead} />
        <button onClick={validateFile}>Validate</button>
        <button onClick={handleUpdate} disabled={!isValid}>Atualizar</button>
        {messages.map((message, index) => (
          <p key={index} style={{ color: message.type === 'error' ? 'red' : 'blue' }}>{message.text}</p>
        ))}
      </div>
    );
  };
  
  export default CSVInputComponent;
  
              