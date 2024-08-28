// this is the test page
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          {children}  
      </main>     
    );
    // test
  }
  