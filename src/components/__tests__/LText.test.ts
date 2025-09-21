import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { shallowMount } from '@vue/test-utils'
import { textDefaultProps } from "@/defaultProps";
import LText from "../LText/index.ts";

describe('LText.vue', () => {
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' }
    })
  })
  afterEach(() => {
    window.location = location
  })

  it('default l-text render', () => {
    const msg = 'test msg ...'
    const props = {
      ...textDefaultProps,
      text: msg
    }
    const wrapper = shallowMount(LText, { props })
    expect(wrapper.text()).toBe(msg)
    expect(wrapper.element.tagName).toBe('DIV')
    // 'font-size: 14px; color: #ccc; ...'
    const style = wrapper.attributes().style
    expect(style.includes('font-size')).toBeTruthy()
    expect(style.includes('actionType')).toBeFalsy()
  })

  it('l-text with actionType and URL should trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'https://dummy.url',
      tag: 'h2'
    }
    const wrapper = shallowMount(LText, { props })
    expect(wrapper.element.tagName).toBe('H2')
    await wrapper.trigger('click')
    expect(window.location.href).toBe(props.url)
  })

  it('l-text with isEditing and URL should not trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'https://dummy.url',
      tag: 'h2',
      isEditing: true
    }
    const wrapper = shallowMount(LText, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe(props.url)
  })
})