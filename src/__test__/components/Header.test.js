import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('Header tests', () => {
  test('Render of Header component', () => {
    const header = shallow(<ProviderMock><Header /></ProviderMock>);
    expect(header.length)
      .toEqual(1);
  });
  test('Title render', () => {
    const header = mount(<ProviderMock><Header /></ProviderMock>);
    expect(header.find('.Header-title')
      .text())
      .toEqual('Platzi Store');
  });

});

describe('Header Snapshot', () => {
  test('Check Header Snapshot', () => {
    const header = create(<ProviderMock><Header /></ProviderMock>);
    expect(header.toJSON())
      .toMatchSnapshot();
  });
});
