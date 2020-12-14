import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas del componente <CounterApp />', () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('el componente debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('el value por defecto debe ser 100', () => {
    const byDefault = 100;

    const wrapper = shallow(<CounterApp value={byDefault} />);

    const h2 = wrapper.find('h2').text();

    expect(Number(h2)).toBe(byDefault);
  });

  test('boton +1 debe incrementar el value', () => {
    const btnAdd = wrapper.find('button').at(0);
    const valueAdded = '11';

    btnAdd.simulate('click');

    const h2 = wrapper.find('h2').text();

    expect(h2).toBe(valueAdded);
  });

  test('boton reset debe volver el value a su valor por defecto', () => {
    const btnReset = wrapper.find('button').at(1);
    const valueDefault = '10';

    btnReset.simulate('click');
    const h2 = wrapper.find('h2').text();

    expect(h2).toBe(valueDefault);
  });

  test('boton reset debe volver el value a su valor por props', () => {
    const byDefault = 150;
    const wrapper = shallow(<CounterApp value={byDefault} />);
    const btnAdd = wrapper.find('button').at(0);
    const btnReset = wrapper.find('button').at(1);

    btnAdd.simulate('click');    
    btnReset.simulate('click');
    
    const h2 = wrapper.find('h2').text();

    expect(Number(h2)).toBe(byDefault);
  });

  test('boton -1 debe incrementar el value', () => {
    const btnSubstract = wrapper.find('button').at(2);
    const valueSubstracted = '9';

    btnSubstract.simulate('click');

    const h2 = wrapper.find('h2').text();

    expect(h2).toBe(valueSubstracted);
  });
});
