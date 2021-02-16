import React from 'react'
import { shallow } from 'enzyme'
import GifCard from '../GifCard'
import { mockGif } from '../../utils/mock'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
describe('GifCard', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<GifCard gif={{ ...mockGif }} onClick={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should call onClick when click on title of GifCard', () => {
    const onClickCallback = jest.fn()
    const title = 'title'
    const wrapper = render(<GifCard gif={{ ...mockGif, title }} onClick={onClickCallback} />)
    const titleElement = wrapper.getByText(title);
    userEvent.click(titleElement);
    expect(onClickCallback).toHaveBeenCalled()
  })
})
