import type { Metadata } from "next";
import Sidebar from "@/components/socialorg/Sidebar";
import Header from "@/components/socialorg/Header";

export const metadata: Metadata = {
  title: "BetterUS",
  description: "Hệ thống phía Tổ chức xã hội",
};

export default function SocialOrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Phần nội dung chính bên phải */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        {/* Header cố định ở trên cùng của phần nội dung */}
        <Header />

        {/* Nội dung thay đổi (Children) */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}