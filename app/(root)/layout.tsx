export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main>
            <p className="font-inter">sidebar</p>
            {children}
        </main>
    );
  }
  