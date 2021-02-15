interface Gif {
  bitly_gif_url: string,
  bitly_url: string,
  content_url: string,
  embed_url: string,
  id: string,
  images: any,
  import_datetime: string,
  is_anonymous: boolean,
  is_community: boolean,
  is_featured: boolean,
  is_hidden: boolean,
  is_indexable: boolean,
  is_preserve_size: boolean,
  is_realtime: boolean,
  is_removed: boolean,
  is_sticker: boolean,
  rating: string,
  tags: Array<string>
  title: string,
  trending_datetime: string,
  type: string,
  url: string,
  user: {
    avatar_url: string,
    banner_image: string,
    banner_url: string,
    description: string,
    display_name: string,
    instagram_url: string,
    username: string
  }
  username: string
}

interface GifsState {
  currentPage: number,
  totalCount: number,
  data: Array<Gif>,
  isLoading: boolean,
  offset: number,
  selectedGifId: string | null
}

interface StoreState {
  gifs: GifsState
}
