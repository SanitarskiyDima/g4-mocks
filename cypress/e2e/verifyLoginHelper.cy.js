import homePage from '../support/pages/HomePage';
import user from '../fixtures/user.json';
import { loginViaApi } from '../support/helpers/helper';

beforeEach('Login', () => {
  loginViaApi(user);
})

it('Authorization via API', () => {
  homePage.visit();
  homePage.getProfileButton().should('be.visible');
})
