import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage, NotFoundPage, SettingsPage, TerminalPage } from '@/components/pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/terminal" element={<TerminalPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
