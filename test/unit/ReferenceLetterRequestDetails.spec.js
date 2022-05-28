import { shallowMount } from '@vue/test-utils'
import ReferenceLetterRequestDetails from '@/views/ReferenceLetterRequestDetails.vue'

describe('ReferenceLetterRequestDetails View unit tests: ', () => {

  test('is a Vue instance', () => {
    const wrapper = shallowMount(ReferenceLetterRequestDetails, {
      propsData: {
        rl_request: {
          name: "rl_request 1",
          is_pending: true,
          is_approved: false,
          is_declined: false
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

})
