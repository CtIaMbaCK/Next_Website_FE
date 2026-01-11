// src/data/mockData.ts
export interface User {
  id: string; // Hoặc string nếu bạn đã đổi sang UUID
  fullName: string;
  status: 'ACTIVE' | 'PENDING' | 'DENIED' | 'BANNED';
  role: 'VOLUNTEER' | 'BFICIARY'
  createdAt: string;
}

export const MOCK_DATA: User[] = [
  { id: 'uuid-1', fullName: 'Nguyễn Văn A', status: 'PENDING', role: 'VOLUNTEER', createdAt: '2023-10-15' },
  { id: 'uuid-2', fullName: 'Trần Thị B', status: 'PENDING', role: 'BFICIARY', createdAt: '2023-10-20' },
  { id: 'uuid-3', fullName: 'Lê Văn C', status: 'PENDING', role: 'VOLUNTEER', createdAt: '2023-10-22' },
  { id: 'uuid-4', fullName: 'Phạm Thị D', status: 'PENDING', role: 'VOLUNTEER', createdAt: '2023-10-25' },
  { id: 'uuid-5', fullName: 'Hoàng Văn E', status: 'PENDING', role: 'VOLUNTEER', createdAt: '2023-10-28' },
];
