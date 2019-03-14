const expect = require('chai').expect;
const React = require('react');
//const Back = require('../../src/js/components/Back/Back').default;
import Back from '../../src/js/components/Back/Back';
const { render } = require('enzyme');

describe ('Back', () => {
  let back = null;

  beforeEach(() => {
  });
  
  it('go back button should say GO BACK', () =>{
    const wrapper = render(<Back />);
    expect(wrapper.text()).to.equal('Go Back');
  })
})