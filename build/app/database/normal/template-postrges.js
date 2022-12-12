"use strict";
//Criando uma tabela:
// CREATE TABLE clientes (
//  id SERIAL CONSTRAINT pk_id_cliente PRIMARY KEY,
//  nome varchar(150) NOT NULL,
//  idade integer NOT NULL,
//  uf varchar(2) NOT NULL
// );
//Inserindo valores em uma tabela:
// INSERT INTO NOME_DA_TABELA (coluna1, coluna2, coluna3, ....colunaN)
// VALUES (valor1, valor2, valor3, ..., valorN);
//Atualizando linhas da tabela:
// UPDATE NOME_DA_TABELA
// SET COLUNA1 = VALOR1, COLUNA2 = VALOR2, COLUNA3 = VALOR3, ...., COLUNAN = VALORN
// WHERE CONDICOES;
//Deletando uma tabela:
// DELETE FROM NOME_DA_TABELA WHERE CONDICOES;
//Selecionando colunas para mostrar:
// SELECT LISTA_DE_COLUNAS
// FROM LISTA_DE_TABELAS
// WHERE CONDICOES
// GROUP BY LISTA_DE_COLUNAS
// ORDER BY LISTA_DE_COLUNAS;
//Ordenar ascendente ou descendente:
// SELECT NOME, UF
// FROM CIDADE
// ORDER BY NOME DESC;
// SELECT CODIGO, DATA_VENDA, VALOR
// FROM VENDAS
// ORDER BY DATA_VENDA DESC, CODIGO ASC;
// SELECT *
// FROM EMPRESAS
// ORDER BY UF ASC, CIDADE ASC, NOME DESC;
//Adicionando colunas á tabela:
// ALTER TABLE dbo.doc_exa
// ADD column_b VARCHAR(20) NULL, column_c INT NULL ;
