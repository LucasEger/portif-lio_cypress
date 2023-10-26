describe('Aluno API', () => {
    let userData
  
      it('Cadastro de Aluno', () => {
  
        cy.request('POST','https://kubolms.com.br/universidade/admin/api/api.php',
        {
            dominio: "homologacao",
            senha: "123456",
            classe: "aluno",
            metodo: "cadastrar",
            nome: "Aluno",
            sobrenome: "API",
            cpf: "841.459.110-83",
            codigo_aluno: "codigo aluno",
            telefone: "",
            celular: "",
            empresa: "1",
            funcao: "1",
            setor: "1",
            perfil: "1",
            universidade: "",
            nddigital: "",
            facebook: "",
            instagram: "",
            google: "",
            linkedin: "",
            id_instrutor: "",
            pontos: "",
            visualizacao: "1",
            login: "alunoapi@alunoapi.com",
            senha_aluno: "123456",
            liberar: "1",
            externo: "0",
            idioma: "pt",
            id_tutor: "",
            matricula_treinamentos: "",
            matricula_treinamentos_validade: "",
            equipe: "",
            gestor: "",
            data_nascimento: "",
            data_admissao: "",
            situacao: "",
            turno: "",
            enviar_email: "0"
          
        }).then(response => {
          expect(response.status).to.equal(200)
          userData = response.body
        })
      })

      it('Alteração do aluno', () => {

        cy.request('POST','https://kubolms.com.br/universidade/admin/api/api.php',
        {
          
            dominio: "homologacao",
            senha: "123456",
            classe: "aluno",
            metodo: "alterar",
            id: (userData.resposta),
            nome: "Aluno",
            sobrenome: "API Alterado",
            cpf: "928.625.540-30",
            codigo_aluno: "codigo aluno",
            telefone: "",
            celular: "",
            empresa: "1",
            funcao: "1",
            setor: "1",
            perfil: "1",
            universidade: "",
            nddigital: "",
            facebook: "",
            instagram: "",
            google: "",
            linkedin: "",
            id_instrutor: "",
            pontos: "",
            visualizacao: "1",
            login: "alunoapi2222@alunoapi1.com",
            senha_aluno: "123456",
            liberar: "1",
            externo: "0",
            idioma: "pt",
            id_tutor: "",
            matricula_treinamentos: "",
            matricula_treinamentos_validade: "",
            equipe: "",
            gestor: "",
            data_nascimento: "",
            data_admissao: "",
            situacao: "",
            turno: "",
            enviar_email: "0"
          
        }).then(response => {
          expect(response.status).to.equal(200)
        })
      })

      it('Exclusão aluno', () => {

        cy.request('POST','https://kubolms.com.br/universidade/admin/api/api.php',
        {
          
          dominio: "homologacao",
          senha: "123456",
          classe: "aluno",
          metodo: "excluir",
          id: (userData.resposta),
          
        }).then(response => {
          expect(response.status).to.equal(200)
        })
      })

  })