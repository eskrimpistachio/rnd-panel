import Sidebar from '../ui/sidebar/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-base-40 h-[100vh] text-white flex flex-row">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
