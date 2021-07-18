import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Components/Login';
import Player from './Components/Player';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromUrl } from './spotify';
import './Styles/App.css';


let spotify = new SpotifyWebApi()

function App() {

  // Grabing data from a data layer
  const [{ token }, dispatch] = useDataLayerValue()

  //Runs each time the page refreshes or there is a change in dependent values
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      //adding token to Datalayer
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      //setting the access token for the spotify API
      spotify.setAccessToken(_token)

      spotify.getMe().then(_user => {
        // dispatch add data to the data layer
        dispatch({
          type: 'SET_USER',
          user: _user,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcSc6zfT6fh1J').then(response => 
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response,
          })
        )

      spotify.getMyTopArtists().then((response) => 
          dispatch({
            type: 'SET_TOP_ARTISTS',
            top_artists: response,
          })
      )

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify,
      })

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

    }
  }, [dispatch])

  // console.log('User data:', user)

  return (
    <div className="app">
      {/* if logged in successfully render Player component else render Login component */}
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
