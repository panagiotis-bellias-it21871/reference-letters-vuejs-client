import { shallowMount } from '@vue/test-utils'
import HeaderPage from '@/components/HeaderPage.vue'

describe('Header Page Component unit tests: ', () => {

  test('is a Vue instance', () => {
    const wrapper = shallowMount(HeaderPage, {
      propsData: {
        siteTitle: "Reference Letters App"
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders the site title', () => {
    const siteTitle = "Reference Letters App"
    const wrapper = shallowMount(HeaderPage, {
      propsData: {
        siteTitle: siteTitle
      }
    })
    expect(wrapper.html()).toContain(siteTitle)
  })

})
