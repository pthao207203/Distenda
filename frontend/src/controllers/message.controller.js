import {
  fetchInstructors,
  getMessages,
  createMessage,
  markMessageAsRead,
  markAllMessagesFromInstructorAsRead,
} from '../services/message.service';

// Lấy danh sách giảng viên từ khóa học đã đăng ký
export const loadInstructors = async (userToken, setInstructors) => {
  try {
    const res = await fetchInstructors(userToken);
    setInstructors(res.instructors || []);
  } catch (err) {
    console.error("Lỗi khi lấy instructors:", err);
  }
};

// Lấy tin nhắn giữa học viên và giảng viên
export const loadMessages = async (instructorId, token) => {
  try {
    const res = await getMessages(instructorId, token);
    return res; // ✅ Quan trọng
  } catch (err) {
    console.error("Lỗi khi lấy messages:", err);
    return { success: false, data: [] }; // ✅ Tránh undefined
  }
};


// Gửi tin nhắn
export const sendMessage = async (messageData, callback) => {
  try {
    const res = await createMessage(messageData);
    if (callback) callback(res.data); // gửi lại tin nhắn đã tạo cho FE
  } catch (err) {
    console.error("Lỗi khi gửi message:", err);
  }
};

// Đánh dấu tin nhắn là đã đọc
export const updateMessageStatus = async (instructorId) => {
  try {
    await markAllMessagesFromInstructorAsRead(instructorId);
  } catch (error) {
    console.error('❌ Lỗi khi đánh dấu tin nhắn đã đọc:', error);
  }
};

