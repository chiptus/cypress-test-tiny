/// <reference types="Cypress" />

describe('testn parsing of html', () => {
  it('should succeed', () => {
    const $html = Cypress.$(`<html><body>
        <div class="hello">hey</div>
        
        </body></html>`);
    expect($html.find('div.hello').length).to.equal(1);
  });
});
