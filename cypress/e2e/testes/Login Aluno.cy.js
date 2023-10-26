describe('Login Aluno', () => {
 
    it('Login do Aluno', () => {

        cy.visit('https://kubolms.com.br/homologacao')
        cy.url()
            .should('be.equal','https://kubolms.com.br/homologacao/')

        cy.get('.uname').type('aluno@aluno.com.br')
        cy.get('[name="senha"]').type('123456')

        cy.get('.btn').click()

        cy.wait(1000)
        cy.contains('Olá, Aluno Demonstração')

    })

    it('E-mail incorreto', () => {

        cy.visit('https://kubolms.com.br/homologacao')
        cy.url()
            .should('be.equal','https://kubolms.com.br/homologacao/')

        cy.get('.uname').type('aluno@22aluno.com.br')
        cy.get('[name="senha"]').type('123456')

        cy.get('.btn').click()

        cy.get('.alert').should('be.visible')
    })

    it('Senha inválida', () => {

        cy.visit('https://kubolms.com.br/homologacao')
        cy.url()
            .should('be.equal','https://kubolms.com.br/homologacao/')

        cy.get('.uname').type('aluno@aluno.com.br')
        cy.get('[name="senha"]').type('1234sfg')

        cy.get('.btn').click()

        cy.get('.alert').should('be.visible')
    })

    it('E-mail em branco', () => {

        cy.visit('https://kubolms.com.br/homologacao')
        cy.url()
            .should('be.equal','https://kubolms.com.br/homologacao/')

        cy.get('[name="senha"]').type('123456')

        cy.get('.btn').click()

        cy.get('.alert').should('be.visible')
    })

    it('Senha em branco', () => {

        cy.visit('https://kubolms.com.br/homologacao')
        cy.url()
            .should('be.equal','https://kubolms.com.br/homologacao/')

        cy.get('.uname').type('aluno@aluno.com.br')

        cy.get('.btn').click()

        cy.get('.alert').should('be.visible')
    })

    it('Aluno desativado', () => {

        cy.visit('https://kubolms.com.br/homologacao')
        cy.url()
            .should('be.equal','https://kubolms.com.br/homologacao/')

        cy.get('.uname').type('alunodesativado@desativado.com.br')
        cy.get('[name="senha"]').type('123456')

        cy.get('.btn').click()

        cy.get('.alert').should('be.visible')

    })
})