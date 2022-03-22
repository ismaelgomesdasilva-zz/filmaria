import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./pages/home"
import Header from "./Components/Header"
import Filme from "./pages/filmes"
import Favoritos from "./pages/Favoritos"
const Routes = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path= "/filme/:id" exact component={Filme}/>
            <Route path= "/favoritos" exact component={Favoritos}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;