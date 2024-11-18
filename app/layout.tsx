import "./globals.css";
import Nav from "@/components/navigation/nav";
import Search from "@/components/search/searchCard";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Anna's Kitchen",
  description: "Website with delicious recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Nav />
        <Search />
        {children}
      </body>
    </html>
  );
}
