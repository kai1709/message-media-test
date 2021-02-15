import { Paper } from '@material-ui/core';
import React from 'react'
import './GifCard.scss'

interface GifCardProps {
  gif: Gif,
  onClick: (id: string) => void
}
const GifCard = (props: GifCardProps) => {
  const { gif } = props;
  const user = gif.user || {
    avatar_url: '',
    display_name: ''
  }

  return (
    <Paper className="gif-card-container" onClick={() => props.onClick(gif.id)}>
      <img src={gif.images.preview_gif.url} className="gif-card-thumbnail" />
      <div className="gif-card-title">
        {gif.title}
      </div>
      <div className="gif-card-author">
        <div>
          <div className="gif-author-avatar-wrapper">
            <img src={user.avatar_url} className="gif-author-avatar" />
          </div>
          <div className="gif-author-name">{user.display_name}</div>
        </div>
      </div>
    </Paper>
  )
}

export default GifCard;
