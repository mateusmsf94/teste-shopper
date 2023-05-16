import { createPool, Pool } from 'mysql2/promise';
import config from './config';

const pool: Pool = createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
