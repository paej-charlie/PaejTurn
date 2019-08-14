  import React from 'react';
  import ReactDOM from 'react-dom';
  import Footer from '../components/component/Footer';
  import Enzyme, { mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import fetch from 'isomorphic-fetch'

  Enzyme.configure({ adapter: new Adapter() });

  it('Footer renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
  })

  it('Footer has a per person', ()=>{
    const app = mount(<Footer />)
    expect(app.find('a').first().text()).toEqual('Paige MacGregor')
  })
  
