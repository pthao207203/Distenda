// [GET] Lấy danh sách học viên đã nhắn tin với admin
export const fetchUsers = async (userToken) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/message/students`, {
      method: 'GET',
      headers: {
        Authorization: userToken,
      },
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Lỗi khi lấy danh sách người dùng đã nhắn tin');

    return await response.json(); // Chắc chắn rằng bạn trả về dữ liệu từ response
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// [GET] Lấy tin nhắn giữa admin và học viên
export const getMessages = async (userId, token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/message/messages?userId=${userId}`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Lỗi khi lấy tin nhắn');

    return await response.json(); // Trả về dữ liệu JSON
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// [POST] Gửi tin nhắn từ admin đến học viên
export const createMessage = async (messageData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/message/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Lỗi khi gửi tin nhắn');

    return await response.json(); // Trả về dữ liệu JSON khi gửi tin nhắn thành công
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// [PUT] Đánh dấu tất cả tin nhắn từ học viên là đã đọc
export const markMessageAsRead = async (messageId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/message/messages/${messageId}/read`, {
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
export const markAllMessagesFromUserAsRead = async (userId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/message/messages/${userId}/read-all`, {
      method: 'PUT',
      credentials: 'include',
    });
    if (!response.ok) throw new Error('Lỗi khi đánh dấu đã đọc toàn bộ');
    return await response.json();
  } catch (error) {
    throw error;
  }
};