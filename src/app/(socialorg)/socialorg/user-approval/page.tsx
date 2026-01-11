'use client';

import { useState } from 'react';
import FilterToolbar from '@/components/FilterToolbar';
import UserTable from '@/components/UserTable';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- THAY ĐỔI: Import từ file dữ liệu chung ---
import { MOCK_DATA, User } from '@/data/userMockData';

export default function NeedyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // --- STATES ---
  const [users, setUsers] = useState<User[]>(MOCK_DATA);
  const [roleFilter, setRoleFilter] = useState('ALL');

  // --- 1. THÊM HÀM handleApprove ---
  const handleApprove = (id: string) => {
    setUsers((prevUsers) => 
      prevUsers.map((user) => {
        if (user.id === id) {
          // Chuyển trạng thái thành ACTIVE (Đã xác minh)
          return { ...user, status: 'ACTIVE' };
        }
        return user;
      })
    );
    // Có thể thêm Toast thông báo thành công ở đây
    console.log(`Đã duyệt user: ${id}`);
  };

  // Logic Filter
  const filteredUsers = users.filter((user) => {
    // Điều kiện 1: Tìm theo tên
    const matchesSearch = user.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Điều kiện 2: Lọc theo trạng thái (Nếu chọn ALL thì luôn đúng, ngược lại phải khớp)
    const matchesRole = roleFilter === 'ALL' || user.role === roleFilter;

    // Cả 2 điều kiện phải cùng đúng
    return matchesSearch && matchesRole;
  });

  return (
    <div className="pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Xét duyệt người dùng</h1>
          <p className="text-sm text-gray-500 mt-1">Xét duyệt những người dùng đã đăng kí thuộc tổ chức</p>
        </div>
        
        {/* Link chuyển sang trang tạo mới */}
        <Link href="/socialorg/user-approval/create-user">
          <Button className="gap-2 bg-primary text-white hover:bg-teal-700 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Thêm Người Dùng
          </Button>
        </Link>
      </div>

      {/* Component Toolbar */}
      <FilterToolbar searchTerm={searchTerm} onSearchChange={setSearchTerm}>
        {/* Bất cứ thứ gì đặt ở đây sẽ hiện bên phải thanh tìm kiếm */}
        <div className="w-full md:w-[200px]">
            <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="bg-white border-custom-gray-border h-10">
                    <SelectValue placeholder="Vai trò" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="ALL">Tất cả</SelectItem>
                    <SelectItem value="VOLUNTEER">Tình nguyện viên</SelectItem>
                    <SelectItem value="BFICIARY">Người cần giúp đỡ</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </FilterToolbar>

      {/* Component Table */}
      {/* Lưu ý: Đảm bảo UserTable chấp nhận prop data kiểu NeedyUser[] */}
      <UserTable 
        data={filteredUsers} 
        onApprove={handleApprove}
        basePath="/socialorg/bficiary" // tạm, cần tạo trang [id] riêng
      />
    </div>
  );
}