import { GET_GIPHY_REQUEST, GET_GIPHY_SUCCESS, SELECT_GIF } from '../constants/actionTypes'

const initialState: GifsState = {
  currentPage: 0,
  data: [],
  totalCount: 0,
  isLoading: false,
  offset: 0,
  selectedGifId: null
}

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_GIPHY_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_GIPHY_SUCCESS:
      return {
        ...state,
        totalCount: action.payload.totalCount,
        isLoading: false,
        data: [...state.data, ...action.payload!.gifs],
        currentPage: action.payload!.currentPage,
        offset: action.payload!.offset
      }
    case SELECT_GIF:
      return {
        ...state,
        selectedGifId: action.payload.id
      }
    default:
      return state;
  }
}
