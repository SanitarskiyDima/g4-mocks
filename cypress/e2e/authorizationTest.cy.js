import homePage from '../support/pages/HomePage'
import user from '../fixtures/user.json'

it('Authorization', () => {
  homePage.visit();
  homePage.signInButton();
  homePage.submitLoginForm(user.email, user.password);
})
