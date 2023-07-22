export const initialState = {
    user: null, 
    playlists: [], 
    playing: false,
    item: null,
    discover_weekly: null,
    token: 
    "BQAi-eKXTnuEHP1zqCuxIh85r1O75qYx6cRK9mNcmshNc9nAyNbvvdHaOpaPk3OlI",
};

const reducer = (state, action) => {
console.log(action);
 switch(action.type){
    case 'Set_User':
        return {
            ...state,
            user: action.user
        };
        case 'Set_token':
            return{
                ...state, 
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return{
                ...state, 
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
 }    

}

export default reducer;