  import React from 'react';
  import ReactDOM from 'react-dom';
  import Home from '../components/page/Home';
  import Enzyme, { mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import fetch from 'isomorphic-fetch'

  Enzyme.configure({ adapter: new Adapter() });

  it('Home renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
  })

  it('Home has About Us section', ()=>{
    const app = mount(<Home />)
    expect(app.find('h1').first().text()).toEqual('About Us')
  })

