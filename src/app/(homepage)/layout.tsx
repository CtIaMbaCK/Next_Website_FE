import type { Metadata } from "next";
import HomeHeader from "@/components/HomePageHeader";

export const metadata: Metadata = {
  title: "BetterUS",
  description: "BetterUS cho Tổ chức xã hội",
};

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Phần nội dung chính bên phải */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        {/* Header cố định ở trên cùng của phần nội dung */}
        <HomeHeader />

        {/* Nội dung thay đổi (Children) */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </>
  );
}