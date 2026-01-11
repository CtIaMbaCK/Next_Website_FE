'use client';

import { useState } from 'react';
import FilterToolbar from '@/components/FilterToolbar';
import UserTable from '@/components/UserTable';
import { User } from '@/types';
import { Button } from '@/components/ui/button';
import Link from "next/link";
import RewardSelectionModal from '@/components/socialorg/RewardSelectionModal';
// --- Import từ file dữ liệu chung ---
import { MOCK_DATA, Volunteers } from '@/data/volunteersMockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VolunteersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // 1. STATES
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>(MOCK_DATA);

  // --- 3. LOGIC HÀM handleAppreciate ---
  const handleAppreciate = (id: string) => {
    // Lưu ID user được chọn
    setSelectedUserId(id);
    // Mở Modal Overlay
    setIsRewardModalOpen(true);
  };

  const handleApprove = (id: string) => {
    setUsers((prevUsers) => 
      prevUsers.map((user) => {
        if (user.id === id) return { ...user, status: 'ACTIVE' };
        return user;
      })
    );
  };

  // Logic Toggle Ban
  const handleToggleBan = (id: string, currentStatus: string) => {
    setUsers((prevUsers) => 
      prevUsers.map((user) => {
        if (user.id === id) {
          const newStatus = currentStatus === 'BANNED' ? 'ACTIVE' : 'BANNED';
          return { ...user, status: newStatus as User['status'] };
        }
        return user;
      })
    );
  };

  // 2. LOGIC FILTER (Kết hợp Tìm kiếm + Status)
  const filteredUsers = users.filter((user) => {
    // Điều kiện 1: Tìm theo tên
    const matchesSearch = user.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Điều kiện 2: Lọc theo trạng thái (Nếu chọn ALL thì luôn đúng, ngược lại phải khớp status)
    const matchesStatus = statusFilter === 'ALL' || user.status === statusFilter;

    // Cả 2 điều kiện phải cùng đúng
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tình nguyện viên</h1>
          <p className="text-sm text-gray-500 mt-1">Quản lý danh sách Tình nguyện viên</p>
        </div>
      </div>

      {/* Component Toolbar */}
      <FilterToolbar searchTerm={searchTerm} onSearchChange={setSearchTerm}>
        {/* Bất cứ thứ gì đặt ở đây sẽ hiện bên phải thanh tìm kiếm */}
        <div className="w-full md:w-[200px]">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-white border-custom-gray-border h-10">
                    <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="ALL">Tất cả</SelectItem>
                    <SelectItem value="ACTIVE">Hoạt động</SelectItem>
                    <SelectItem value="DENIED">Bị từ chối</SelectItem>
                    <SelectItem value="BANNED">Bị khóa</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </FilterToolbar>

      {/* Component Table */}
      <UserTable 
        data={filteredUsers} 
        onAppreciate={handleAppreciate}
        onToggleBan={handleToggleBan} 
        basePath="/socialorg/volunteers"
      />

      {/* --- 4. HIỂN THỊ MODAL OVERLAY --- */}
      <RewardSelectionModal 
        isOpen={isRewardModalOpen} 
        onClose={() => setIsRewardModalOpen(false)} 
        userId={selectedUserId}
      />
    </div>
  );
}