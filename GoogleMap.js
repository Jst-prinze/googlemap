class GoogleMap {


navigate()
{
cy.visit('https://www.google.com')
}

enterMapInSearchBox()
{
    cy.get('#APjFqb')
    .clear()
    .type('maps')
    return this 
}

submitSearch()
{
    cy.get('.CcAdNb')
    .type('{enter}');
}

goToGoogleMaps()
{
    cy.wait(4000)
    cy.get('.tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb')
    .click()
}


enterMapSearchBox()
{
    cy.wait(4000)
    cy.get('#searchboxinput')
    .clear()
    .type('Senate Wing')
    return this 
}

submitMapSearch()
{
    cy.get('#searchbox-searchbutton > .google-symbols')
    .click()
}

verifySuccessfulSearchAdress()
{
    cy.wait(4000)
    cy.get(':nth-child(3) > .CsEnBe > .AeaXub > .rogA2c > .Io6YTe')
    .should('exist')

}
 
verifyDirection()
{
    cy.wait(4000)
    cy.get('.pChizd > .g88MCb').scrollIntoView().click()
    .click()
}

}
export default GoogleMap