import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white sticky top-0 h-16 px-6 z-10">
      
      {/* LEFT: Logo + Brand */}
      <Link
        href="/"
        className="flex items-center gap-3 hover:opacity-80 transition"
      >
        {/* LOGO */}
        <Image 
          src="/images/logo.svg" 
          alt="BetterUS Logo" 
          width={28} 
          height={28}
          className="object-contain"
        />

        {/* TEXT */}
        <h1 className="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">
          BetterUS
        </h1>
      </Link>

      {/* RIGHT: Button */}
      <Button asChild className="text-white">
        <Link href="/login">
          Đăng nhập
        </Link>
      </Button>

    </header>
  );
}
