export const exerciseCheckService = async (code, ExerSlug, language) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/exercise/check/${ExerSlug}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code,
        language: language
      }),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error('Đã có lỗi xảy ra');
    }
    // console.log(response);

    const responseData = await response.json();
    console.log(responseData);

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};

export const exerciseSubmitService = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/exercise/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error('Đã có lỗi xảy ra');
    }
    // console.log(response);

    const responseData = await response.json();
    console.log(responseData);

    return responseData; // Trả về kết quả nếu thành công
  } catch (error) {
    throw error.message; // Quăng lỗi để controller xử lý
  }
};