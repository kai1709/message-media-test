import reducer, { initialState } from '../gifs';
import * as actionTypes from '../../constants/actionTypes'
describe('Category reducers', () => {
  test('should return initial state', () => {
    expect(reducer(undefined, {
      type: '',
      payload: undefined,
    })).toEqual(initialState);
  });

  test('should handle GET_GIPHY_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.GET_GIPHY_REQUEST,
      })
    ).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  test('should handle GET_GIPHY_SUCCESS', () => {
    const payload = {
      totalCount: 10,
      offset: 2,
      currentPage: 1,
      gifs: [{ id: 'gif-id' }]
    }
    expect(
      reducer(initialState, {
        type: actionTypes.GET_GIPHY_SUCCESS,
        payload
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      totalCount: payload.totalCount,
      offset: payload.offset,
      currentPage: payload.currentPage,
      data: payload.gifs
    });
  });

  test('should handle SELECT_GIF', () => {
    const gifId = 'gif-id'
    expect(
      reducer(initialState, {
        type: actionTypes.SELECT_GIF,
        payload: {
          id: gifId
        }
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      selectedGifId: gifId
    });
  });
})
