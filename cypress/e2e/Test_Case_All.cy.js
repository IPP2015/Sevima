describe('template spec', () => {
  it('1A', () => {
    cy.visit('/')
    cy.get('input#input.form-control').type(10);
    cy.get("button#hitung.btn.btn-primary.btn-block").click();
    cy.get("div#result").should("have.text",'Faktorial dari 10 adalah: 3628800')
    cy.get('input#input.form-control').clear();
  })
  it('1B', () => {
    cy.visit('/')
    cy.get('input#input.form-control').type('-1');
    cy.get("button#hitung.btn.btn-primary.btn-block").click();
    cy.get("div#result").should("have.text",'Tolong masukan sebuah angka')
    cy.get('input#input.form-control').clear();
    cy.get('input#input.form-control').type('-1');
    cy.get("button#hitung.btn.btn-primary.btn-block").click();
    cy.get("div#result").should("have.text",'Tolong masukan sebuah angka')
    cy.get('input#input.form-control').clear();
  })
  it('2A', () => {
    cy.visit('/')
    cy.get('input#input.form-control').type('---');
    cy.get("button#hitung.btn.btn-primary.btn-block").click();
    cy.get("div#result").should("have.text",'Tolong masukan sebuah angka')
    cy.get('input#input.form-control').clear();
  })
  it('3A', () => {
    cy.visit('/')
    cy.get("a").contains(" Terms Of Service").click();
    cy.url('match', 'https://qa.putraprima.id/#').then(el=>{
    cy.log(el)
   })
   cy.get("h5.card-header").should('have.text','Terms Of Service')
  })
  it('4A', () => {
    cy.visit('/')
    cy.get("a").contains(" Privacy Policy").click();
    cy.url('match', 'https://qa.putraprima.id/#').then(el=>{
    cy.log(el)
   })
   cy.get("h5.card-header").should('have.text','Privacy Policy')
  })
})