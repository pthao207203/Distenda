
export const rolesService = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/role/permission`, {
      method: 'GET',
      credentials: 'include',
    });
    // console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/role/permission`)

    // console.log("response => ", response.text());

    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }

    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return responseData; // Trả về dữ liệu
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};


export const rolesDeleteService = async (selectedRoles) => {
  try {
    selectedRoles.map(async (role) => {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/role/delete/${role}`, {
        method: "DELETE",
        credentials: 'include',
      });
      console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/role/permission/${role}`)
      // console.log("response => ", response.text());
      if (!response.ok) {
        throw new Error('Lỗi!!!');
      }
      const responseData = await response.json();
      console.log("responseData => ", responseData);
    })
    return;
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

export const rolesCreateService = async (RoleName) => {
  try {
    console.log(RoleName)
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/role/create`, {
      method: "POST",
      body: JSON.stringify({ RoleName }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
    });
    console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/role/create`)
    // console.log("response => ", response.text());
    if (!response.ok) {
      throw new Error('Lỗi!!!');
    }
    const responseData = await response.json();
    console.log("responseData => ", responseData);

    return;
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};

export const rolesUpdateService = async (permissions) => {
  try {
    permissions.map(async (role) => {
      console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/role/edit/${role.id}`)
      // console.log(role)
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/role/edit/${role.id}`, {
        method: "POST",
        body: JSON.stringify({ role }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
      });
      // console.log("response => ", response.text());
      if (!response.ok) {
        throw new Error('Lỗi!!!');
      }
      const responseData = await response.json();
      console.log("responseData => ", responseData);
    })
  } catch (error) {
    throw new Error(error); // Thông báo lỗi
  }
};