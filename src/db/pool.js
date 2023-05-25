const { Pool } = require('pg');

// Instancia a biblioteca para usar o banco de dados Postgresql
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Exporta o objeto pool para que possamos usá-lo em outros arquivos para rodar consultas e comandos no banco de dados
module.exports = pool;
