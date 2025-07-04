export default function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
      <main className="w-screen h-[calc(100vh-64px)] overflow-hidden">
            {children}
      </main>
  );
}