import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
//items
import reducer from "./reducer";

// redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";

function App() {
  // cart setup

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
