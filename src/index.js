import App from './App.jsx';
import root from 'react-dom/client';

// Where to render
const tag = document.getElementById('root');
const run = root.createRoot(tag);
// What to render
run.render(<App />);