import Sidebar from '../ui/sidebar/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-base-40 text-white flex flex-row gap-16">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
