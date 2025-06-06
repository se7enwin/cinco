import App from './App.jsx';
import root from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


// Where to render
const tag = document.getElementById('root');
const run = root.createRoot(tag);
// What to render
run.render(<BrowserRouter><App /></BrowserRouter>);
