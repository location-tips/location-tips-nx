import path from 'path';

import { config as dotenvConfig } from 'dotenv';
import { Knex } from 'knex';

dotenvConfig({ path: path.join(__dirname, '../../.env') });

const { DATABASE_URL } = process.env;

export const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, 'src/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src/seeds'),
    },
  },
};

console.log('CONFIG!!', config);

export default config;
