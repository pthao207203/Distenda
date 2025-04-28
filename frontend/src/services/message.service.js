// [GET] Lấy danh sách giảng viên từ các khóa học đã đăng ký
export const fetchInstructors = async (userToken) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/message/instructors`, {
      method: 'GET',
      headers: {
        Authorization: userToken,
      },
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Lỗi khi lấy instructors');

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// [GET] Lấy tin nhắn giữa học viên và giảng viên
export const getMessages = async (instructorId, token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/message/messages?instructorId=${instructorId}`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Lỗi khi lấy messages');

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// [POST] Gửi tin nhắn
export const createMessage = async (messageData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/message/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(messageData),
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Lỗi khi gửi message');

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// [PUT] Đánh dấu tin nhắn đã đọc
export const markMessageAsRead = async (messageId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/message/messages/${messageId}/read`, {
      method: 'PUT',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Lỗi khi đánh dấu đã đọc');

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const markAllMessagesFromInstructorAsRead = async (instructorId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/message/messages/${instructorId}/read-all`, {
      method: 'PUT',
      credentials: 'include',
    });
    if (!response.ok) throw new Error('Lỗi khi đánh dấu đã đọc toàn bộ');
    return await response.json();
  } catch (error) {
    throw error;
  }
};
