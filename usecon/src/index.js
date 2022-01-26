import App from './App.js';
import './index.css'
import  ReactDom from 'react-dom';
import {Provider} from 'react-redux';
const root= document.querySelector('#root')
ReactDom.render(
<Provider><App/></Provider> ,root
)