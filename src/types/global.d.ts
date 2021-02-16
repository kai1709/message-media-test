interface ActionType {
  type: string,
  payload?: any
}

interface GiphyResponse {
  data: Array<Gif>,
  pagination: {
    total_count: number,
    offset: number
  }
}
