import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString: 'postgres://usuario:contraseña@host:5432/base',
  ssl: {
    rejectUnauthorized: false
  }
});

await client.connect(); // Conectar UNA sola vez al iniciar

export default client;
