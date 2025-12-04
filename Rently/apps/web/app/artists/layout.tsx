import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Уран бүтээлчид | EVENTLY",
  description: "DJ, хөгжимчид, гэрэл зурагчин — агшин бүрийг мартагдашгүй болго.",
};

export default function ArtistsLayout({
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
