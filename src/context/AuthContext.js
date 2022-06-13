import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {  
    _id: "62a4f6b18dd36c57e967fe14",
    username: "jason",
    email: "jason@gmail.com", 
    profilePicture: "",  
    coverPicture: "",  
    followers: [],  
    following: [],
  },  
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user, 
        isFetching:state.isFetching, 
        error: state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}