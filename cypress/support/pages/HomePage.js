class HomePage {
    visit(){
        cy.visit('/')
    }

    signInButton(){
        return cy.get('[href="/user/login"]')
    }

    emailField(){
        return cy.get('[type="email"]')
    }

    passwordField(){
        return cy.get('[type="password"]')
    }

    submitLoginButton(){
        return cy.get('[type="submit"]')
    }

    submitLoginForm(email, password){
        cy.log('Submit login form');

        this.emailField().type(email);
        this.passwordField().type(password);
        this.submitLoginButton().click();
    }

    getProfileButton(){
        return cy.get('a.nav-link[href*="/profile/"]')
    }

    getAllTags(){
        return cy.get('div.tag-list')
    }

    getTagByName(tagName){
        return cy.contains('a.tag-pill', tagName)
    }

    getGlobalFeedTab(){
        return cy.contains('.link.nav-link', "Global Feed")
    }

    getArticleBySlug(slug){
        return cy.get(`.preview-link[href="/article/${slug}"]`)
    }

    getArticleLikeButtonBySlug(slug){
        return this.getArticleBySlug(slug).prev('div.article-meta').find('.btn.btn-sm')
    }
}
export default new HomePage();