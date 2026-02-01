export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r p-4">
        <h2 className="font-semibold mb-4">Dashboard</h2>
        <nav className="space-y-2 text-sm">
          <div>Overview</div>
          <div>Projects</div>
          <div>Settings</div>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
