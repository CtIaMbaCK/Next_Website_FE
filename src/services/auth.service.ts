import apiClient from './api';

// ============ TYPES ============

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token?: string;
  user: {
    id: string;
    email: string;
    fullName: string;
    role: string;
  };
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
  phone?: string;
}

// ============ AUTH API FUNCTIONS ============

/**
 * Đăng nhập
 * TODO: Thay đổi endpoint '/auth/login' thành endpoint thực tế của backend
 */
export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post('/auth/login', credentials);

  // Lưu token vào localStorage
  if (response.data.access_token) {
    localStorage.setItem('access_token', response.data.access_token);
  }
  if (response.data.refresh_token) {
    localStorage.setItem('refresh_token', response.data.refresh_token);
  }

  return response.data;
};

/**
 * Đăng xuất
 * TODO: Thay đổi endpoint '/auth/logout' nếu backend có endpoint logout
 */
export const logout = async (): Promise<void> => {
  try {
    // Gọi API logout (nếu backend có)
    await apiClient.post('/auth/logout');
  } catch (error) {
    console.error('Lỗi khi đăng xuất:', error);
  } finally {
    // Xóa token khỏi localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
};

/**
 * Đăng ký tài khoản mới
 * TODO: Thay đổi endpoint '/auth/register' thành endpoint thực tế của backend
 */
export const register = async (data: RegisterRequest): Promise<LoginResponse> => {
  const response = await apiClient.post('/auth/register', data);

  // Tự động lưu token sau khi đăng ký (nếu backend trả về token)
  if (response.data.access_token) {
    localStorage.setItem('access_token', response.data.access_token);
  }

  return response.data;
};

/**
 * Lấy thông tin user hiện tại
 * TODO: Thay đổi endpoint '/auth/me' thành endpoint thực tế của backend
 */
export const getCurrentUser = async () => {
  const response = await apiClient.get('/auth/me');
  return response.data;
};

/**
 * Refresh token
 * TODO: Thay đổi endpoint '/auth/refresh' thành endpoint thực tế của backend
 */
export const refreshToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem('refresh_token');

  if (!refreshToken) {
    throw new Error('Không có refresh token');
  }

  const response = await apiClient.post('/auth/refresh', { refresh_token: refreshToken });

  // Lưu token mới
  if (response.data.access_token) {
    localStorage.setItem('access_token', response.data.access_token);
  }

  return response.data.access_token;
};

/**
 * Kiểm tra xem user đã đăng nhập chưa
 */
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('access_token');
  return !!token;
};
