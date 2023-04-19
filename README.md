# proj-final-lab-bd

Api REST de textos com autenticação JWT - Projeto Final da Disciplina de Lab. de Banco de Dados, Fatec Mogi Mirim 2023

## Criando o banco de dados

Access psql inside github codespaces

```bash
psql -h localhost -U postgres postgres
```

Rode os seguintes comandos através do psql para criar ao banco de dados

```sql
# Cria o banco de dados proj_final_lab_bd
$ CREATE DATABASE proj_final_lab_bd;

# Se conecta ao banco proj_final_lab_bd
$ \c proj_final_lab_bd

# Instala a extensão uuid-ossp no banco, necessária para gerar o UUID do usuário e criar a tabela users
$ CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

# Cria tabela de usuários
$ CREATE TABLE users(
  id uuid DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

# Cria tabela de textos
$ CREATE TABLE texts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  user_id UUID,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

Saia do psql com o comando:

```bash
# Sai do psql e volta ao terminal
$ \
q
```
