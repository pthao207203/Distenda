import { getNotificationsByUser, addNotification } from '../services/notification.service';

export async function notificationListController(setLoading, userToken) {
  try {
    setLoading(true);
    const result = await getNotificationsByUser(userToken); // Sử dụng userToken thay vì userId
    setLoading(false);
    return result;
  } catch (err) {
    console.error(err);
    setLoading(false);
    return [];
  }
}

export async function notificationAddController(setLoading, message, type, userToken) {
  try {
    setLoading(true);
    const result = await addNotification({ message, type, userToken }); // Sử dụng userToken thay vì userId
    setLoading(false);
    return result;
  } catch (err) {
    console.error(err);
    setLoading(false);
  }
}
