describe('Importação de usuário', () => {
    beforeEach(() => {
      cy.login_homologação()
    })
  
    it('Inserção de arquivo, cadastro e validações', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/importar_aluno')
        cy.url()
            .should('be.equal','https://kubolms.com.br/universidade/admin/dados/importar_aluno')


            cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/lista_de_importacao_de_alunos (16).csv',{force: true})
            cy.get('.paginate_enabled_previous').click()

            cy.wait(2000)

            cy.get('.alert-success').should('be.visible')

            cy.contains('Erro na linha:(2), falha: (digite_um_nome)').should('be.visible')
            cy.contains('Erro na linha:(3), falha: (digite_um_sobrenome)').should('be.visible')
            cy.contains('Erro na linha:(4), falha: (cpf_ja_cadastrado_anteriormente)').should('be.visible')
            cy.contains('Erro na linha:(5), falha: (cpf_e_obrigatorio)').should('be.visible')
            cy.contains('Erro na linha:(6), falha: (selecione_uma_empresa)').should('be.visible')
            cy.contains('Erro na linha:(7), falha: (selecione_um_perfil)').should('be.visible')
            cy.contains('Erro na linha:(8), falha: (email_invalido)').should('be.visible')
            cy.contains('Erro na linha:(9), falha: (email_ja_cadastrado_anteriormente_tente_outro_endereco)').should('be.visible')
            cy.contains('Erro na linha:(10), falha: (digite_a_senha)').should('be.visible')
            cy.contains('Erro na linha:(11), falha: (email_invalido)').should('be.visible')
            cy.contains('Erro na linha:(12), falha: (selecione_uma_empresa)').should('be.visible')

    })

    it('Exclusão do usuário cadastrado via planilha', () => {
        cy.visit('https://kubolms.com.br/universidade/admin/dados/listar_aluno_empresa')
        cy.url()
            .should('be.equal','https://kubolms.com.br/universidade/admin/dados/listar_aluno_empresa')

        cy.get(':nth-child(4) > .form-control').type('aluno31@aluno31.com.br')
        cy.get('.panel-footer > .btn').click()
        cy.contains('Aluno Teste').should('be.visible')
        cy.get('.input-group-btn > .btn').click()
            cy.get('.dropdown-menu > :nth-child(5) > a').click()

        cy.get('.deletar > .btn').click()       
        cy.get('.btn-danger').click()
    })

    
    
    
})
