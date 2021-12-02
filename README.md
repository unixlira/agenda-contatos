# Agenda de Contatos

Sistema em laravel 8 e VUEjs com Bootstrapp

## Começando

### Clonando repositório do projeto

Requisitos necessários do sistema:

- PHP 7.4 ou >
- MySQL
- Composer
- Acesso a internet

Instalando no Linux

```
git clone https://github.com/unixlira/agenda-contatos.git
```

Depois de clonado, vamos acessar o projeto.

```
cd agenda-contatos
```

Instalando Dependências

```
composer update
```

```
npm install
```

```
npm ci && npm run dev
```

### Banco de dados MySQL

Para rodar a aplicação em ambiente local necessitamos de já ter instalado o MySQL, com isto podemos criar uma base de dados chamada `amar_assist` para manipular nossos dados do game.

Acesse o SGDB de sua preferência e crie seu banco

```
CREATE SCHEMA `amar_assist` ;
```

# Configurações

### .env

Agora com o projeto clonado e suas dependencias instaladas e seu banco de dados também criado, vamos configurar o arquivo .env que irá guardar as credenciais do acesso ao banco.

Vamos lá, pegue seu .env.exemple e renomeie para .env

Depois insira suas credenciais de acesso ao banco de dados nesse campos.
NOTA: No campo DB_DATABASE será inserido o Banco criado no SGBD.

Por exemplo:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=amar_assist
DB_USERNAME=seu usuario
DB_PASSWORD=sua senha
```

Agora precisamos gerar uma chave da aplicação que fica no campo APP_KEY.
Verifique se está dentro do diretório raiz do projeto e rode o comando para gerar a key:

```
php artisan key:generate
```

### Migração de tabelas do banco de dados

Após esses passo vamos agora criar nossas tabelas do nosso banco de dados.

```
php artisan migrate
```

## Iniciando projeto

Vamos iniciar nosso projeto acessando o terminal, dentro da raiz do projeto vamos rodar o comando que disponibilizará o sistema em nosso navegador.

```
php artisan serve
```

Agora para acessar nossa aplicação vamos abrir o navegador e digitar o endereço

```
http://127.0.0.1:8000
```

Abraço!
