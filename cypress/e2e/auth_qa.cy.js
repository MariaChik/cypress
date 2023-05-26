describe('Форма логина Позитив', function () {
    
    it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1').type('{enter}');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > img');
        cy.end();
         })
})


describe('Форма логина Забыли пароль', function () {
    
    it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('anymail@mail.ru').type('{enter}');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > img');
        cy.end();
         })
})

describe('Форма логина Негатив 1', function () {
    
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio').type('{enter}');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > img');
        cy.end();
         })
})

describe('Форма логина Негатив 2', function () {
    
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('maria@chikirova.ru');
        cy.get('#pass').type('iLoveqastudio').type('{enter}');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > img');
        cy.end();
         })
})

describe('Форма логина Негатив 3', function () {
    
    it('Нет собачки в емейле', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('mariachikirova.ru');
        cy.get('#pass').type('iLoveqastudio').type('{enter}');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.end();
         })
}) 

describe('Форма логина регистр', function () {
    
    it('Верный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1').type('{enter}');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > img');
        cy.end();
         })
})