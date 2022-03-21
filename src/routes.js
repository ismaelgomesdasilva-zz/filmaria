import {BrowserRouter, Route, Switch} from "react-router-dom"

import home from "./pages/home"
import Header from "./Components/Header"
const Routes = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={home}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;