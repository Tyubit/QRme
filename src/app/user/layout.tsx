export default function ProfileLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
      <main className="w-screen">
            {children}
      </main>
  );
}