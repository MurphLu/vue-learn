import { shallowMount } from '@vue/test-utils'
import { mount } from "@vue/test-utils"
import HelloWorld from '@/components/HelloWorld.vue'
import HiTest from '@/components/HiTest.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('HiTest.vue', () => {
  it('renders props.msg when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(HiTest, {
      propsData: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
})

describe('HiTest.vue', () => {
  it('renders error when message is too short', () => {
    const message = 'Hi'
    const wrapper = mount(HiTest, {
      propsData: { message }
    })
    expect(wrapper.find(".error").exists()).toBe(true);
    wrapper.setProps({ message: "hello dfdadsa" });
    expect(wrapper.classes("error")).toBe(false);
  });
})
