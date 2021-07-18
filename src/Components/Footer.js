import React, { useEffect } from 'react'
import '../Styles/Footer.css'
import { PlayCircleOutlineOutlined, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons'
import { useDataLayerValue } from '../DataLayer'
import { Grid, Slider } from '@material-ui/core'


function Footer({ spotify }) {

    const [{ item, playing }, dispatch] = useDataLayerValue()

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            console.log(r)

            dispatch({
                type: 'SET_PLAYING',
                playing: r.is_playing,
            })

            dispatch({
                type: 'SET_ITEM',
                item: r.item,
            })
        })
    }, [spotify, dispatch])

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause()
            dispatch({
                type: 'SET_PLAYING',
                playing: false,
            })
        } else {
            spotify.play()
            dispatch({
                type: 'SET_PLAYING',
                playing: true,
            })
        }
    }

    const skipNext = () => {
        spotify.skipToNext()
        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: 'SET_ITEM',
                item: r.item,
            })
            dispatch({
                type: 'SET_PLAYING',
                playing: true,
            })
        })
    }

    const skipPrevious = () => {
        spotify.skipToPrevious()
        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            })
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            })
        })
    }

    console.log(item)

    return (
        <div className='footer'>
            <div className='footer__left'>
                {item ? (
                    <>
                        <img className='footer__albumLogo' src={item.album.images[0].url} alt={item.name} />
                        <div className='footer__songInfo'>
                            <h4>{item.name}</h4>
                            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                        </div>
                    </>
                ) : (
                    <div className='footer__songInfo'>
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
            </div>

            <div className='footer__center'>
                <Shuffle className='footer__green' />
                <SkipPrevious className='footer__icon' onClick={skipNext} />
                {playing ? (
                    <PlayCircleOutlineOutlined
                        onClick={handlePlayPause}
                        fontSize='large' className='footer__icon'
                    />
                ) : (
                    <PlayCircleOutlineOutlined
                        onClick={handlePlayPause}
                        fontSize='large' className='footer__icon'
                    />
                )}

                <SkipNext onClick={skipPrevious} className='footer__icon' />
                <Repeat className='footer__green' />
            </div>

            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby='continuous-slider' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
