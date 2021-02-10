import { GiphyFetch } from '@giphy/js-fetch-api'
import config from '../config'

const gf = new GiphyFetch(config.API_KEY)

export const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

