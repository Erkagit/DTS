import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Үйлчилгээ | EVENTLY",
  description: "Чимэглэл, дуу чимээ, гэрэлтүүлэг, төлөвлөгч — бүх дэмжлэг нэг дор.",
};

export default function ServicesLayout({
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
