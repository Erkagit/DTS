import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Заал & Танхим | EVENTLY",
  description: "VIP өрөө, хуримын заал, хурлын танхим — онцлог орон зайнуудаас сонгоорой.",
};

export default function VenuesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
