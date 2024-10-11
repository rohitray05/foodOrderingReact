

import { useRouteError } from "react-router-dom";
const ErrorComponent = ()=>{
const err  = useRouteError()
console.log(err)
return (
<div>
  <h3>Oops Something Went Wrong!!</h3>
</div>
)
}


export default ErrorComponent;