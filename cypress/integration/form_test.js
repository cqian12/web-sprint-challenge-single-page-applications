describe ('Sprint challenge checks', function () {
    //functions for the processes that will be used in the checks for the MVP
    let nameInput = () => cy.get('input[name="name"]')
    let selectInput = () => cy.get('select')
    let getchks = () => cy.get('[type="checkbox"]')
    let submitButton = () => cy.get('button[id="order-button"]')

    this.beforeEach(() => { //location where the checks will occur
        cy.visit('http://localhost:3000/pizza')
    })

    it('checks inputting a name', () => { 
        //if the name charles is inputted in the name box, test should be successful 
        nameInput()
        .should('exist')
        .should('have.value','')
        .type('charles')
        .should('have.value','charles')
    })
   
    it ('checks clicking the checkboxes', () => {
        //if the checkboxes can be checked, test should be successful
        getchks()
        .should('exist')
        .check()
    })

    it('checks if submit button works',() => {
        //if a name is inputted, a size is chosen, and toppings are checked, submitting should be successful
        nameInput().type('charles')
        selectInput().select('medium')
        getchks().check()
        submitButton().should('not.be.disabled')
    })
}) 