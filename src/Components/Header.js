import { Input, Avatar, Typography } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import '../Styles/Header.css'



function Header() {
    const [{ user }] = useDataLayerValue()

    return (
        <div className='header'>
            <div className='header__left'>
                <Search />
                <Input placeholder='Artists, songs or podcasts' type='text' color='inherit'/>
            </div>
            <div className='header__right'>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                {<Typography style={{ paddingLeft: '10px' }} variant='h5'>{user?.display_name}</Typography>}
            </div>
        </div>
    )
}

export default Header
