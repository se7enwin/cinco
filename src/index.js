import App from './App.jsx';
import root from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const tag = document.getElementById('root');
const run = root.createRoot(tag);
run.render(<BrowserRouter><App /></BrowserRouter>);