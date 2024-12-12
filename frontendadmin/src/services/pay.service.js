// [GET] /
export const payService = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/pay/`, {
        method: 'GET',
        credentials: 'include',
      });
      console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/pay/`)
  
      if (!response.ok) {
        throw new Error('Lỗi!!!');
      }
  
      const responseData = await response.json();
      // console.log("response", responseData);
  
      return responseData; // Trả về dữ liệu
    } catch (error) {
      throw new Error(error); // Thông báo lỗi
    }
  };

// [GET] /
export const payDetailService = async (_id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/pay/detail/${_id}`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/pay/detail/${_id}`)

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    // console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};
  