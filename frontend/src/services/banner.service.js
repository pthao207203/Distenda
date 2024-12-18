// [GET] /
export const bannerService = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/banner`, {
        method: 'GET',
        credentials: 'include',
      });
    //   console.log(`${process.env.REACT_APP_API_BASE_URL}/banner`)
  
      // console.log("response => ", response.text());
  
      if (!response.ok) {
        throw new Error('Lỗi!!!');
      }
  
      const responseData = await response.json();
      // console.log("responseData => ", responseData);
  
      return responseData; // Trả về dữ liệu
    } catch (error) {
      throw new Error(error); // Thông báo lỗi
    }
  };