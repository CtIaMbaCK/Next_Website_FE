'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 2. Import hook lấy đường dẫn
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname(); // 3. Lấy đường dẫn hiện tại (ví dụ: /sosicalorg/dashboard)

  // 4. Định nghĩa danh sách menu tại đây cho gọn
  const menuItems = [
    { 
      name: 'Dashboard', 
      href: '/socialorg/dashboard', 
      icon: 'dashboard' 
    },
    { 
      name: 'Xét duyệt người dùng', 
      href: '/socialorg/user-approval', 
      icon: 'order_approve' 
    },
    { 
      name: 'Quản lý Người cần giúp đỡ', 
      href: '/socialorg/bficiary', 
      icon: 'account_child_invert' 
    },
    { 
      name: 'Quản lý Tình nguyện viên', 
      href: '/socialorg/volunteers', 
      icon: 'group' 
    },
    // { 
    //   name: 'Quản lý hoạt động', 
    //   href: '/socialorg/requests', 
    //   icon: 'volunteer_activism' 
    // },
    { 
      name: 'Khen thưởng Tình nguyện viên', 
      href: '/socialorg/appreciation', 
      icon: 'military_tech' 
    },
    { 
      name: 'Quản lý Chiến dịch - sự kiện', 
      href: '/socialorg/manage-events', 
      icon: 'campaign' 
    },
    { 
      name: 'Quản lý Truyền thông', 
      href: '/socialorg/blogs', 
      icon: 'perm_media' 
    },
    { 
      name: 'Thống kê', 
      href: '/socialorg/analysis', 
      icon: 'bar_chart' 
    },
    // Thêm phần tử cho sidebar...
  ];

  return (
    <aside className="flex w-64 flex-col bg-white text-gray-800 border-r border-gray-200 h-screen sticky top-0">
      <div className="flex h-16 shrink-0 items-center gap-3 px-6 border-b border-gray-200">
        <Image 
          src="/images/logo.svg" 
          alt="BetterUS Logo" 
          width={28} 
          height={28}
          className="object-contain"
        />
        <Link href={"/socialorg/dashboard"}>
        <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">BetterUS</h2>
        </Link>
      </div>

      <nav className="flex flex-col flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col gap-1">
          {/* 5. Dùng vòng lặp map để render menu */}
          {menuItems.map((item) => {
            // Kiểm tra xem link này có đang active không
            // Logic: 
            // 1. pathname === item.href: Đúng khi ở trang chính xác (vd: /bficiary)
            // 2. pathname.startsWith(`${item.href}/`): Đúng khi ở trang con (vd: /bficiary/create)
            // Lưu ý dấu "/" ở cuối để tránh nhầm lẫn giữa /users và /users-settings
            
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary text-white' // Style khi đang Active
                    : 'text-gray-500 hover:bg-primary/10 hover:text-primary' // Style khi bình thường
                }`}
              >
                <span className="material-symbols-outlined">
                  {item.icon}
                </span>
                <p className="text-sm font-medium leading-normal">
                  {item.name}
                </p>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}