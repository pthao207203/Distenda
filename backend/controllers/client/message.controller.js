const Message = require('../../models/message.model');
const User = require('../../models/user.model');
const Course = require('../../models/course.model');
const Admin = require('../../models/admin.model');

// [GET] Lấy danh sách giảng viên từ các khóa học đã đăng ký
exports.getInstructorsByUserToken = async (req, res) => {
  try {
    const userId = res.locals.user._id;
    const user = await User.findById(userId);
    if (!user || !user.UserCourse || user.UserCourse.length === 0) {
      return res.status(200).json({ instructors: [] });
    }
    const courseIds = user.UserCourse.map(course => course.CourseId);
    const courses = await Course.find({ _id: { $in: courseIds } });
    const instructorMap = new Map();
    courses.forEach(course => {
      const rawInstructorId = course.CourseInstructor || course.CourseIntructor;

    if (!rawInstructorId) return;
      const instructorId = rawInstructorId.toString();
      const courseName = course.CourseName || 'Không tên';

    if (!instructorMap.has(instructorId)) {
        instructorMap.set(instructorId, []);
      }
      instructorMap.get(instructorId).push(courseName);
    });
    const instructorIds = [...instructorMap.keys()];
    const instructors = await Admin.find({ _id: { $in: instructorIds }, AdminDeleted: 1, AdminStatus: 1 }).select('AdminFullName AdminAvatar');
    const result = instructors.map(instructor => ({
      instructorId: instructor._id,
      instructorName: instructor.AdminFullName,
      instructorAvatar: instructor.AdminAvatar,
      coursesTaughtToUser: instructorMap.get(instructor._id.toString())
    }));

    return res.status(200).json({ instructors: result });

  } catch (error) {
    console.error('🔥 getInstructorsByUserToken error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// [POST] Gửi tin nhắn (người dùng)
exports.createMessage = async (req, res) => {
  const senderId = res.locals.user._id;
  const senderRole = 'user';
  const { receiverId, receiverRole, content, image, file } = req.body;

  console.log('📩 Nhận message:', req.body);

  // Kiểm tra xem ít nhất một trong hai trường (content hoặc image) phải có dữ liệu
  const isContentEmpty = !content || !content.trim();
  const isImageEmpty = !image;
  const isFileEmpty = !file || !file.fileUrl;

  if (isContentEmpty && isImageEmpty && isFileEmpty) {
    return res.status(400).json({ success: false, message: 'Cần ít nhất một nội dung, ảnh hoặc file để gửi tin nhắn' });
  }

  if (receiverRole === 'user') {
    return res.status(400).json({ success: false, message: 'Không được gửi cho người cùng vai trò' });
  }

  try {
    const message = await Message.create({
      sender: { userId: senderId, senderRole },
      receiver: { userId: receiverId, receiverRole },
      content: content || null,  // Nếu content rỗng, để là null
      image: image || null,  // Nếu image rỗng, để là null
      file: isFileEmpty ? undefined : file, 
      isRead: false
    });
    console.log('📩 Đang tạo message:', req.body);

    // No need for message.save() as create() already saves the document
    res.status(201).json({ success: true, data: message });
  } catch (error) {
    console.error('🔥 createMessage error:', error);
    res.status(500).json({ success: false, message: 'Lỗi server', error });
  }
};

// [GET] Lấy tin nhắn giữa user và giảng viên
exports.getMessages = async (req, res) => {
  const userId = res.locals.user._id;
  const { instructorId } = req.query;

  try {
    const messages = await Message.find({
      $or: [
        { 'sender.userId': userId, 'receiver.userId': instructorId },
        { 'sender.userId': instructorId, 'receiver.userId': userId }
      ]
    }).sort({ createdAt: 1 });

    // io.emit('receive_message', newMessage); 

    res.json({ success: true, data: messages });
  } catch (error) {
    console.error('🔥 getMessages error:', error);
    res.status(500).json({ success: false, message: 'Lỗi server', error });
  }
};

// [PUT] Đánh dấu tin nhắn đã đọc
exports.markAsRead = async (req, res) => {
  const userId = res.locals.user._id;
  const { instructorId } = req.params;
  
  try {
    await Message.updateMany({
      'sender.userId': instructorId,
      'receiver.userId': userId,
      isRead: false
    }, { isRead: true });

    // io.emit('message_read', { userId, instructorId });

    res.json({ success: true, message: 'Đã đánh dấu toàn bộ là đã đọc' });
  } catch (error) {
    console.error('🔥 markMessagesFromInstructorAsRead error:', error);
    res.status(500).json({ success: false, message: 'Không thể cập nhật', error });
  }
};
