const Message = require('../../models/message.model');
const Admin = require('../../models/admin.model');
const User = require('../../models/user.model');


// [GET] Lấy danh sách người dùng đã nhắn tin với Admin
exports.getUsersThatSentMessages = async (req, res) => {
  const adminId = res.locals.user._id; // Lấy Admin ID từ token hoặc session

  try {
    // Lấy danh sách tất cả người dùng đã nhắn tin với Admin
    const userIds = await Message.distinct('sender.userId', {
      'receiver.userId': adminId,  // Điều kiện người nhận là Admin
    });

   

    // Lấy chi tiết thông tin người dùng từ bảng User
    const userDetails = await User.find({
      _id: { $in: userIds },
    }).select('UserFullName UserAvatar');  // Chọn các trường cần thiết


    return res.status(200).json({ success: true, users: userDetails });
  } catch (error) {
    console.error('❌ Lỗi khi lấy danh sách người dùng đã nhắn tin:', error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
};
// [GET] Lấy tin nhắn giữa Admin và người dùng
exports.getMessages = async (req, res) => {
  const adminId = res.locals.user._id; // ID của Admin
  const { userId } = req.query; // Lấy ID của người dùng từ query param

  try {
    // Lấy tất cả tin nhắn giữa Admin và người dùng
    const messages = await Message.find({
      $or: [
        { 'sender.userId': adminId, 'receiver.userId': userId },
        { 'sender.userId': userId, 'receiver.userId': adminId },
      ],
    }).sort({ createdAt: 1 });

    return res.json({ success: true, data: messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return res.status(500).json({ success: false, message: 'Lỗi server', error });
  }
};

// [POST] Gửi tin nhắn từ admin đến học viên
exports.createMessage = async (req, res) => {
  const senderId = res.locals.user._id;
  const senderRole = 'admin';
  const { receiverId, receiverRole, content, image, file } = req.body;


  const isContentEmpty = !content || !content.trim();
  const isImageEmpty = !image;
  const isFileEmpty = !file || !file.fileUrl;

  if (isContentEmpty && isImageEmpty && isFileEmpty) {
    return res.status(400).json({ success: false, message: 'Cần ít nhất một nội dung, ảnh hoặc file để gửi tin nhắn' });
  }

  if (receiverRole === 'admin') {
    return res.status(400).json({ success: false, message: 'Không được gửi cho người cùng vai trò' });
  }

  try {
    const message = await Message.create({
      sender: { userId: senderId, senderRole },
      receiver: { userId: receiverId, receiverRole: 'user' },
      content: content || null,  // Nếu content rỗng, để là null
      image: image || null,  
      file: isFileEmpty ? undefined : file, 
      isRead: false,
    });

    return res.status(201).json({ success: true, data: message });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ success: false, message: 'Lỗi server', error });
  }
};

// [PUT] Đánh dấu tin nhắn đã đọc (admin)
exports.markAsRead = async (req, res) => {
  const adminId = res.locals.user._id; // ID của Admin
  const { userId } = req.params; // ID của người dùng
  

  try {
    // Cập nhật trạng thái tin nhắn từ người dùng là đã đọc
    await Message.updateMany(
      { 'sender.userId': userId, 
        'receiver.userId': adminId, isRead: false },
      { isRead: true }
    );

    return res.json({ success: true, message: 'Đã đánh dấu tất cả tin nhắn là đã đọc' });
  } catch (error) {
    console.error('Error marking messages as read:', error);
    return res.status(500).json({ success: false, message: 'Không thể cập nhật', error });
  }
};
