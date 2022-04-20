import { mount } from '@cypress/vue'
import HomePage from './components/HomePage.vue'

describe('HelloWorld', () => {
  it('renders a message', () => {
    const msg = 'Hello Cypress Component Testing!'
    mount(HomePage, {
      propsData: {
        msg
      }
    })
  
    cy.get('h1').should('have.text', msg)
  })
})