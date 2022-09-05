import { useReducer } from 'react';
import  {createContext} from 'react';


export const themeContest = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode }
        default:
            return (state)

    }
};

export const ThemeProvider = (props) =>{
    const [state , dispatch] = useReducer (themeReducer , initialState);
    return(
         <themeContest.Provider value={{state , dispatch}}>
            {props.children}
         </themeContest.Provider>
    );
};  
