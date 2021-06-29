import { createContext, useContext, } from "react";
import {AuthenticationContext} from '../contexts/AuthenticationContext'

function useAuthentication() {
  const value = useContext(AuthenticationContext)
  return value;
}
export {useAuthentication}