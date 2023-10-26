describe('Login aluno API', () => {
    it('Login com sucesso', () => {

      cy.request('POST','https://kubolms.com.br/universidade/admin/api/api.php',
      {
        dominio: 'homologacao',
        senha: '123456',
        classe: 'loginAlunos',
        metodo: 'autenticacaoLoginAluno',
        senha_aluno: '123456',
        login_aluno: 'aluno@aluno.com.br'
        
      }).then(response => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('mensagem', 'login_efetuado_com_sucesso')
      })
    })

    it('Login incorreto', () => {

      cy.request({
        method: 'POST',
        url: 'https://kubolms.com.br/universidade/admin/api/api.php',
        failOnStatusCode: false,
        dominio: 'homologacao',
        senha: '123456',
        classe: 'loginAlunos',
        metodo: 'autenticacaoLoginAluno',
        senha_aluno: '12345',
        login_aluno: 'aluno@aluno.com.br',
       
        
      }).then(response => {
        expect(response.status).to.equal(400)

    cy.debug();
      })
    })

    it('Login com login em branco', () => {

      cy.request({
        method: 'POST',
        url: 'https://kubolms.com.br/universidade/admin/api/api.php',
        failOnStatusCode: false,
        dominio: 'homologacao',
        senha: '123456',
        classe: 'loginAlunos',
        metodo: 'autenticacaoLoginAluno',
        senha_aluno: '12345',
        login_aluno: '',
       
        
      }).then(response => {
        expect(response.status).to.equal(400)

    cy.debug();
      })
    })

    it('Login com senha em branco', () => {

      cy.request({
        method: 'POST',
        url: 'https://kubolms.com.br/universidade/admin/api/api.php',
        failOnStatusCode: false,
        dominio: 'homologacao',
        senha: '123456',
        classe: 'loginAlunos',
        metodo: 'autenticacaoLoginAluno',
        senha_aluno: '',
        login_aluno: 'aluno@aluno.com.br',
       
        
      }).then(response => {
        expect(response.status).to.equal(400)

    cy.debug();
      })
    })
})