# Atividade 
<img src="http://www.uemg.br/images/Logo_uemg.jpg" align="right" />


________


## Documentação da API via Postman
- https://documenter.getpostman.com/view/10246660/TVCmR4ic

## Demonstração
Para rodar o servidor é necessário ter o Node/Npm configurados e possuir uma instância mysql rodando.
 
## Instalação e execução

**Caso ainda não tenha o npm/node instalado, prossiga em:** 
- https://www.npmjs.com/get-npm

**Instalação:** 

        $ yarn install OU npm install
        **Servidor Desenvolvimento**
        $ yarn dev OU npm dev
        **Servidor default**
        $ yarn start OU npm start


Crie um arquivo .env na raiz com suas configurações de banco:
DB_NAME=
DB_PORT=
DB_USER=
DB_PASS=
DB_ROOT_PASS=
DB_HOST=


**Servidor Express disponível em:**
- http://localhost:3000

## Configuração de banco
Para configurar o banco, pasta:
/src/database/connection.js

- Criar a tabela "avaliacao-guilherme"
- Realizar o insert:

`
CREATE TABLE `aulas_uemg`.`fornecedor` (
  `idfornecedor` INT NOT NULL AUTO_INCREMENT,
  `nome_fornecedor` VARCHAR(45) NOT NULL,
  `cnpj` VARCHAR(25) NOT NULL,
  `contato` VARCHAR(45) NULL,
  PRIMARY KEY (`idfornecedor`));
`


## Desenvolvido Por 
        
        - Guilherme Gomes Noronha

#### Como Avaliação de Conteúdo para a matéria de Programação para Dispositivos Móveis, da turma do 9º Período de Computação na UEMG Divinópolis - Noturno



