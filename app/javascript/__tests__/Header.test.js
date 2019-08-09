  import React from 'react';
  import ReactDOM from 'react-dom';
  import Header from '../components/Header';
  import Enzyme, { mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import fetch from 'isomorphic-fetch'

  Enzyme.configure({ adapter: new Adapter() });

  it('Header renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div)
  })

//  it('NavBar has a link to HiM - Home', ()=>{
//   const app = mount(<Header />)
// //   app.findWhere(n => n.type() === 'a' && n.contains('Home'))
//   expect(app.find('a').first().text()).toEqual('HiM')
//  })
 
//  it('NavBar has a link to HiM - Home', ()=>{
//   const app = mount(<Header />)
// //   app.findWhere(n => n.type() === 'a' && n.contains('Home'))
//   expect(app.find('a').first().text()).toEqual('HiM')
//  })
