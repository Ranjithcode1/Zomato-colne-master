import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

//Pages
import Home from "./Pages/Home";

import Temp from "./Component/temp";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from "react-router";



function App() {
  return (
    <div className="App">
      <Route path='/' exact >
        <Redirect to='/delivery' />
      </Route>
      <HomeLayoutHOC path='/:type' exact component={Home}/>
      <RestaurantLayoutHOC path='/restaurant/:id' exact component={Temp}/>
    </div>
  );
}

export default App;
