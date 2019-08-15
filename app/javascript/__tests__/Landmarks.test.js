  import React from 'react';
  import ReactDOM from 'react-dom';
  import Landmarks from '../components/page/Landmarks';
  import Enzyme, { mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import fetch from 'isomorphic-fetch'

  Enzyme.configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Landmarks />, div)
  })

  it('renders the landmark', ()=>{
    const app = mount(<Landmarks />)
    expect(app.find('h1').first().text()).toEqual('Landmarks')
  })
