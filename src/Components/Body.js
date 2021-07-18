import React from 'react'
import '../Styles/Body.css'
import Header from './Header'
import { Typography } from '@material-ui/core'
import { useDataLayerValue } from '../DataLayer'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import SongRow from './SongRow'


function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue()

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:37i9dQZEVXcSc6zfT6fh1J`,
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: 'SET_ITEM',
                        action: r.item,
                    })
                    dispatch({
                        type: 'SET_PLAYING',
                        playing: true,
                    })
                })
            })
    }

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
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
            })
    }

    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className='body__info'>
                <img src={discover_weekly?.images[0].url} alt='' />
                <div className='body__infoText'>
                    <Typography>PLAYLIST</Typography>
                    <Typography className='T_h2' variant='h2'>Discover Weekly</Typography>
                    <Typography className='T_sub' variant='subtitle1'>{discover_weekly?.description}</Typography>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className='body__shuffle' onClick={playPlaylist} />
                    <Favorite fontSize='large' />
                    <MoreHoriz />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} playSong={playSong} />
                ))}
            </div>

        </div>
    )
}

export default Body
