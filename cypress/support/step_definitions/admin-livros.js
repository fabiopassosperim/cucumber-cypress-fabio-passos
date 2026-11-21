import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

 // Cenário: Adicionar um novo livro

Given('que estou logado como administrador', () => {
  // Implementação para o passo "Dado que estou logado como administrador"
  cy.visit('http://localhost:3000/login.html');
  cy.get('#email').type('admin@biblioteca.com')
  cy.get('#password').type('admin123')
  cy.get('button[type="submit"]').click()
  cy.url().should('include', 'dashboard.html');
});

When('adiciono um novo livro com os dados obrigatórios', () => {
  // Implementação para o passo "Quando adiciono um novo livro com os dados obrigatórios"
  cy.get('.btn-primary').click()
  cy.get('.btn-success').click()
  cy.get('#book-title').type(`Reacher ${Date.now()}`)
  cy.get('#book-author').type('Lee Child')
  cy.get('#book-category').select('Policial')
  cy.get('#book-copies').type('5')
  cy.get('#save-book-btn').click()
  cy.wait(3000)
});
  
Then('deve aparecer uma mensagem de sucesso: {string}', (mensagem) => {
  // Implementação para o passo "Então deve aparecer uma mensagem de sucesso: "Livro adicionado com sucesso!""
  cy.get('#alert-container')
    .should('be.visible')
    .and('contain', mensagem);
});

 // Cenário: Tentar fazer login com credenciais inválidas

Given('que estou na página de login', () => {
  // Implementação para o passo "Dado que estou na página de login"
  cy.visit('http://localhost:3000/login.html');
});

When('tento fazer login com um email inválido', () => {
  // Implementação para o passo "Quando tento fazer login com um email inválido"
  cy.get('#email').type('adminbibilioteca.com')
  cy.get('#password').type('admin123')
  cy.get('button[type="submit"]').click()
});

Then('deve aparecer uma mensagem de validação: {string}', (mensagem) => {
  // Implementação para o passo "Então deve aparecer uma mensagem de validação: "Por favor, insira um email válido.""
  cy.get(':nth-child(1) > .invalid-feedback')
    .should('contain', mensagem);
});