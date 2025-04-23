import { exerciseCheckService, exerciseSubmitService } from '../services/exercise.service';

// [POST] /exercise/check
export const exerciseCheckController = async (code, ExerSlug, language) => {
  try {
    const result = await exerciseCheckService(code, ExerSlug, language); // Gọi service để xử lý API
    return result;
  } catch (err) {
    console.log(err); // Cập nhật lỗi nếu xảy ra
  }
};

// [POST] /exercise/submit
export const exerciseSubmitController = async (ExerciseSlug) => {
  try {
    const result = await exerciseSubmitService(ExerciseSlug); // Gọi service để xử lý API
    return result;
  } catch (err) {
    console.log(err); // Cập nhật lỗi nếu xảy ra
  }
};