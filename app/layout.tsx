import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-black text-white h-full">{children}</body>
    </html>
  );
}
