import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const MyContext = createContext();

const AppContext = ({children}) => {
    const [meals, setMeals] = useState([]);
    const [user, setUser] = useState(null);



    return <MyContext.Provider value={{meals, setMeals, user, setUser}}>
        {children}
    </MyContext.Provider>
}

export default AppContext;