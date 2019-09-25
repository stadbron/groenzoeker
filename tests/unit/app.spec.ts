import { expect, shallowMount, logger } from './setup';
import App from '@/App.vue';
import Map from '@/components/Map.vue';

describe('App', () => {
  it('displays the title', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find('h1').text()).to.equal('Groenzoeker');
  });

  it('displays a map', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find(Map).exists()).to.equal(true);
  });
});
