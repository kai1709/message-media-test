import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import { getGifs, selectGif } from '../actions/gifs'
import './LandingPage.scss'
import { Button, CircularProgress, Paper } from '@material-ui/core';
import GifCard from '../components/GifCard';
import GifFullscreenModal from '../components/GifFullscreenModal'

export interface LandingPageProps {
  currentPage: number,
  totalCount: number,
  gifs: Array<Gif>,
  isLoading: boolean,
  getGifs: () => void,
  selectGif: (id: string) => void,
  selectedGifId: string | null
}

export const LandingPage = (props: LandingPageProps) => {
  const { isLoading, gifs, totalCount, currentPage, selectedGifId } = props
  const selectedGif = selectedGifId ? gifs.find(gif => gif.id === selectedGifId) : null;
  useEffect(() => {
    props.getGifs()
  }, [])

  return (
    <Container className="landing-page-container">
      {selectedGif && (
        <GifFullscreenModal gif={selectedGif} onClose={() => props.selectGif(null)} />
      )}

      <Paper elevation={4} className="landing-page-paper">
        {currentPage === 0 ? (
          <div className="loading-wrapper">
            <CircularProgress />
          </div>
        ) : (
            <div className="gif-list-wrapper">
              <div className="list">
                {
                  gifs.map(gif => (
                    <div className="list-item" key={gif.id}>
                      <GifCard gif={gif} onClick={props.selectGif} />
                    </div>
                  ))
                }
              </div>
              {
                (gifs.length < totalCount) && (
                  <div className="load-more-wrapper">
                    {
                      !isLoading ?
                        <Button variant="contained" onClick={() => props.getGifs()} color="primary" id="load-more-button">Load more</Button> : (
                          <CircularProgress />
                        )
                    }
                  </div>
                )
              }
            </div>
          )
        }

      </Paper>
    </Container>
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    ...state.gifs,
    gifs: state.gifs.data
  }
}

export default connect(mapStateToProps, { getGifs, selectGif })(LandingPage);
