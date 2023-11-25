import Sidebar from "@/app/ui/sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-base-40 h-[100vw] text-white flex flex-row gap-16">
      <div>{children}</div>
    </div>
  );
}
