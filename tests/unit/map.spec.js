import { shallowMount, createLocalVue } from '@vue/test-utils'
import * as VueGoogleMaps from 'vue2-google-maps'
import Map from '@/components/Map'

const localVue = createLocalVue()
localVue.use(VueGoogleMaps, {})
localVue.component('google-map', VueGoogleMaps.Map)

describe('Map.vue', () => {
  it('renders a map', () => {
    const expected = '<div><google-map-stub center="[object Object]" zoom="13" options="[object Object]" class="map"></google-map-stub></div>'
    const wrapper = shallowMount(Map, { localVue })

    expect(wrapper.html()).toBe(expected)
  })
})
