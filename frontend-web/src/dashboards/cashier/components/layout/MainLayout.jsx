// src/components/layout/MainLayout.jsx
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#111111]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto bg-[#f0ede8]">
          {children}
        </main>
      </div>
    </div>
  );
}
