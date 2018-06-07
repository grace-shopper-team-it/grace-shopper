import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import { ProductForm } from './ProductForm';

const existingCategories = [
  'Sports',
  'Music',
  'Heavy Metal',
  'Jazz',
  'Weird Stuff',
];
const currentProduct = {
  name: 'Basketball',
  price: 30,
  averageRating: 4.5,
  description: "You use it to play basketball. It's some obscure game",
  inventory: 50,
  imageUrl:
    'https://i5.walmartimages.com/asr/62f061c8-9eae-460b-8964-84877f89dfc6_1.63cb4384ad2e3927105b7cfe8aa71fcc.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
};
const editCompWrapper = shallow(
  <ProductForm
    existingCategories={existingCategories}
    currentProduct={currentProduct}
  />
);

describe('fields in edit form', () => {
  it('should contain a form element', () => {
    expect(editCompWrapper.find('form').length).to.equal(1);
  });
  it('should contain 5 inputs in form', () => {
    expect(
      editCompWrapper
        .find('form')
        .render()
        .find('input').length
    ).to.equal(5);
  });
  xit('should have specified input fields', () => {
    const formObject = editCompWrapper.find('form').render();
    expect(formObject.children('input[name="name"]').length).to.equal(1);
    expect(formObject.children('input[name="price"]').length).to.equal(1);
    expect(formObject.children('input[name="description"]').length).to.equal(1);
    // expect(formObject.children('input[name="new-categories"]').length).to.equal(
    //   1
    // );
    expect(formObject.children('input[name="stock"]').length).to.equal(1);
    expect(formObject.children('input[name="imageUrl"]').length).to.equal(1);
  });
  xit('input fields value should be the currentProduct prop', () => {
    const formObject = editCompWrapper.find('form').render();
    const { description, imageUrl } = currentProduct;
    console.log(formObject.children());

    expect(formObject.children('input[value="Basketball"]').length).to.equal(1);
    expect(formObject.children('input[value="30"]').length).to.equal(1);
    expect(
      formObject.children(`input[value="${description}"]`).length
    ).to.equal(1);
    expect(formObject.children(`input[value="${imageUrl}"]`).length).to.equal(
      1
    );
    expect(formObject.children('input[value="50"]').length).to.equal(1);
  });
  it('should have a button', () => {
    expect(
      editCompWrapper
        .find('form')
        .render()
        .find('button').length
    ).to.equal(1);
  });
  xit('should have a select element that includes existing categories', () => {
    const selectElement = editCompWrapper
      .find('form')
      .render()
      .find('select');
    expect(selectElement.children('option[value="Sports"]').length).to.equal(1);
    expect(
      selectElement.children('option[value="Heavy Metal"]').length
    ).to.equal(1);
  });
});
