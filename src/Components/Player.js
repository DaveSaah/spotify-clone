import React from 'react'
import { Typography } from '@material-ui/core'

function Player(props) {
    return (
        <div>
            <Typography variant='h5' align='center' >Welcome To Spotify Clone, {props.user.display_name}</Typography>
        </div>
    )
}

export default Player
