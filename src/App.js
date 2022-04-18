import React, { useState } from "react";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const startLoader = () => setIsLoading(true)
  const stopLoader = () => setIsLoading(false)
  return (
    <>
      {isLoading && (<div className="loader"><p>Loading....</p><div className="spin"></div></div>)}
      <div className="App">
        <GlobalStyles />
        <Nav enableLoader={startLoader} disableLoader={stopLoader}/>
        <Route path={["/game/:id", "/"]}>
          <Home enableLoader={startLoader} disableLoader={stopLoader}/>
        </Route>
      </div>
    </>
  );
}

export default App;
