// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Visit the  Page Sitio tarjeta', () => {
    it('User do Login success', () => {
      cy.visit('https://privqa.lapolar.cl')
      
      //Insert user and password
      cy.get('#login-rut')
        .type('17729454-3')       
      cy.get('input[type=password]')
        .type('1234')      
      
      //Click in loggin
      cy.get('.button-primary').click()
      cy.url().should('include','/dashboard')
      cy.contains('Mi Cuenta')
              
    })

    it('login with invalid user', () => {
      cy.visit('https://privqa.lapolar.cl')
      
      //Insert user and password
      cy.get('#login-rut')
        .type('26352334-2')       
      cy.get('input[type=password]')
        .type('1234')      
      
      //Click in loggin
      cy.get('.button-primary').click()
      
      cy.get('.data-error-form')
        .contains('Tu Rut o Clave no son válidos')
           
    })

    it('Consult user profile', () => {
      cy.visit('https://privqa.lapolar.cl')
      
      //Insert user and password
      cy.get('#login-rut')
        .type('17729454-3')       
      cy.get('input[type=password]')
        .type('1234')      
      cy.get('.button-primary').click()

      cy.url().should('include','/dashboard')
      
      cy.contains('Mi Perfil')
      cy.get('.icon-Icon_user').click()
      cy.url().should('include','/perfil')                  
    })

    it('User close session', () => {
      cy.visit('https://privqa.lapolar.cl')
      
      //Insert user and password
      cy.get('#login-rut')
        .type('17729454-3')       
      cy.get('input[type=password]')
        .type('1234')      
      cy.get('.button-primary').click()
    })

    it('User close session', () => {
      cy.visit('https://privqa.lapolar.cl')
      
      //Insert user and password
      cy.get('#login-rut')
        .type('17729454-3')       
      cy.get('input[type=password]')
        .type('1234')      
      cy.get('.button-primary').click()

      cy.contains('Cerrar').click({ force: true })
      cy.url().should('include','/login')
                       
    })
  })