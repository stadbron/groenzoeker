import { shallowMount } from '@vue/test-utils'
import App from '@/components/App'

describe('App.vue', () => {
  it('renders the app title', () => {
    const expected = '<div><h1>Groenzoeker</h1></div>'
    const wrapper = shallowMount(App)

    expect(wrapper.html()).toBe(expected)
  })
})
