import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./client/reducers";
import Routes from "./routes";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>{Routes}</div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
