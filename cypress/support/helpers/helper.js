///<reference types="cypress"/>
import sessionData from '../../fixtures/sessionData.json';

export function loginViaApi(user){

    let requestBody = {"user":{"email": "","password": ""}}

    requestBody.user.email = user.email;
    requestBody.user.password = user.password;

    cy.request('POST', '/api/users/login', requestBody).then( response => {
        expect(response.isOkStatusCode).to.be.true;

        let token = response.body.user.token;

        cy.setCookie('auth', token);

        sessionData.email = user.email;
        sessionData.username = user.username;
        sessionData.token = token;

        window.localStorage.setItem('user', JSON.stringify(sessionData));
        
    })
}