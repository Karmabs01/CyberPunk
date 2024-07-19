import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/index.css";

window.jQuery = $;


// createRoot(document.getElementById("root")).render(<App />);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );