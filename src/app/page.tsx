"use client";
import SlideHome from "@/components/home_content/SlideHome";
import Welcome from "@/components/welcome_content/Welcome";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <HomeContent />
      <div className="h-full bg-white">
        <Welcome />
        <BlogContent />
      </div>
    </>
  );
}
