export const initialState = {
    user: null, 
    playlists: [], 
    playing: false, 
    item: null, 
}

const reducer = (state, action) => {
    console.log(action)

    //Action -> type, [payload]

    switch(action.type) {

        // SET_USER is the action, user is the payload
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        default: 
        return state
    }
}

export default reducer
