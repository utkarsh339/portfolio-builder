export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="p-4 border-b">
        <h1 className="font-bold">Portfolio Builder</h1>
      </header>

      <main>{children}</main>

      <footer className="p-4 border-t text-sm text-center">
        © 2026 Portfolio Builder
      </footer>
    </div>
  );
}
