import React from 'react'
import { shallow } from 'enzyme'
import { LandingPage, LandingPageProps } from '../LandingPage'
import { render } from '@testing-library/react'
import { CircularProgress } from '@material-ui/core'
import userEvent from '@testing-library/user-event'
import GifFullscreenModal from '../../components/GifFullscreenModal'
import { mockGif } from '../../utils/mock'
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

  it('should render initial loading when first mount', () => {
    const wrapper = shallow(<LandingPage {...mockProps} />)
    const loadingSection = wrapper.find('.loading-wrapper')
    const gifListSection = wrapper.find('.gif-list-wrapper')
    expect(loadingSection).toHaveLength(1)
    expect(gifListSection).toHaveLength(0)
  })

  it('should render gif list when finish fetching', () => {
    const wrapper = shallow(<LandingPage {...mockProps} currentPage={1} />)
    const loadingSection = wrapper.find('.loading-wrapper')
    const gifListSection = wrapper.find('.gif-list-wrapper')
    expect(loadingSection).toHaveLength(0)
    expect(gifListSection).toHaveLength(1)
  })

  it('should render load more section if total rendered gifs is less than total gifs of the service', () => {
    const gifs = [{ ...mockGif, id: 'gif-1' }, { ...mockGif, id: 'gif-2' }]
    const wrapper = shallow(<LandingPage {...mockProps} currentPage={1} gifs={gifs} totalCount={10} />)
    const loadMoreSection = wrapper.find('.load-more-wrapper')
    expect(loadMoreSection).toHaveLength(1)
  })

  it('should not render load more section if total rendered gifs is equal to total gifs of the service', () => {
    const gifs = [{ ...mockGif, id: 'gif-1' }, { ...mockGif, id: 'gif-2' }]
    const wrapper = shallow(<LandingPage {...mockProps} currentPage={1} gifs={gifs} totalCount={2} />)
    const loadMoreSection = wrapper.find('.load-more-wrapper')
    expect(loadMoreSection).toHaveLength(0)
  })

  it('should render load more button if the component is not in loading more state', () => {
    const gifs = [{ ...mockGif, id: 'gif-1' }, { ...mockGif, id: 'gif-2' }]
    const wrapper = shallow(<LandingPage {...mockProps} currentPage={1} gifs={gifs} totalCount={10} isLoading={false} />)
    const loadingMoreButton = wrapper.find('#load-more-button')
    const loadingCircle = wrapper.find(CircularProgress)
    expect(loadingMoreButton).toHaveLength(1)
    expect(loadingCircle).toHaveLength(0)
  })

  it('should not render load more button if the component is in loading more state', () => {
    const gifs = [{ ...mockGif, id: 'gif-1' }, { ...mockGif, id: 'gif-2' }]
    const wrapper = shallow(<LandingPage {...mockProps} currentPage={1} gifs={gifs} totalCount={10} isLoading={true} />)
    const loadingMoreButton = wrapper.find('#load-more-button')
    const loadingCircle = wrapper.find(CircularProgress)
    expect(loadingMoreButton).toHaveLength(0)
    expect(loadingCircle).toHaveLength(1)
  })

  it('should call get gifs when click on Load more button', () => {
    const gifs = [{ ...mockGif, id: 'gif-1' }, { ...mockGif, id: 'gif-2' }]
    const wrapper = render(<LandingPage {...mockProps} currentPage={1} gifs={gifs} totalCount={10} isLoading={false} />)
    const loadingMoreButton = wrapper.getByText('Load more')
    userEvent.click(loadingMoreButton);
    expect(mockProps.getGifs).toHaveBeenCalled()
  })

  it('should render gif fullscreen modal if a gif is selected', () => {
    const gifs = [{ ...mockGif, id: 'gif-1' }, { ...mockGif, id: 'gif-2' }]
    const wrapper = shallow(<LandingPage {...mockProps} currentPage={1} gifs={gifs} selectedGifId="gif-1" totalCount={10} isLoading={false} />)
    const gifFullscreenModal = wrapper.find(GifFullscreenModal)
    expect(gifFullscreenModal).toHaveLength(1)
  })
})
