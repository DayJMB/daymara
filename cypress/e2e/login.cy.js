describe("Login", () => {     
  it ('Login exitoso', ()=>{
cy.visit("https://www.netflix.com/")
cy.get('[id="signIn"]').click()
cy.get('[for="id_userLoginId"]')
.type("daalmjosea@gmail.com")
cy.get('#id_password')
.type("daaljose1988")
cy.get('[class="btn login-button btn-submit btn-small"]').click()
cy.contains('¿Quién está viendo ahora?').should('be.visible') 
})
})
