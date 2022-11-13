import Navbar from "./navbar";
import {ReactNode} from "react";

type Props = {
    children?: ReactNode
    toggleTheme: any
    isDarkTheme: boolean
}

const layout = ({children, toggleTheme, isDarkTheme}: Props) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      {children}
    </>
  )
}

export default layout;