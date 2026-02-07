describe('Tech Debt Score Dashboard', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the dashboard title', () => {
    cy.contains('Tech Debt Score').should('be.visible');
  });

  it('should load and display charts', () => {
    // Wait for charts to load
    cy.get('.card', { timeout: 10000 }).should('have.length', 2);
  });

  it('should display loading state initially', () => {
    cy.visit('/');
    cy.get('.spinner-border').should('exist');
  });

  it('should handle API errors gracefully', () => {
    cy.intercept('GET', '/feature/dashboard', {
      statusCode: 500,
      body: { message: 'Internal Server Error' }
    }).as('getDashboardError');

    cy.visit('/');
    cy.wait('@getDashboardError');
    cy.get('.alert-danger').should('be.visible');
    cy.contains('Error Loading Dashboard').should('be.visible');
  });

  it('should be responsive', () => {
    // Test on mobile viewport
    cy.viewport('iphone-x');
    cy.contains('Tech Debt Score').should('be.visible');

    // Test on tablet viewport
    cy.viewport('ipad-2');
    cy.get('.card').should('be.visible');

    // Test on desktop viewport
    cy.viewport(1920, 1080);
    cy.get('.card').should('have.length', 2);
  });
});
