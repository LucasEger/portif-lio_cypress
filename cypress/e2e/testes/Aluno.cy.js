describe('Validações Cadastro de usuário Kubo', () => {
 
    beforeEach(() => {
      cy.login_homologação()
    })
 
    it('Validação Aluno - Digite um nome', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.url()
            .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')

        cy.get('#nome').should('be.visible').should('have.value','')
        cy.get('#sobrenome').should('be.visible').type('Eger').should('have.value','Eger')
        cy.get('.col-sm-6 > #email').type('alunoexemploa12@aluno.com.br').should('have.value', 'alunoexemploa12@aluno.com.br')
        cy.get('#cpf').type('17171623637').should('have.value','171.716.236-37')
        cy.get('#box-empresa').click().get('[data-option-array-index="1"]').click({force: true})
        cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="0"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.contains('Digite um nome').should('be.visible')
    })
    
    it('Validação Aluno - Digite um sobrenome', () => {
      cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
      cy.url()
          .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')

      cy.get('#nome').should('be.visible').type('Lucas').should('have.value','Lucas')
      cy.get('#sobrenome').should('be.visible').should('have.value','')
      cy.get('.col-sm-6 > #email').type('alunoexemploa12@aluno.com.br').should('have.value', 'alunoexemploa12@aluno.com.br')
      cy.get('#cpf').type('17171623637').should('have.value','171.716.236-37')
      cy.get('#box-empresa').click().get('[data-option-array-index="1"]').click({force: true})
      cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="0"]').click({force: true})
      cy.get('.col-sm-6 > .btn').click()
      cy.contains('Digite um sobrenome').should('be.visible')
      
    })

    it('Validação Aluno - e-mail em branco', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.url()
              .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')      
        cy.get('#nome').should('be.visible').type('Lucas').should('have.value','Lucas')
        cy.get('#sobrenome').should('be.visible').type('Eger').should('have.value','Eger')
        cy.get('.col-sm-6 > #email').should('be.visible').should('have.value', '')
        cy.get('#cpf').type('17171623637').should('have.value','171.716.236-37')
        cy.get('#box-empresa').click().get('[data-option-array-index="1"]').click({force: true})
        cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="0"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.contains('E-mail não válido').should('be.visible') 
    })

      it('Validação Aluno - E-mail já cadastrado anteriormente! Tente outro endereço.', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.url()
              .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.get('#nome').should('be.visible').type('Lucas').should('have.value','Lucas')
        cy.get('#sobrenome').should('be.visible').type('Eger').should('have.value','Eger')
        cy.get('.col-sm-6 > #email').should('be.visible').type('aluno@aluno.com.br').should('have.value', 'aluno@aluno.com.br')
        cy.get('#cpf').type('17171623637').should('have.value','171.716.236-37')
        cy.get('#box-empresa').click().get('[data-option-array-index="1"]').click({force: true})
        cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="0"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.contains('E-mail já cadastrado anteriormente! Tente outro endereço.').should('be.visible')   
      })

      it('Validação Aluno - E-mail não válido', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.url()
              .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.get('#nome').should('be.visible').type('Lucas').should('have.value','Lucas')
        cy.get('#sobrenome').should('be.visible').type('Eger').should('have.value','Eger')
        cy.get('.col-sm-6 > #email').should('be.visible').type('alunoaluno.com.br').should('have.value', 'alunoaluno.com.br')
        cy.get('#cpf').type('17171623637').should('have.value','171.716.236-37')
        cy.get('#box-empresa').click().get('[data-option-array-index="1"]').click({force: true})
        cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="0"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.contains('E-mail não válido').should('be.visible')     
      })


      it('Validação Aluno - CPF é inválido', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.url()
              .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.get('#nome').should('be.visible').type('Lucas').should('have.value','Lucas')
        cy.get('#sobrenome').should('be.visible').type('Eger').should('have.value','Eger')
        cy.get('.col-sm-6 > #email').should('be.visible').type('alunoexemploa12@aluno.com.br').should('have.value', 'alunoexemploa12@aluno.com.br')
        cy.get('#box-empresa').click().get('[data-option-array-index="1"]').click({force: true})
        cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="0"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.contains('CPF é obrigatório').should('be.visible')   
      })

      it('Validação Aluno - CPF ja cadastrado anteriormente', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.url()
              .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.get('#nome').should('be.visible').type('Lucas').should('have.value','Lucas')
        cy.get('#sobrenome').should('be.visible').type('Eger').should('have.value','Eger')
        cy.get('.col-sm-6 > #email').should('be.visible').type('alunoexemploa12@aluno.com.br').should('have.value', 'alunoexemploa12@aluno.com.br')
        cy.get('#cpf').type('26784530810').should('have.value','267.845.308-10')
        cy.get('#box-empresa').click().get('[data-option-array-index="1"]').click({force: true})
        cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="0"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.contains('CPF ja cadastrado anteriormente').should('be.visible')   
      })

      it('Validação Aluno - Selecione uma empresa', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.url()
            .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')

        cy.get('#nome').type('Lucas').should('be.visible').should('have.value','Lucas')
        cy.get('#sobrenome').should('be.visible').should('have.value','')
        cy.get('.col-sm-6 > #email').type('alunoexemploa12@aluno.com.br').should('have.value', 'alunoexemploa12@aluno.com.br')
        cy.get('#cpf').type('17171623637').should('have.value','171.716.236-37')
        cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="0"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.contains('Selecione uma empresa').should('be.visible')
      })

      it('Validação Aluno - Selecione um perfil', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.url()
            .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
  
        cy.get('#nome').should('be.visible').type('Lucas').should('have.value','Lucas')
        cy.get('#sobrenome').should('be.visible').type('Eger').should('have.value','Eger')
        cy.get('.col-sm-6 > #email').type('alunoexemploa12@aluno.com.br').should('have.value', 'alunoexemploa12@aluno.com.br')
        cy.get('#cpf').type('17171623637').should('have.value','171.716.236-37')
        cy.get('#box-empresa').click().get('[data-option-array-index="1"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.contains('Selecione um perfil').should('be.visible')
      })

       it('Aluno - Cadastro', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
        cy.url()
            .should('be.equal','https://kubolms.com.br/universidade/admin/dados/cadastrar_aluno')
  
        cy.get('#nome').should('be.visible').type('Teste 123').should('have.value','Teste 123')
        cy.get('#sobrenome').should('be.visible').type('Teste 321').should('have.value','Teste 321')
        cy.get('.col-sm-6 > #email').type('alunoexemploa12@aluno123.com.br').should('have.value', 'alunoexemploa12@aluno123.com.br')
        cy.get('#cpf').type('97937534559').should('have.value','979.375.345-59')
        cy.get('#box-empresa').click().get('[data-option-array-index="1"]').click({force: true})
        cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="0"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.contains('Dados inseridos com sucesso!').should('be.visible')
      })


      it('Aluno - Alteração dos dados', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/listar_aluno_empresa')
        cy.url()
            .should('be.equal','https://kubolms.com.br/universidade/admin/dados/listar_aluno_empresa')

        cy.get(':nth-child(4) > .form-control').type('alunoexemploa12@aluno123.com.br')
        cy.get('.panel-footer > .btn').click()
        cy.contains('alunoexemploa12@aluno123.com.br').should('be.visible')
        cy.get('.input-group-btn > .btn').click() 
        cy.get('.dropdown-menu > :nth-child(5) > a > span').click()
  
        cy.get('#nome').clear().should('have.value','')
          .type('Usuário Alterado').should('have.value','Usuário Alterado')
        cy.get('#sobrenome').clear().should('have.value','')
          .type('Teste').should('have.value','Teste')
        cy.get('.col-sm-6 > #email').clear().should('have.value','')
          .type('alunoalterado12@alunoalterado123.com.br').should('have.value', 'alunoalterado12@alunoalterado123.com.br')
        cy.get('#cpf').clear().type('78330260003').should('have.value','783.302.600-03')
        cy.get('#empresa_chosen > .chosen-single').click().get('[data-option-array-index="2"]').click()
        cy.get('.chosen-choices').click().get('#perfil_chosen > .chosen-drop > .chosen-results > [data-option-array-index="2"]').click({force: true})
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.alert-success').should('be.visible')
      })
 
      it('Aluno - Excluindo aluno cadastrado', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/listar_aluno_empresa')
        cy.url()
              .should('be.equal','https://kubolms.com.br/universidade/admin/dados/listar_aluno_empresa')
        cy.get(':nth-child(4) > .form-control').type('alunoalterado12@alunoalterado123.com.br')
        cy.get('.panel-footer > .btn').click()
        cy.contains('alunoalterado12@alunoalterado123.com.br').should('be.visible')
        cy.get('.input-group-btn > .btn').click() 
        cy.get('.dropdown-menu > :nth-child(5) > a > span').click() 
        cy.get('.deletar > .btn').click() 
        cy.get('.btn-danger').click()   
        cy.contains('Dados excluídos com sucesso!').should('be.visible')
      })
})
