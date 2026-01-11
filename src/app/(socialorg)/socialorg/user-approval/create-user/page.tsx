'use client';

import React from 'react';
import Link from 'next/link';

// Import Icons
import {
  IoCloudUploadOutline, IoIdCardOutline, IoAlertCircleOutline,
  IoCalendarOutline, IoLocationOutline, IoPersonCircleOutline,
  IoMailOutline, IoCallOutline, IoHomeOutline, IoPeopleCircleOutline,
  IoPersonOutline, IoGitNetworkOutline, IoPulseOutline,
  IoDocumentAttachOutline, IoBriefcaseOutline
} from 'react-icons/io5';

// Import Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BeneficiaryCreatePage() {
  return (
    <div className="p-4 sm:p-8 space-y-6 min-h-screen bg-custom-gray-bg text-custom-text-dark">
      
      {/* Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/socialorg/dashboard" className="text-custom-text-light hover:text-custom-teal">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/socialorg/user-approval" className="text-custom-text-light hover:text-custom-teal">Xét duyệt người dùng</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-custom-text-dark">Tạo mới hồ sơ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* BEGIN: Main Profile Input Card (Avatar & Name Only) */}
      <Card className="bg-white custom-card border-none">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            {/* Avatar Upload Section */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative group cursor-pointer">
                <Avatar className="w-24 h-24 border-2 border-dashed border-custom-teal/50 bg-custom-teal-light flex items-center justify-center hover:bg-custom-teal/10 transition-colors">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-transparent">
                    <IoCloudUploadOutline className="text-3xl text-custom-teal" />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-white font-medium">Đổi ảnh</span>
                </div>
              </div>
            </div>

            {/* Main Input: Name Only */}
            <div className="flex-1 w-full space-y-2">
               <Label htmlFor="fullname" className="text-custom-text-light font-medium">Họ và tên <span className="text-red-500">*</span></Label>
               <Input 
                  id="fullname" 
                  placeholder="Nhập họ và tên người cần giúp đỡ..." 
                  className="font-semibold text-lg border-custom-gray-border focus-visible:ring-custom-teal h-12" 
               />
            </div>

            <div className="space-y-2">
                    <Label htmlFor="role" className="text-custom-text-light font-medium flex items-center gap-2">
                        <IoBriefcaseOutline /> Vai trò <span className="text-red-500">*</span>
                    </Label>
                    <Select defaultValue="beneficiary"> {/* Mặc định chọn Người cần giúp đỡ */}
                        <SelectTrigger className="h-11 border-custom-gray-border focus:ring-custom-teal font-medium">
                            <SelectValue placeholder="Chọn vai trò" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="beneficiary">Người cần giúp đỡ</SelectItem>
                            <SelectItem value="volunteer">Tình nguyện viên</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

            {/* Action Buttons (Top Level) */}
            <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-6">
               <Button variant="outline" className="flex-1 md:flex-none text-red-600 border-red-600 hover:bg-red-50 px-6">
                 Hủy bỏ
               </Button>
               <Button className="flex-1 md:flex-none bg-custom-teal hover:bg-custom-teal/90 text-white font-semibold px-8 shadow-sm">
                 Tạo hồ sơ
               </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* END: Main Profile Input Card */}

      {/* BEGIN: Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Personal Info Input Card (Moved Details Here) */}
        <Card className="bg-white custom-card border-none lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-custom-text-dark">
              <IoPersonCircleOutline className="mr-2 text-custom-teal text-2xl" />
              Thông tin chi tiết
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Row 1: ID & Status (Moved from top) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                   <Label htmlFor="idCode" className="text-custom-text-light font-medium flex items-center gap-2">
                     <IoIdCardOutline /> Mã định danh / CCCD
                   </Label>
                   <Input id="idCode" placeholder="Nhập số CCCD/CMND..." className="border-custom-gray-border focus-visible:ring-custom-teal" />
                </div>

                <div className="space-y-2">
                    <Label className="text-custom-text-light font-medium flex items-center gap-2">
                      <IoAlertCircleOutline /> Trạng thái
                    </Label>
                    <Select defaultValue="need_help">
                      <SelectTrigger className="border-custom-gray-border focus:ring-custom-teal">
                        <SelectValue placeholder="Chọn trạng thái" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="need_help">Cần tình nguyện viên</SelectItem>
                        <SelectItem value="urgent">Khẩn cấp</SelectItem>
                        <SelectItem value="stable">Đã ổn định</SelectItem>
                      </SelectContent>
                    </Select>
                 </div>
            </div>

            {/* Row 2: Date & Location (Moved from top) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label className="text-custom-text-light font-medium flex items-center gap-2">
                      <IoCalendarOutline /> Ngày tiếp nhận
                    </Label>
                    <Input type="date" className="border-custom-gray-border focus-visible:ring-custom-teal" />
                 </div>

                 <div className="space-y-2">
                    <Label className="text-custom-text-light font-medium flex items-center gap-2">
                      <IoLocationOutline /> Khu vực
                    </Label>
                    <Select>
                      <SelectTrigger className="border-custom-gray-border focus:ring-custom-teal">
                        <SelectValue placeholder="Chọn Quận/Huyện" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="q1">Quận 1</SelectItem>
                        <SelectItem value="q3">Quận 3</SelectItem>
                        <SelectItem value="bt">Bình Thạnh</SelectItem>
                      </SelectContent>
                    </Select>
                 </div>
            </div>

            {/* Row 3: Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-dashed border-gray-200">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-custom-text-light">
                  <IoMailOutline /> Email
                </Label>
                <Input id="email" type="email" placeholder="example@email.com" className="focus-visible:ring-custom-teal" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-custom-text-light">
                  <IoCallOutline /> Số điện thoại
                </Label>
                <Input id="phone" type="tel" placeholder="0909 xxx xxx" className="focus-visible:ring-custom-teal" />
              </div>
            </div>

            {/* Row 4: Address */}
            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2 text-custom-text-light">
                <IoHomeOutline /> Địa chỉ thường trú
              </Label>
              <Input id="address" placeholder="Số nhà, tên đường, phường/xã..." className="focus-visible:ring-custom-teal" />
            </div>
            
            {/* Row 5: Bio */}
            <div className="space-y-2">
               <Label htmlFor="bio" className="text-custom-text-light">Tiểu sử / Hoàn cảnh (Tóm tắt)</Label>
               <Textarea id="bio" placeholder="Mô tả ngắn gọn về hoàn cảnh..." className="min-h-[100px] focus-visible:ring-custom-teal" />
            </div>
          </CardContent>
        </Card>

        {/* Guardian Info Input Card */}
        <Card className="bg-white custom-card border-none">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-custom-text-dark">
              <IoPeopleCircleOutline className="mr-2 text-custom-teal text-2xl" />
              Người bảo hộ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="guardianName" className="flex items-center gap-2 text-custom-text-light">
                <IoPersonOutline /> Họ và tên
              </Label>
              <Input id="guardianName" placeholder="Tên người bảo hộ" className="focus-visible:ring-custom-teal" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guardianPhone" className="flex items-center gap-2 text-custom-text-light">
                <IoCallOutline /> SĐT liên hệ
              </Label>
              <Input id="guardianPhone" type="tel" placeholder="SĐT người thân" className="focus-visible:ring-custom-teal" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="relationship" className="flex items-center gap-2 text-custom-text-light">
                <IoGitNetworkOutline /> Mối quan hệ
              </Label>
              <Select>
                <SelectTrigger id="relationship" className="focus:ring-custom-teal">
                  <SelectValue placeholder="Chọn quan hệ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="child">Con cái</SelectItem>
                  <SelectItem value="parent">Cha/Mẹ</SelectItem>
                  <SelectItem value="sibling">Anh/Chị/Em</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* END: Information Grid */}

      {/* BEGIN: Support Needs Input Card */}
      <Card className="bg-white custom-card border-none">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold text-custom-text-dark">
            <IoPulseOutline className="mr-2 text-custom-teal text-2xl" />
            Nhu cầu cần hỗ trợ
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label className="text-custom-text-light">Chọn các nhu cầu chính (Có thể chọn nhiều)</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="flex items-center gap-2 border p-2 rounded-md hover:border-custom-teal cursor-pointer">
                            <input type="checkbox" id="y-te" className="accent-custom-teal w-4 h-4" />
                            <label htmlFor="y-te" className="text-sm cursor-pointer">Y tế</label>
                        </div>
                        <div className="flex items-center gap-2 border p-2 rounded-md hover:border-custom-teal cursor-pointer">
                            <input type="checkbox" id="di-cho" className="accent-custom-teal w-4 h-4" />
                            <label htmlFor="di-cho" className="text-sm cursor-pointer">Đi chợ</label>
                        </div>
                        <div className="flex items-center gap-2 border p-2 rounded-md hover:border-custom-teal cursor-pointer">
                            <input type="checkbox" id="cham-soc" className="accent-custom-teal w-4 h-4" />
                            <label htmlFor="cham-soc" className="text-sm cursor-pointer">Chăm sóc</label>
                        </div>
                        <div className="flex items-center gap-2 border p-2 rounded-md hover:border-custom-teal cursor-pointer">
                            <input type="checkbox" id="don-dep" className="accent-custom-teal w-4 h-4" />
                            <label htmlFor="don-dep" className="text-sm cursor-pointer">Dọn dẹp</label>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="needsNote" className="text-custom-text-light">Ghi chú chi tiết về nhu cầu</Label>
                    <Textarea id="needsNote" placeholder="Ví dụ: Cần người đưa đi khám bệnh vào thứ 3 hàng tuần..." className="focus-visible:ring-custom-teal" />
                </div>
            </div>
        </CardContent>
      </Card>
      {/* END: Support Needs Input Card */}

      {/* BEGIN: Initial Note Input Card */}
      <Card className="bg-white custom-card border-none">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold text-custom-text-dark">
            <IoDocumentAttachOutline className="mr-2 text-custom-teal text-2xl" />
            Ghi chú / Đính kèm ban đầu
          </CardTitle>
        </CardHeader>
        <CardContent>
           <div className="space-y-2">
              <Label className="text-custom-text-light">Tải lên tài liệu (Hồ sơ bệnh án, Giấy tờ tùy thân...)</Label>
              <div className="border-2 border-dashed border-custom-gray-border rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-custom-teal-light/20 transition-colors">
                  <IoCloudUploadOutline className="text-4xl text-custom-text-light mb-2" />
                  <p className="text-sm font-medium text-custom-text-dark">Kéo thả file vào đây hoặc click để chọn</p>
                  <p className="text-xs text-custom-text-light mt-1">Hỗ trợ PDF, JPG, PNG (Tối đa 5MB)</p>
              </div>
           </div>
        </CardContent>
      </Card>
      {/* END: Initial Note Input Card */}

    </div>
  );
}