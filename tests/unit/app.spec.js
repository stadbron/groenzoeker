import { shallowMount } from '@vue/test-utils'
import App from '@/components/App'

describe('App.vue', () => {
  it('renders the app', () => {
    const expected = '<div class="map"><h1>Groenzoeker</h1> <map-stub></map-stub></div>'
    const wrapper = shallowMount(App)

    expect(wrapper.html()).toBe(expected)
  })
})
