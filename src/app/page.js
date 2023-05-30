"use client";
import Banner from "@/components/Banner/Banner";
import BgBanner from "@/components/BgBanner/BgBanner";
import Carousel from "@/components/Carousel/Carousel";
import Feature from "@/components/Feature/Feature";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Testimony from "@/components/Testimony/Testimony";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Banner />
      <Carousel />
      <Feature />
      <BgBanner />
      <Testimony />
      <Footer />
    </>
  );
}
