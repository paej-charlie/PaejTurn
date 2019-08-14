  import React from 'react';
  import ReactDOM from 'react-dom';
  import Header from '../components/component/Header';
  import Enzyme, { mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import fetch from 'isomorphic-fetch'

  Enzyme.configure({ adapter: new Adapter() });

  it('Header renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
  })

  it('NavBar has a link to HiM - Home', ()=>{
    const app = mount(<Header />)
    expect(app.find('NavbarBrand').first().text()).toEqual('HiM')
  })
  
  it('NavBar has a link to Landmarks', ()=>{
    const app = mount(<Header />)
    expect(app.find('NavLink').first().text()).toEqual('Landmarks')
  })

