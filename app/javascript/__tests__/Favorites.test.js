  import React from 'react';
  import ReactDOM from 'react-dom';
  import Favorites from '../components/page/Favorites';
  import Enzyme, { mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import fetch from 'isomorphic-fetch'

  Enzyme.configure({ adapter: new Adapter() });

  it('Favorites renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Favorites />, div)
  })

  it('Favorites has a header "favorites"', ()=>{
    const app = mount(<Favorites />)
    expect(app.find('h1').first().text()).toEqual('Favorites')
  })
  
