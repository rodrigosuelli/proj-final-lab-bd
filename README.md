# proj-final-lab-bd

Api REST de textos com autenticação JWT - Projeto Final da Disciplina de Lab. de Banco de Dados, Fatec Mogi Mirim 2023

## Instalando as dependências

```bash
npm install
```

## Criando o banco de dados

Access psql inside github codespaces

```bash
psql -h localhost -U postgres postgres
```

Rode os seguintes comandos através do psql para criar ao banco de dados

```sql
# Cria o banco de dados proj_final_lab_bd
CREATE DATABASE proj_final_lab_bd;

# Lista os bancos de dados criados
\l

# Se conecta ao banco proj_final_lab_bd
\c proj_final_lab_bd

# Instala a extensão uuid-ossp no banco, necessária para gerar o UUID do usuário e criar a tabela users
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

# Cria tabela de usuários
CREATE TABLE users(
  id uuid DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

# Cria tabela de textos
CREATE TABLE texts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  user_id UUID,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

Ainda conectado ao banco ditey_api, execute o comando abaixo para listar as tabelas do banco e ter certeza de que elas foram criadas:

```bash
# Lista todas as tabelas do banco em que você está conectado
\dt
```

Saia do psql com o comando:

```bash
# Sai do psql e volta ao terminal
\q
```

## Executando o projeto

Faça uma copia do arquivo .env.example e a renomeie para .env

```bash
# Faz uma copia do arquivo .env.example e renomeia para .env
cp .env.example .env
```

No arquivo .env insira sua senha de usuário do postgres na variável `PGPASSWORD` e verifique se as outras variáveis de ambiente estão de acordo com o seu banco de dados.

Finalmente, com todas as dependências instaladas, o banco de dados criado e rodando na porta padrão(5432) e as variáveis de ambiente configuradas, você já pode executar o servidor no modo de desenvolvimento na porta(3333):

```bash
# Rodar o projeto
npm run start

# Rodar o projeto no modo de desenvolvimento (nodemon)
npm run dev
```
