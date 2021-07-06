import React from 'react'
import '../Styles/Footer.css'
import { PlayCircleOutlineOutlined, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons'
import { Grid, Slider } from '@material-ui/core'
import mercy from '../Assets/mercy.jpg'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__albumLogo' src={mercy} alt='' />
                <div className='footer__songInfo'>
                    <h4>Mercy</h4>
                    <p>Elevation Worship & Maverick City</p>
                </div>
            </div>
            <div className='footer__center'>
                <Shuffle className='footer__green' />
                <SkipPrevious className='footer__icon' />
                <PlayCircleOutlineOutlined fontSize='large' className='footer__icon' />
                <SkipNext className='footer__icon' />
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
