import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Components/Login';
import Player from './Components/Player';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromUrl } from './spotify';
import './Styles/App.css';


let spotify = new SpotifyWebApi()

function App() {

  const [token, setToken] = useState('')

  // Grabing data from a data layer
  const [{ user }, dispatch] = useDataLayerValue()

  //Runs each time the page refreshes or there is a change in dependent values
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ''
    const _token = hash.access_token

    if (_token) {
      setToken(_token)

      //setting the access token for the spotify API
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        // dispatch add data to the data layer
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, [])

  console.log('User data', user)

  return (
    <div className="app">
      {/* if logged in successfully render Player component else render Login component */}
      {
        token ? <Player user={user} /> : <Login />
      }
    </div>
  );
}

export default App;
