  import React from 'react';
  import ReactDOM from 'react-dom';
  import MainApp from '../components/MainApp';
  import Enzyme, { mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import fetch from 'isomorphic-fetch'

  Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainApp />, div)
})

// MainApp now operates by rendering only components - as long as it's rendering, we can move on to testing other components and props, etc
//  it('Renders a page welcome', ()=>{
//   const app = mount(<MainApp />)
//   expect(app.find('h1').first().text()).toEqual('History in Motion')
// //   app.findWhere(n => n.type() === 'h1' && n.contains('History in Motion'))
//  })
 