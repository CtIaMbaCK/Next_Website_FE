'use client';

import React from 'react';
import {
  MdSearch,
  MdFilterList,
  MdSort,
  MdStars,
  MdVolunteerActivism,
  MdMilitaryTech,
  MdHandshake,
  MdCalendarToday,
  MdEditDocument,
  MdChevronLeft,
  MdChevronRight,
  MdClose
} from 'react-icons/md';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Dữ liệu mẫu các biểu mẫu khen thưởng
const REWARD_TEMPLATES = [
  {
    id: 1,
    title: "Giấy khen Tình nguyện viên Xuất sắc",
    description: "Biểu mẫu chuẩn dùng để vinh danh các cá nhân có thành tích hoạt động xuất sắc trong quý.",
    createdDate: "15/10/2023",
    usageCount: 128,
    icon: <MdStars className="text-2xl" />,
    iconBg: "bg-custom-teal/10",
    iconColor: "text-custom-teal"
  },
  {
    id: 2,
    title: "Chứng nhận Tham gia Chiến dịch",
    description: "Xác nhận sự tham gia của tình nguyện viên trong các chiến dịch ngắn hạn.",
    createdDate: "20/09/2023",
    usageCount: 450,
    icon: <MdVolunteerActivism className="text-2xl" />,
    iconBg: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    id: 3,
    title: "Huy hiệu Cống hiến 5 Năm",
    description: "Vinh danh sự gắn bó lâu dài của các thành viên nòng cốt.",
    createdDate: "01/01/2023",
    usageCount: 12,
    icon: <MdMilitaryTech className="text-2xl" />,
    iconBg: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400"
  },
  {
    id: 4,
    title: "Thư Cảm ơn Nhà Tài trợ",
    description: "Mẫu thư trang trọng gửi đến các đối tác doanh nghiệp và nhà hảo tâm cá nhân.",
    createdDate: "10/11/2023",
    usageCount: 85,
    icon: <MdHandshake className="text-2xl" />,
    iconBg: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400"
  }
];

interface RewardSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string | null; // ID của user đang được khen thưởng
}

export default function RewardSelectionModal({ isOpen, onClose, userId }: RewardSelectionModalProps) {
  
  const handleSelectTemplate = (templateId: number) => {
    // Logic xử lý khi chọn mẫu (ví dụ: chuyển sang trang điền thông tin hoặc gọi API)
    console.log(`Đã chọn mẫu ${templateId} cho User ID: ${userId}`);
    onClose(); // Đóng modal sau khi chọn
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white dark:bg-gray-900">
        <div className="flex flex-col h-[85vh] sm:h-auto max-h-[90vh]">
          
          {/* Header Modal */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-start bg-white dark:bg-gray-900 sticky top-0 z-10">
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">Khen thưởng</DialogTitle>
              <p className="text-sm text-gray-500 mt-1">Chọn một biểu mẫu khen thưởng để bắt đầu</p>
            </div>
            {/* Nút Close mặc định của Dialog đôi khi khó thấy, có thể dùng nút custom hoặc để mặc định */}
            <Button onClick={onClose}>
                Hủy bỏ
            </Button>
          </div>

          {/* Search & Filter Bar */}
          <div className="p-4 sm:p-6 bg-gray-50/50 dark:bg-gray-800/20 border-b border-gray-200 dark:border-gray-700">
             <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                   <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                   <Input 
                      className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 h-10" 
                      placeholder="Tìm kiếm biểu mẫu khen thưởng..." 
                   />
                </div>
             </div>
          </div>

          {/* List Content - Scrollable */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
            {REWARD_TEMPLATES.map((template) => (
              <div key={template.id} className="p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center ${template.iconBg} ${template.iconColor}`}>
                       {template.icon}
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-custom-teal transition-colors">
                          {template.title}
                       </h3>
                       <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                          {template.description}
                       </p>
                       <div className="mt-2 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                             <MdCalendarToday /> Đã tạo: {template.createdDate}
                          </span>
                          <span className="flex items-center gap-1">
                             <MdEditDocument /> Sử dụng: {template.usageCount} lần
                          </span>
                       </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 sm:ml-4">
                     <Button 
                        className="w-full sm:w-auto bg-custom-teal hover:bg-custom-teal/90 text-white font-bold"
                        onClick={() => handleSelectTemplate(template.id)}
                     >
                        Chọn
                     </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Footer */}
          <div className="p-4 bg-gray-50/50 dark:bg-gray-800/20 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
             <p className="text-sm text-gray-500">Hiển thị <span className="font-bold text-gray-900">1</span> đến <span className="font-bold text-gray-900">4</span> trong số <span className="font-bold text-gray-900">24</span> biểu mẫu</p>
             <div className="flex gap-2">
                <Button variant="ghost" size="icon" disabled>
                   <MdChevronLeft className="text-xl" />
                </Button>
                <Button variant="ghost" size="icon">
                   <MdChevronRight className="text-xl" />
                </Button>
             </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}