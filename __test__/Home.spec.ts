import { mount } from '@vue/test-utils';
import HomePage from '@/pages/LoginPage.vue';
import { describe, it, expect } from 'vitest';

describe('HomePage', () => {
  it('should display header text', () => {
    const msg = '慕课乐高';
    const wrapper = mount(HomePage, { props: { msg } });

    expect(wrapper.find('h1').text()).toEqual(msg);
  });
});
