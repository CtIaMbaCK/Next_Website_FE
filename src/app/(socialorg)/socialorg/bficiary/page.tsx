'use client';

import { useState } from 'react';
import FilterToolbar from '@/components/FilterToolbar';
import UserTable from '@/components/UserTable';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RewardSelectionModal from '@/components/socialorg/RewardSelectionModal';

// --- Import từ file dữ liệu chung ---
import { MOCK_DATA, NeedyUser } from '@/data/mockData';

export default function NeedyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // --- STATES ---
  const [users, setUsers] = useState<NeedyUser[]>(MOCK_DATA);
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null); //appreciate state

  // --- 3. LOGIC HÀM handleAppreciate ---
  const handleAppreciate = (id: string) => {
    // Lưu ID user được chọn
    setSelectedUserId(id);
    // Mở Modal Overlay
    setIsRewardModalOpen(true);
  };

  // Logic Toggle Ban (Xử lý Data)
  const handleToggleBan = (id: string, currentStatus: string) => {
    setUsers((prevUsers) => 
      prevUsers.map((user) => {
        if (user.id === id) {
          const newStatus = currentStatus === 'BANNED' ? 'ACTIVE' : 'BANNED';
          // Ép kiểu về status của NeedyUser
          return { ...user, status: newStatus as NeedyUser['status'] };
        }
        return user;
      })
    );
  };

  // Logic Filter
  const filteredUsers = users.filter((user) => 
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Người cần giúp đỡ</h1>
          <p className="text-sm text-gray-500 mt-1">Quản lý danh sách Người cần giúp đỡ</p>
        </div>
        
        {/* Link chuyển sang trang tạo mới */}
      </div>

      {/* Component Toolbar */}
      <FilterToolbar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      {/* Component Table */}
      {/* Lưu ý: Đảm bảo UserTable chấp nhận prop data kiểu NeedyUser[] */}
      <UserTable 
        data={filteredUsers} 
        onAppreciate={handleAppreciate}
        onToggleBan={handleToggleBan} 
        basePath="/socialorg/bficiary"
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