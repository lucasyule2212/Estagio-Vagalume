import { useState } from "react";
import { createContext, ReactNode } from "react";
import api from "../services/api";

type DataFetchType = {
  success: boolean;
  token: string;
  message?: string;
};
type FormDataType = {
  username: string;
  password: string;
};
type AuthContextType = {
  authData: DataFetchType | undefined;
  handlePostData: (formData: FormDataType) => {};
};
type AuthContextProviderProps = {
  children: ReactNode;
};
export const AuthenticationContext = createContext({} as AuthContextType);

function AuthContextProvider(props: AuthContextProviderProps) {
  const [authData, setAuthData] = useState<DataFetchType>();
  //testes 
    async function handlePostData(formData: FormDataType) {
     const {data} = await api.post("/login", {
          username: formData.username,
          password: formData.password,
        }) 
      setAuthData({
        success:data.success,
        token:data.token
      })          
    }


  return (
    <AuthenticationContext.Provider value={{ authData, handlePostData }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}

export { AuthContextProvider };
