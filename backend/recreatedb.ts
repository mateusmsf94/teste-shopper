import fs from 'fs';
import path from 'path';

import { Pool } from 'mysql2/promise';
import pool from './src/database/config/db';

export default async function recreateDatabase(conn: Pool) {
  try {
    await conn.query('CREATE DATABASE IF NOT EXISTS SHOPPER');
    await conn.query('USE SHOPPER');
    const importPath = path.resolve(__dirname, 'database.sql');
    const seedDBContent = fs.readFileSync(importPath).toString();
    const queries = seedDBContent.split(';').filter((p) => p.trim());
    for (let i = 0; i < queries.length; i += 1) { 
      const query = queries[i];
      await conn.query(query);
    }
  } catch (error) {
    console.log('Banco Falha em restaurar o Banco', error);
  }
}

if (require.main === module) {

  recreateDatabase(pool)
    .then(async () => {
      console.log('Banco Restaurado com sucesso');
      await pool.end()
      process.exit(0);
    });
}