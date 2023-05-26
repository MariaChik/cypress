describe('Форма логина Позитив', function () {
    
    it('Верный логин и пароль', function () {
        cy.visit('https://huntingpony.com/');
        cy.contains("Поводки").click();
        cy.get('body > div.page_layout.page_layout-clear.page_layout_section_top > main > div.layout.widget-type_system_widget_v4_catalog_2 > div > div > div > form:nth-child(1) > div > div.product-preview__area-title > div > a').click();
        cy.get('#product-detail-buy-area > div > div > button').click();
        cy.get('#product-detail-buy-area > div > div > div > button:nth-child(3)').click();
        cy.get('#product-detail-buy-area > div > div > div > a').click();
        cy.get('body > div.page_layout.page_layout-clear > main > div > div > form > div.cart__area-controls > div.cart-controls > button').click();
        cy.get('#client_surname').type('Иванова');
        cy.get('#client_contact_name').type('Ирина');
        cy.get('#client_phone').type('79529525252');
        cy.get('#client_email').type('anymail@mail.ru');
        cy.get('#delivery_variants > div.co-tabs-content.co-tabs-content--active > label:nth-child(3) > span.radio.co-delivery_method-input.co-toggable_field-input.co-toggable_field-input--radio > span').click();
        cy.get('#shipping_address_street').type('anyaddress');
        cy.get('#shipping_address_house').type('12');
        cy.get('#checkout_buyer_fields > div.co-input.co-input--required.co-input--select.co-input--gen.co-input--nested > div.co-input-select > select').click();
        cy.contains('Мальчик').click();
        cy.get('#create_order').type('{enter}');
        cy.wait(10)
        cy.contains('SberPay');
        cy.end();
         })
})