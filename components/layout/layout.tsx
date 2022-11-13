import Navbar from "./navbar";
import {ReactNode} from "react";

type Props = {
    children?: ReactNode
}

const layout = ({children}: Props) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default layout;