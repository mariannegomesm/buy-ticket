import React from 'react';
import ReactDOM from 'react-dom/client';

import "./style/global.scss";
import Routes from "./routes"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Routes />);
