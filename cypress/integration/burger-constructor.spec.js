describe('Проверка страницы "Конструктор"', () => {
    it('Проверка доступности на localhost:3000', function() {
        cy.visit('http://localhost:3000')
    })

    it('Перетаскивание ингредиента в конструктор', () => {
        cy.get('[data-test="ingredient-drag--bun"]').first().trigger('dragstart')
        cy.get('[data-test="ingredient-drop"]').trigger('drop')
        cy.get('[data-test="ingredient-drag--main"]').first().trigger('dragstart')
        cy.get('[data-test="ingredient-drop"]').trigger('drop')
        cy.get('[data-test="ingredient-drag--sauce"]').first().trigger('dragstart')
        cy.get('[data-test="ingredient-drop"]').trigger('drop')
    })

    it('Открытие модального окна с описанием ингредиента', () => {
        cy.get('[data-test="ingredient-item"]').first().click()
    })

    it('Отображение в модальном окне данных ингредиента', () => {
        cy.get('[data-test="ingredient-details"]')
            .find('[data-test="ingredient-details-image"]')
            .should('have.attr', 'src')
            .and('match', /https:\/\/code\.s3\.yandex\.net\/react\/code\/bun-02-large\.png/)
        cy.get('[data-test="ingredient-details"]')
            .find('[data-test="ingredient-details-name"]')
            .should('have.text', 'Краторная булка N-200i')
        cy.get('[data-test="ingredient-details"]')
            .find('[data-test="ingredient-details-calories"]')
            .should('have.text', '420')
        cy.get('[data-test="ingredient-details"]')
            .find('[data-test="ingredient-details-proteins"]')
            .should('have.text', '80')
        cy.get('[data-test="ingredient-details"]')
            .find('[data-test="ingredient-details-fat"]')
            .should('have.text', '24')
        cy.get('[data-test="ingredient-details"]')
            .find('[data-test="ingredient-details-carbohydrates"]')
            .should('have.text', '53')
    })

    it('Закрытие модальных окон при клике на кнопку закрытия', () => {
        cy.get('[data-test="modal-close"]').click()
    })

    it('Открытие модального окна с данными о заказе при клике по кнопке «Оформить заказ»', () => {
        const email = 'test@kek.lol'
        const password = '1234567'

        cy.get('.button_button__odsYf').click()

        cy.get('input[name="email"]').type(email)
        cy.get('input[name="password"]').type(password)
        cy.get('form button').click()

        cy.get('.button_button__odsYf').click()

        cy.get('[data-test="modal-close"]', {
            timeout: 500000000
        }).click()
    })
})
