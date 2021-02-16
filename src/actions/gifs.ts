import { Dispatch } from 'redux'
import { fetchGifs } from '../apis/giphy'
import { GET_GIPHY_REQUEST, GET_GIPHY_SUCCESS, SELECT_GIF } from '../constants/actionTypes'
import { PAGE_SIZE } from '../constants/gifs'

export const getGifs = () => async (dispatch: Dispatch, getState: Function) => {
  dispatch({
    type: GET_GIPHY_REQUEST
  })

  const { currentPage } = getState().gifs;
  const gifs = await fetchGifs(currentPage * PAGE_SIZE);
  dispatch({
    type: GET_GIPHY_SUCCESS,
    payload: {
      gifs: gifs.data,
      totalCount: gifs.pagination.total_count,
      currentPage: currentPage + 1,
      offset: gifs.pagination.offset
    }
  })
}

export const selectGif = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: SELECT_GIF,
    payload: {
      id
    }
  })
}
