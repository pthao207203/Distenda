import {
    fetchUsers,
    getMessages,
    createMessage,
    markMessageAsRead,
    markAllMessagesFromUserAsRead
  } from '../services/message.service';
  
  // [GET] Lấy danh sách học viên đã nhắn tin với admin
export const loadUsersMessagedAdmin = async (userToken, setUsers) => {
  try {
    const res = await fetchUsers(userToken);
    setUsers(res.users || []);
  } catch (err) {
    console.error("Lỗi khi lấy danh sách học viên đã nhắn tin:", err);
  }
};

// [GET] Lấy tin nhắn giữa admin và học viên
export const loadMessagesWithUser = async (userId, token) => {
  try {
    const res = await getMessages(userId, token);
    return res; // ✅ Trả kết quả về cho FE
  } catch (err) {
    console.error("Lỗi khi lấy tin nhắn:", err);
    return { success: false, data: [] }; // ✅ Tránh undefined
  }
};

// [POST] Gửi tin nhắn từ admin đến học viên
export const sendMessageFromAdmin = async (messageData, callback) => {
  try {
    const res = await createMessage(messageData);
    if (callback) callback(res.data); // ✅ Gửi tin nhắn mới tạo về FE
  } catch (err) {
    console.error("Lỗi khi gửi tin nhắn từ admin:", err);
  }
};

// [PUT] Đánh dấu toàn bộ tin nhắn từ học viên là đã đọc
export const updateMessageStatus = async (userId) => {
  try {
    await markAllMessagesFromUserAsRead(userId);
  } catch (err) {
    console.error("❌ Lỗi khi đánh dấu tin nhắn đã đọc:", err);
  }
};


  