/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import DescriptionOne from "@/components/DescriptionOne";
import DescriptionTwo from "@/components/DescriptionTwo";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Integration from "@/components/integration";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RigidPace",
};

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Integration/>
      <DescriptionOne />
      <Products />
      <DescriptionTwo/>
      <Footer />
    </>
  );
}
