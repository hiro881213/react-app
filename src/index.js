import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import App from './App';

import { AdminFlagProvider } from "./components/chap7_child/providers/AdminFlagProvider";

// ReactDOMを描画する
ReactDOM.render(
    <AdminFlagProvider>
        <App />
    </AdminFlagProvider>,
    document.getElementById("root")
);