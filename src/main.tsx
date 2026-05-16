import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import { HomePage } from './components/pages/HomePage';

createRoot(document.getElementById('root')!).render(<HomePage />);
