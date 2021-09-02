import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('Product Test', () => {
  test('Render of Product component', () => {
    const product = shallow(<ProviderMock><Product /></ProviderMock>);
    expect(product.length)
      .toEqual(1);
  });
  test('Simulate a click or a purchase', () => {
    //Simular una funcion
    const handleAddToCart = jest.fn();
    const wrapper = mount(<ProviderMock><Product product={ProductMock} handleAddToCart={handleAddToCart} /></ProviderMock>);
    wrapper.find('button').simulate('click');

    //Para saber cuantas veces se ejecuto esa funcion
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
