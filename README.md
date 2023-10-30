# Testes-Automatizados-Cypress
Portifólio de testes automatizados web e api em Cypress em um sistema de universidade corporativa.

Neste portifólio são executados 5 testes automatizados utilizando Cypress em um ambiente de homologação controlado, 3 são WEB  e 2 em API, dentre estes testes existem rotinas de verificações em campos obrigatórios, campos com preenchimento incorreto, cadastro, alteração e exclusão de dados, upload em planilha de importação e verificação de dados. 

Todos os testes são recicláveis, podendo ser rodados sempre sem qualquer interação ou reset de configuração manualmente. 

Em testes de api, utilizo variáveis para armazenar o id criado no cadastro do aluno e utilizar na consulta de alteração e exclusão. 

Estes testes estão com integração com o github actions.

Abaixo está especificado com a descrição dos testes, o caminho para o código e quais validações é executada, no arquivo portifolio_cypress/resultados está o tempo e quantidade de testes totais executadas.

_________________________________
WEB: 
______________________________________________________________________________
cypress/e2e/testes/Aluno.cy.js

Neste teste, realizamos o cadastro de um usuário em um formulário, fazemos as seguintes verificações:

  1) Cadastro
  2) Alteração 
  3) Exclusão
  4) Validação de campos obrigatórios
  5) Validação de informações já preenchidas
  6) Validação de informações preenchidas incorretamente

________________________________________________________________________________
cypress/e2e/testes/Login Aluno.cy.js

Neste teste, validamos o login, sendo validados as seguintes rotinas:

  1) Login com sucesso
  2) Login incorreto
  3) Login com e-mail em branco
  4) Login com a senha em branco
________________________________________________________________________________
cypress/e2e/testes/Importação Aluno.cy.js

Neste teste, fazemos o upload de uma planilha de importação de usuário e posteriormente validando os dados recebidos pela plataforma:

  1) Validamos se o upload foi feito corretamente
  2) validamos as validações se foram feitas corretamente conforme o preenchimento da planilha
______________________________
API:
_________________________________________________________________________________
cypress/e2e/testes/Aluno_API.cy.js

Neste teste, realizamos o cadastro de um usuário via API, fazemos as seguintes verificações:

  1) Cadastro
  2) Alteração 
  3) Exclusão
________________________________________________________________________________
cypress/e2e/testes/Login Aluno API.cy.js

Neste teste, validamos o login utilizando uma API, sendo validados as seguintes rotinas:

  1) Login com sucesso
  2) Login incorreto
  3) Login com e-mail em branco
  4) Login com a senha em branco
