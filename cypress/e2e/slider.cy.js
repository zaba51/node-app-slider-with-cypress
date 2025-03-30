describe('Swiper Gallery Test', function () {
  xit('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  xit('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
 xit('Checks if navigation buttons work"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });

  xit('Checks if titles and descriptions are correct"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });

  xit('Checks responsiveness', function () {
    const viewports = [
      ['iphone-6'], ['iphone-xr'], ['samsung-note9'],
      ['ipad-2'], ['ipad-mini'],
      [1024, 768], [1366, 768], [1920, 1080]
    ];

    viewports.forEach((size) => {
      cy.viewport(...size);
      cy.visit('http://localhost:3000');
      cy.get('.swiper-button-next').should('be.visible');
      cy.get('.swiper-button-prev').should('be.visible');
      cy.get('.swiper-slide-active').should('be.visible');
    });
  });

  it('Checks if gallery is displayed correctly', function () {
    cy.visit('http://localhost:3000');

    cy.get('.swiper').should('be.visible');

    cy.get('.swiper-slide').should('have.length.at.least', 3);
    
    cy.get('.swiper-button-next').should('be.visible').and('have.attr', 'role', 'button').click();
    cy.get('.swiper-button-prev').should('be.visible').and('have.attr', 'role', 'button').click();
  });
});