import React from 'react'
import { shallow } from 'enzyme'
import GifFullscreenModal from '../GifFullscreenModal'
import { mockGif } from '../../utils/mock'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
describe('GifFullscreenModal', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<GifFullscreenModal gif={{ ...mockGif }} onClose={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should call onClick when click on title of GifFullscreenModal', () => {
    const onCloseCallback = jest.fn()
    const wrapper = render(<GifFullscreenModal gif={{ ...mockGif }} onClose={onCloseCallback} />)
    const closeButton = wrapper.getByTestId('close-button');
    userEvent.click(closeButton);
    expect(onCloseCallback).toHaveBeenCalled()
  })
})
