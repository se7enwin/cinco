import App from './App.jsx';
import root from 'react-dom/client';

const tag = document.getElementById('root');
const run = root.createRoot(tag);
run.render(<App />);