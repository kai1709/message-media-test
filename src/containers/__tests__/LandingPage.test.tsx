import React from 'react'
import { shallow } from 'enzyme'
import { LandingPage, LandingPageProps } from '../LandingPage'
import { render } from '@testing-library/react'

const mockProps: LandingPageProps = {
  getGifs: jest.fn(),
  currentPage: 0,
  totalCount: 0,
  gifs: [],
  isLoading: false,
  selectGif: jest.fn(),
  selectedGifId: null
}
describe('LandingPage', () => {
  it('renders', () => {
    const wrapper = shallow(<LandingPage {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call getGifs when mounted', () => {
    render(<LandingPage {...mockProps} />)
    expect(mockProps.getGifs).toHaveBeenCalled()
  })
})
