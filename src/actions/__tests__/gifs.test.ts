import configureMockStore from 'redux-mock-store'
import { GET_GIPHY_REQUEST, GET_GIPHY_SUCCESS, SELECT_GIF } from '../../constants/actionTypes'
import thunk from 'redux-thunk'
import { getGifs, selectGif } from '../gifs'

jest.mock('../../apis/giphy', () => ({
  fetchGifs: (offset: number): GiphyResponse => ({
    data: [],
    pagination: {
      total_count: 10,
      offset
    }
  })
}))

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Gifs Actions ', () => {
  describe('getGifs', () => {
    test('should get gifs', () => {
      const expectedActions: Array<ActionType> = [
        { type: GET_GIPHY_REQUEST },
        {
          type: GET_GIPHY_SUCCESS, payload: {
            gifs: [],
            totalCount: 10,
            currentPage: 1,
            offset: 0
          }
        }
      ]
      const store = mockStore({
        gifs: {
          currentPage: 0,
          data: [],
          totalCount: 0
        }
      })

      // @ts-ignore
      return store.dispatch(getGifs()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  describe('selectGif', () => {
    test('should select gif', () => {
      const id = 'gif-id'
      const expectedActions: Array<ActionType> = [
        { type: SELECT_GIF, payload: { id } }
      ]
      const store = mockStore({
        gifs: {
          currentPage: 0,
          data: [],
          totalCount: 0
        }
      })

      // @ts-ignore
      return store.dispatch(selectGif(id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
});
