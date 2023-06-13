import homePage from '../support/pages/HomePage';
import user from '../fixtures/user.json';
import { loginViaApi } from '../support/helpers/helper';
import tags from '../fixtures/tags.json'
import { faker } from '@faker-js/faker';

beforeEach('Login', () => {
  tags.tags = [faker.animal.bear.name, faker.animal.snake.name, faker.animal.cat.name];

  cy.intercept('GET', '**/tags', tags);

  loginViaApi(user);
  homePage.visit();
  homePage.getProfileButton().should('be.visible');
})

it('All tags should be visible', () => {
  for(let i = 0; i < tags.tags.length; i++){
    homePage.getTagByName(tags.tags[i]).should('be.visible');
  }

})
