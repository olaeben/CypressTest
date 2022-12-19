import { CommonPage } from '../support/pages';

describe('SauceDemo checkout process', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });

    it('should add items to the cart and checkout', () => {
      cy.get('#item_4_title_link').click();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').click();
      cy.get('[data-test="checkout"]').click();
      cy.get('#first-name').type('Test');
      cy.get('#last-name').type('User');
      cy.get('#postal-code').type('90210');
      cy.get('[data-test="continue"]').click();
      cy.get('[data-test="finish"]').click();
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
      
    });
  });
  