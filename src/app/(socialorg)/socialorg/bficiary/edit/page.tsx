'use client';

import React from 'react';
import Link from 'next/link';

// Import Icons
import {
  IoCheckmarkOutline, IoIdCardOutline, IoAlertCircleOutline, 
  IoCalendarOutline, IoLocationOutline, IoPersonCircleOutline, 
  IoMailOutline, IoCallOutline, IoHomeOutline, IoPeopleCircleOutline, 
  IoPersonOutline, IoGitNetworkOutline, IoPulseOutline, 
  IoMedkitOutline, IoCartOutline, IoWalkOutline, IoTrashOutline, 
  IoDocumentAttachOutline, IoFolderOutline
} from 'react-icons/io5';

// Import Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BeneficiaryCreateNewUser() {
  return (
    <div className="p-4 sm:p-8 space-y-6 min-h-screen bg-custom-gray-bg text-custom-text-dark">
      
      {/* Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-custom-text-light hover:text-custom-teal">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/socialorg/bficiary" className="text-custom-text-light hover:text-custom-teal">Người cần giúp đỡ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-custom-text-dark">Nguyễn Văn A</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* BEGIN: User Profile Card */}
      {/* THÊM bg-white VÀO ĐÂY */}
      <Card className="bg-white custom-card border-none">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              {/* Avatar Section */}
              <div className="relative">
                <Avatar className="w-24 h-24 border-2 border-white shadow-md bg-gray-200">
                  <AvatarImage src="" alt="User Avatar" />
                  <AvatarFallback>
                    <svg className="h-12 w-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd" />
                    </svg>
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <IoCheckmarkOutline className="text-white font-bold" />
                </div>
              </div>

              {/* User Details */}
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-custom-text-dark">Nguyễn Văn A</h2>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-custom-text-light">
                  <span className="flex items-center">
                    <IoIdCardOutline className="mr-2 text-base" /> ID: #USER-1234
                  </span>
                  <span className="flex items-center font-semibold text-custom-orange">
                    <IoAlertCircleOutline className="mr-1 text-base" /> Cần tình nguyện viên
                  </span>
                  <span className="flex items-center">
                    <IoCalendarOutline className="mr-2 text-base" /> Tham gia: 12/10/2023
                  </span>
                  <span className="flex items-center">
                    <IoLocationOutline className="mr-2 text-base" /> TP.HCM
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 w-full lg:w-auto">
              <Button className="flex-1 lg:flex-none bg-custom-teal hover:bg-custom-teal/90 text-white font-semibold px-8 shadow-none">
                Lưu
              </Button>
              <Button variant="outline" className="flex-1 lg:flex-none text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700 px-8">
                Hủy
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* END: User Profile Card */}

      {/* BEGIN: Information Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Personal Info Card */}
        {/* THÊM bg-white VÀO ĐÂY */}
        <Card className="bg-white custom-card border-none lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-custom-text-dark">
              <IoPersonCircleOutline className="mr-2 text-custom-teal text-2xl" />
              Thông tin cá nhân
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start">
              <IoMailOutline className="text-custom-teal mt-1 mr-4 text-xl flex-shrink-0" />
              <div>
                <p className="text-sm text-custom-text-light">Email</p>
                <p className="font-medium text-custom-text-dark">nguyenvana@example.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <IoCallOutline className="text-custom-teal mt-1 mr-4 text-xl flex-shrink-0" />
              <div>
                <p className="text-sm text-custom-text-light">Số điện thoại</p>
                <p className="font-medium text-custom-text-dark">0909 123 456</p>
              </div>
            </div>
            <div className="flex items-start">
              <IoHomeOutline className="text-custom-teal mt-1 mr-4 text-xl flex-shrink-0" />
              <div>
                <p className="text-sm text-custom-text-light">Địa chỉ</p>
                <p className="font-medium text-custom-text-dark">123 Đường ABC, Phường Đa Kao, Quận 1, TP.HCM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guardian Info Card */}
        {/* THÊM bg-white VÀO ĐÂY */}
        <Card className="bg-white custom-card border-none">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-semibold text-custom-text-dark">
              <IoPeopleCircleOutline className="mr-2 text-custom-teal text-2xl" />
              Người bảo hộ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start">
              <IoPersonOutline className="text-custom-teal mt-1 mr-4 text-xl flex-shrink-0" />
              <div>
                <p className="text-sm text-custom-text-light">Họ và tên</p>
                <p className="font-medium text-custom-text-dark">Trần Thị B</p>
              </div>
            </div>
            <div className="flex items-start">
              <IoCallOutline className="text-custom-teal mt-1 mr-4 text-xl flex-shrink-0" />
              <div>
                <p className="text-sm text-custom-text-light">Số điện thoại liên hệ</p>
                <p className="font-medium text-custom-text-dark">0918 765 432</p>
              </div>
            </div>
            <div className="flex items-start">
              <IoGitNetworkOutline className="text-custom-teal mt-1 mr-4 text-xl flex-shrink-0" />
              <div>
                <p className="text-sm text-custom-text-light">Mối quan hệ</p>
                <p className="font-medium text-custom-text-dark">Con gái</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* END: Information Grid */}

      {/* BEGIN: Support Needs Card */}
      {/* THÊM bg-white VÀO ĐÂY */}
      <Card className="bg-white custom-card border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center text-lg font-semibold text-custom-text-dark">
            <IoPulseOutline className="mr-2 text-custom-teal text-2xl" />
            Nhu cầu cần hỗ trợ
          </CardTitle>
          <Button variant="link" className="text-custom-teal h-auto p-0 hover:no-underline hover:text-custom-teal/80">
            Thêm nhu cầu
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="bg-custom-teal-light text-custom-text-dark hover:bg-custom-teal-light/80 px-3 py-1.5 font-normal text-sm gap-2">
              <IoMedkitOutline /> Y tế
            </Badge>
            <Badge variant="secondary" className="bg-custom-teal-light text-custom-text-dark hover:bg-custom-teal-light/80 px-3 py-1.5 font-normal text-sm gap-2">
              <IoCartOutline /> Đi chợ / Mua sắm
            </Badge>
            <Badge variant="secondary" className="bg-custom-teal-light text-custom-text-dark hover:bg-custom-teal-light/80 px-3 py-1.5 font-normal text-sm gap-2">
              <IoWalkOutline /> Chăm sóc người già
            </Badge>
            <Badge variant="secondary" className="bg-custom-teal-light text-custom-text-dark hover:bg-custom-teal-light/80 px-3 py-1.5 font-normal text-sm gap-2">
              <IoTrashOutline /> Dọn dẹp nhà cửa
            </Badge>
          </div>
        </CardContent>
      </Card>
      {/* END: Support Needs Card */}

      {/* BEGIN: Recent Notes Card */}
      {/* THÊM bg-white VÀO ĐÂY */}
      <Card className="bg-white custom-card border-none">
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-semibold text-custom-text-dark">
            <IoDocumentAttachOutline className="mr-2 text-custom-teal text-2xl" />
            Ghi chú gần đây
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex justify-between items-center pb-3 border-b border-custom-gray-border last:border-b-0 last:pb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                  <IoFolderOutline className="text-blue-500" />
                </div>
                <p className="font-medium text-custom-text-dark">Cập nhật hồ sơ y tế</p>
              </div>
              <span className="text-sm text-custom-text-light">2 giờ trước</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      {/* END: Recent Notes Card */}
    </div>
  );
}