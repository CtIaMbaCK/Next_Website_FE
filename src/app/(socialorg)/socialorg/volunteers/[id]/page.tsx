'use client';

import { useState } from 'react'; // 1. Import useState
import { MOCK_DATA } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MdStars } from 'react-icons/md'; // Import icon nếu muốn đẹp hơn
// 2. Import Component Modal Khen thưởng
import RewardSelectionModal from '@/components/socialorg/RewardSelectionModal';

export default function EditVolunteersPage() {
  const params = useParams();
  
  // State để quản lý Modal
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);

  const userId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const user = MOCK_DATA.find((u) => u.id === userId);

  // Hàm mở modal
  const handleAppreciate = () => {
    setIsRewardModalOpen(true);
  };

  if (!user) {
    return (
        <div className="p-8 text-center">
            <h2 className="text-xl font-bold text-red-600">Không tìm thấy người dùng!</h2>
            <p className="text-gray-500 mt-2">ID đang tìm: {userId || 'Chưa nhận được ID'}</p>
            <div className="mt-4">
                 <Link href="/socialorg/volunteers" className="text-blue-500 hover:underline">Quay lại danh sách</Link>
            </div>
        </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto my-8">
      
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6 border-b pb-4">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Chỉnh sửa thông tin</h1>
            <p className="text-sm text-gray-500">ID: {user.id}</p>
        </div>
        
        {/* --- 3. THÊM NÚT KHEN THƯỞNG TẠI ĐÂY --- */}
        <Button 
            variant="outline"
            className='text-custom-teal border-custom-teal hover:bg-custom-teal hover:text-white font-medium gap-2'
            onClick={handleAppreciate}
        >
            <MdStars className="text-lg" />
            Khen thưởng
        </Button>
        {/* -------------------------------------- */}
      </div>

      <form className="space-y-4">
        {/* ... (Phần form giữ nguyên như cũ) ... */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Họ và tên</label>
          <input 
            type="text" 
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-primary/50 outline-none" 
            defaultValue={user.fullName} 
          />
        </div>

        <div>
           <label className="block text-sm font-medium mb-1 text-gray-700">Trạng thái</label>
           <select 
                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-primary/50 outline-none" 
                defaultValue={user.status}
           >
              <option value="ACTIVE">Đã xác minh (Active)</option>
              <option value="PENDING">Chờ duyệt (Pending)</option>
              <option value="DENIED">Từ chối (Denied)</option>
              <option value="BANNED">Đã khóa (Banned)</option>
           </select>
        </div>

        <div>
           <label className="block text-sm font-medium mb-1 text-gray-700">Ngày tạo</label>
           <input 
                type="text"
                disabled
                className="w-full border border-gray-200 bg-gray-100 p-2 rounded text-gray-500 cursor-not-allowed"
                defaultValue={user.createdAt}
           />
        </div>

        {/* --- DỮ LIỆU GIẢ --- */}
        <div className="p-4 bg-gray-50 rounded border border-dashed border-gray-300">
            <h3 className="text-xs font-bold text-gray-400 uppercase mb-3">Dữ liệu giả lập</h3>
            <div className="mb-3">
                <label className="block text-sm font-medium mb-1 text-gray-700">Số điện thoại</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded" defaultValue="0901234567" />
            </div>
             <div className="mb-3">
                <label className="block text-sm font-medium mb-1 text-gray-700">Địa chỉ</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded" defaultValue="123 Đường Giả Lập" />
            </div>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Link href="/socialorg/volunteers">
            <Button type="button" variant="ghost">Hủy bỏ</Button>
          </Link>
          <Button type="submit" className="bg-primary text-white hover:bg-teal-700">Lưu thay đổi</Button>
        </div>
      </form>

      {/* --- 4. HIỂN THỊ MODAL OVERLAY --- */}
      <RewardSelectionModal 
        isOpen={isRewardModalOpen} 
        onClose={() => setIsRewardModalOpen(false)} 
        userId={user.id} // Truyền ID của user hiện tại vào modal
      />
      {/* ---------------------------------- */}
    </div>
  );
}