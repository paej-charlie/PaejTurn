  import React from 'react';
  import ReactDOM from 'react-dom';
  import Walks from '../components/page/Walks';
  import Enzyme, { mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import fetch from 'isomorphic-fetch'

  Enzyme.configure({ adapter: new Adapter() });

  it('Walks renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Walks />, div)
  })

  it('Walks has a header - Guided Tours', ()=>{
    const app = mount(<Walks />)
    expect(app.find('h1').first().text()).toEqual('Guided Tours')
  })

