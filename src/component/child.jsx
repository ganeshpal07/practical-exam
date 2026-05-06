import React, {useContext} from "react";
import MyContext from "./Context-API";

function child() {
   const data = useContext(MyContext);
   return<h2>data</h2>

}
export default child;