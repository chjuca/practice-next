import NavBar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Practice Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <main
        className="container mx-auto h-[calc(100vh-7rem)] flex justify-center items-center"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
