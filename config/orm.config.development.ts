import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'username',
  password: 'password',
  database: 'docker-nest-postgres',
  entities: ['dist/**/entities/*.entity{.ts,.js}'],
  synchronize: true,
};
export default config;
