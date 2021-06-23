import * as mysql from 'mysql';
import { dbConfig } from '../config/db-config'

const initPool = () => {
    
    const pool = mysql.createPool({
        connectionLimit: 10,
        password: dbConfig.DB_PASSWORD,
        user: dbConfig.DB_USER,
        database: dbConfig.DB_NAME,
        host: dbConfig.DB_HOST,
        port: dbConfig.DB_PORT,
      });

      return pool
}

export {
    initPool
}