import { Typography } from '@material-ui/core'
import React from 'react'
import '../Styles/SongRow.css'

function SongRow({ track }) {
    console.log(track)

    return (
        <div className='songRow'>
            <img className='songRow__album' src={track.album.images[0].url} alt='' />
            <div className="songRow__info">
                <Typography variant='body1'>{track.name}</Typography>
                <Typography vaiant='body2' className='T_p'>
                    {track.artists.map((artist) => artist.name).join(', ')} -{" "} &nbsp;
                    {track.album.name}
                </Typography>
            </div>
        </div>
    )
}
export default SongRow
