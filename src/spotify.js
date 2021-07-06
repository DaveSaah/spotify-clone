export const authEndPoint = 'https://accounts.spotify.com/authorize'
//const redirectUri = 'http://localhost:3000/'
const redirectUri = 'https://spotify-clone-ep.web.app'
const clientId = '977caab9cac640b9b21998352a0498bf'

//playlist-read-private
//playlist-read-collaborative

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

// ? adds parameter to a web address

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

// http://localhost:3000/#access_token=BQDFRCPPI8IHFCPKJGLlluoul7cZM7UT1Srf8HsKVEYGFW5Bz4LT3g9xwWKs15_KJ7yvBL5tZLM1634LyoKstpqa0GMNmXB7EIW6fg3kDlxjQiKoHkmks2dBKizSDruDBLABe6RG-H_bXrae2rPST_HKwxdzwdqGneoSI-evJ5Tf_4Df&token_type=Bearer&expires_in=3600


export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
    }, {})
}
