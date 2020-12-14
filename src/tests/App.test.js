import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import App from '../App';

describe('Pruebas del componente App', () => {
  test('Debe mostrar <App /> correctamente', () => {
    const greeting = 'Hola';

    const wrapper = shallow(<App greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el subtitulo enviado por props', () => {
    const greeting = 'Hola';
    const subtitle = 'I am a simple subtitle of test';

    const wrapper = shallow(<App greeting={greeting} subtitle={subtitle} />);

    const paragraph = wrapper.find('p').text();

    expect(paragraph).toBe(subtitle);

  });
});
