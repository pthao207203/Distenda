// [GET] /
export const categoryService = async (categorySlug) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/category/${categorySlug}`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`url: ${process.env.REACT_APP_API_BASE_URL}/category/${categorySlug}`)

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

export const categoriesService = async (categorySlug) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/category`, {
      method: 'GET',
      credentials: 'include',
    });
    console.log(`url: ${process.env.REACT_APP_API_BASE_URL}/category`)

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

export const categoryCreatePostService = async (categoryName, categoryParent_id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/category/create`, {
      method: "POST",
      body: JSON.stringify({ CategoryName: categoryName, categoryParent_id: categoryParent_id }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("response", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    console.log("error", error)
    throw new Error(error); // Thông báo lỗi
  }
};