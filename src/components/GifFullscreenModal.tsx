import React from 'react'
import { connect } from 'react-redux'
import CloseIcon from '@material-ui/icons/Close';
import './GifFullscreenModal.scss'

interface GifModalProps {
  gif: Gif,
  onClose: () => void;
}

const GifFullscreenModal = (props: GifModalProps) => {
  const gif = props.gif;

  return (
    <div className="modal-wrapper">
      <div className="close-button" onClick={props.onClose}><CloseIcon /></div>
      <div className="gif-fullscreen" style={{ backgroundImage: `url('${gif.images.original.url}')` }}></div>
    </div>
  )
}

export default connect()(GifFullscreenModal);
