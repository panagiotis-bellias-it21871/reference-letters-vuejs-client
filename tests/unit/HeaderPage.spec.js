import { mount } from '@vue/test-utils'
import HeaderPage from '@/components/HeaderPage.vue'

describe('Header Page Component unit tests: ', () => {

    test('is a Vue instance', () => {
        const wrapper = mount(HeaderPage, {
            propsData: {
                task: {
                    name: "Task 1",
                    completed: false
                }
            }
        })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

})