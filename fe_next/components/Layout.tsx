import MenuComp from "./MenuComp";
import {useState} from "react";

const Layout = (props) => {
  return (
    <div className={"container_div"}>
      {
        props.loadingState ?
        <div>
          Loading...
        </div>
        :
        <div>
          <div>
            <MenuComp />
          </div>
          <div>
            {props.children}
          </div>
        </div>
      }
    </div>
  )
}

export default Layout