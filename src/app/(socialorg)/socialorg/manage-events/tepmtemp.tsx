'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Import Icons (Using react-icons/md to match Material Symbols)
import {
  MdAdd,
  MdSearch,
  MdExpandMore,
  MdArrowDownward,
  MdVisibility,
  MdEdit,
  MdDelete,
  MdChevronLeft,
  MdChevronRight
} from 'react-icons/md';

// Import Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress"; // Using Shadcn Progress bar

// Mock Data
const CAMPAIGNS = [
  {
    id: 1,
    name: "Chung tay dọn dẹp bãi biển",
    date: "15/08/2023 - 16/08/2023",
    location: "Bãi biển Sầm Sơn",
    participants: 20,
    maxParticipants: 20,
    status: "ended",
    statusLabel: "Đã kết thúc"
  },
  {
    id: 2,
    name: "Bữa cơm yêu thương",
    date: "20/10/2023",
    location: "Nhà văn hóa quận Cầu Giấy",
    participants: 15,
    maxParticipants: 20,
    status: "ongoing",
    statusLabel: "Đang diễn ra"
  },
  {
    id: 3,
    name: "Trung thu cho em",
    date: "15/09/2024",
    location: "Làng trẻ em SOS",
    participants: 5,
    maxParticipants: 20,
    status: "upcoming",
    statusLabel: "Sắp diễn ra"
  },
  {
    id: 4,
    name: "Giọt máu hồng hè 2024",
    date: "01/06/2024 - 30/08/2024",
    location: "Viện huyết học TW",
    participants: 50,
    maxParticipants: 100,
    status: "ongoing",
    statusLabel: "Đang diễn ra"
  }
];

// Helper function for status badges
const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case 'upcoming': return "success"; // Greenish
    case 'ongoing': return "default"; // Blueish/Primary
    case 'ended': return "secondary"; // Grayish
    default: return "outline";
  }
};

const getStatusColorClass = (status: string) => {
   switch (status) {
    case 'upcoming': return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-100/80";
    case 'ongoing': return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-100/80";
    case 'ended': return "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200 hover:bg-gray-100/80";
    default: return "";
  }
}

// Helper for Progress Bar Color
const getProgressColorClass = (percentage: number) => {
    if (percentage >= 100) return "bg-green-500";
    if (percentage >= 50) return "bg-yellow-500";
    return "bg-red-500";
}

export default function CampaignPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="flex flex-col w-full max-w-7xl mx-auto gap-6">
        
        {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Khen thưởng</h1>
                        <p className="text-sm text-gray-500 mt-1">Quản lý Khen thưởng</p>
                    </div>
                    <Button className="gap-2 bg-primary text-white hover:bg-teal-700 shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        Tạo form khen thưởng mới
                    </Button>
                </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <Input 
                placeholder="Tìm kiếm chiến dịch..." 
                className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus-visible:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Status Filter */}
            <div className="w-full sm:w-48">
              <Select>
                <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                  <SelectValue placeholder="Tất cả trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  <SelectItem value="upcoming">Sắp diễn ra</SelectItem>
                  <SelectItem value="ongoing">Đang diễn ra</SelectItem>
                  <SelectItem value="ended">Đã kết thúc</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span>Sắp xếp theo:</span>
            <button className="font-semibold text-primary hover:underline">Ngày bắt đầu</button>
            <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdArrowDownward className="text-lg" />
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
             <Table>
                <TableHeader className="bg-gray-50 dark:bg-gray-700">
                   <TableRow>
                      <TableHead className="w-[250px] font-semibold text-gray-700 dark:text-gray-300 uppercase text-xs">Tên chiến dịch</TableHead>
                      <TableHead className="font-semibold text-gray-700 dark:text-gray-300 uppercase text-xs">Thời gian</TableHead>
                      <TableHead className="font-semibold text-gray-700 dark:text-gray-300 uppercase text-xs">Địa điểm</TableHead>
                      <TableHead className="w-[200px] font-semibold text-gray-700 dark:text-gray-300 uppercase text-xs">Người tham gia</TableHead>
                      <TableHead className="font-semibold text-gray-700 dark:text-gray-300 uppercase text-xs">Trạng thái</TableHead>
                      <TableHead className="text-right font-semibold text-gray-700 dark:text-gray-300 uppercase text-xs">Hành động</TableHead>
                   </TableRow>
                </TableHeader>
                <TableBody>
                   {CAMPAIGNS.map((campaign) => {
                      const percentage = (campaign.participants / campaign.maxParticipants) * 100;
                      return (
                        <TableRow key={campaign.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                           <TableCell className="font-medium text-gray-900 dark:text-white whitespace-nowrap">
                              {campaign.name}
                           </TableCell>
                           <TableCell className="text-gray-600 dark:text-gray-300">
                              {campaign.date}
                           </TableCell>
                           <TableCell className="text-gray-600 dark:text-gray-300">
                              {campaign.location}
                           </TableCell>
                           <TableCell>
                              <div className="flex flex-col gap-1">
                                 <div className="flex items-center justify-between text-xs mb-1">
                                    <span>{campaign.participants}/{campaign.maxParticipants}</span>
                                 </div>
                                 {/* Custom Progress Bar with Dynamic Color */}
                                 <div className="h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                     <div 
                                        className={`h-full rounded-full ${getProgressColorClass(percentage)}`} 
                                        style={{ width: `${percentage}%` }} 
                                     />
                                 </div>
                              </div>
                           </TableCell>
                           <TableCell>
                              <Badge variant="secondary" className={`font-medium border-none px-2.5 py-0.5 rounded-full ${getStatusColorClass(campaign.status)}`}>
                                 {campaign.statusLabel}
                              </Badge>
                           </TableCell>
                           <TableCell className="text-right">
                              <div className="flex gap-2 justify-end">
                                 <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-primary hover:bg-transparent">
                                    <MdVisibility className="text-xl" />
                                 </Button>
                                 <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-primary hover:bg-transparent">
                                    <MdEdit className="text-xl" />
                                 </Button>
                                 <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-red-600 hover:bg-transparent">
                                    <MdDelete className="text-xl" />
                                 </Button>
                              </div>
                           </TableCell>
                        </TableRow>
                      );
                   })}
                </TableBody>
             </Table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
             Hiển thị 1-{CAMPAIGNS.length} trên 10 chiến dịch
          </span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled className="h-9 w-9 border-none bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdChevronLeft className="text-xl" />
            </Button>
            <Button className="h-8 w-8 bg-primary hover:bg-primary/90 text-white font-bold p-0 text-sm rounded-lg">
              1
            </Button>
            <Button variant="ghost" className="h-8 w-8 p-0 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              2
            </Button>
            <Button variant="ghost" className="h-8 w-8 p-0 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              3
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 border-none bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdChevronRight className="text-xl" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}