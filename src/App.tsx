import { Navigate, Route, Routes } from 'react-router-dom';
import {
  AccessibilityPage,
  AboutPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  PrivacyPage,
  SettingsPage,
  StatusPage,
  TerminalPage,
  TermsPage,
} from '@/components/pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/terminal" element={<TerminalPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/accessibility" element={<AccessibilityPage />} />
      <Route path="/status" element={<StatusPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
