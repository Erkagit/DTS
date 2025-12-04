import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Хоол & Зоог | EVENTLY",
  description: "Хоол, ундаа, амттан — таны арга хэмжээний амт болно.",
};

export default function CateringLayout({
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
