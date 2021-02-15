import { GiphyFetch } from '@giphy/js-fetch-api'
import config from '../config'
import { PAGE_SIZE } from '../constants/gifs'

const gf = new GiphyFetch(config.API_KEY)

export const fetchGifs = (offset: number) => gf.trending({ offset, limit: PAGE_SIZE })

