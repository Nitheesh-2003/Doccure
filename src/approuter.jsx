import React ,{createContext, useState} from 'react';
import AppContainer from './appcontainer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import config from 'config';

export const Appcontext = createContext()

const AppRouter = (props) => {

    const [isAuth, setIsAuth] = useState("user")
    return(
        <Router basename={`${config.publicPath}`}>

            <Appcontext.Provider value={{isAuth, setIsAuth}}>
                <Route render={(props)=> <AppContainer {...props}/>} />
            </Appcontext.Provider>
        </Router>
    );
    
}


export default AppRouter;