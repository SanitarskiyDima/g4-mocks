import homePage from '../support/pages/HomePage';
import user from '../fixtures/user.json';
import { loginViaApi } from '../support/helpers/helper';
import tags from '../fixtures/tags.json'
import articlesArray from '../fixtures/articles.json'
import { faker } from '@faker-js/faker';

beforeEach('Login', () => {
  tags.tags = [faker.animal.bear.name, faker.animal.snake.name, faker.animal.cat.name];

  cy.intercept('GET', '**/tags', tags);
  cy.intercept('GET', '**/articles?limit=10&offset=0', articlesArray)

  loginViaApi(user);
  homePage.visit();
  homePage.getProfileButton().should('be.visible');
})

it('User should be able to change likes quantity', () => {

  let article = articlesArray.articles[1]
  homePage.getGlobalFeedTab().click();
  homePage.getArticleLikeButtonBySlug(article.slug).should('contain', article.favoritesCount)
  
  cy.intercept('POST', `**/articles/${article.slug}/favorite`, article);

  homePage.getArticleLikeButtonBySlug(article.slug).click();

  homePage.getArticleLikeButtonBySlug(article.slug).should('contain', article.favoritesCount + 1)
})
