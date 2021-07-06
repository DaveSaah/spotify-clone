import React from 'react'
import '../Styles/Sidebar.css'
import img from '../Assets/spotify-logo-2.jpg'
import SidebarOption from './SidebarOption'
import { HomeRounded, LibraryMusicRounded, SearchRounded } from '@material-ui/icons'
import { useDataLayerValue } from '../DataLayer'


function Sidebar() {

    const [{ playlists }] = useDataLayerValue()

    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src={img} alt='spotify-logo' />
            <SidebarOption Icon={HomeRounded} title='Home' />
            <SidebarOption Icon={SearchRounded} title='Search' />
            <SidebarOption Icon={LibraryMusicRounded} title='Your Library' />

            <br />
            <strong className='sidebar__playlist'>PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => {
                return (
                    <SidebarOption title={playlist.name} />
                )
            })}
        </div>
    )
}

export default Sidebar
