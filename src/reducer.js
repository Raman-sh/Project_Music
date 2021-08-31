import React from "react";

export const initialState={
    user :null,
    playlist:[],
    playing:false,
    item:null,
    //Revove after developing
    // token:'QACm6Km6DQ2CfSfNDMmnYRhg2invdDY9evdW31Gs5C_zwNZ_QiIambzFrotTtLkBo3lVnr1X280Ts64SHT4yK5ly2pvcMec1weNmdmivBQ0PRnHKjIqXI939ntJlH0ducSqRkotBvThV5_jstGy8Mk3hDf8Up8PE63Ky0ok8ErNhHLBZHoz',

};
const reducer =(state,action) => {
console.log(action);
// Action ->type,[payload]
switch(action.type) {
        case 'SET_USER':
              return{
            ...state,
            user:action.user,
        };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            };

            case "SET_PLAYLISTS":
                return{
                    ...state,
                    playlists:action.playlists,
                };

    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly:action.discover_weekly,
        };

        default:
            return state;
    }
    };


export default reducer;