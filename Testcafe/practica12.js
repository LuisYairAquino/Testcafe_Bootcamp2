import page from './pageModel';

fixture('Práctica 12 con testcafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Probar mover un slider', async t => {
    await t
        .click(page.checkboxTried)
        .expect(page.checkboxTried.checked).ok()

    .dragToElement(page.slider.handle, page.slider.value.withText('9'))

})