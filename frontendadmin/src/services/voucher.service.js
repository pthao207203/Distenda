// [GET] /
export const vouchersService = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher`, {
            method: 'GET',
            credentials: 'include',
        });
        const responseData = await response.json();
        console.log("responseData => ", responseData);
        return responseData;
    } catch (error) {
        console.error(error);
    }
  };
  

// Tạo mới voucher (sử dụng POST)
export const voucherCreateService = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/create`, {
            method: 'GET',  // Nếu chỉ lấy form tạo, để GET cũng ổn
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Lỗi khi tải form tạo voucher!');
        }

        const responseData = await response.json();
        console.log("responseData => ", responseData);
        return responseData;
    } catch (error) {
        console.error(error);
        throw new Error('Có lỗi khi gọi API tạo voucher!');
    }
};

// Tạo voucher qua POST
export const voucherCreatePostService = async (data) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/create`, {
            method: 'POST',  // POST để gửi dữ liệu
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Lỗi khi tạo voucher!');
        }

        const responseData = await response.json();
        console.log("responseData => ", responseData);
        return responseData;
    } catch (error) {
        console.error(error);
        throw new Error('Có lỗi khi gửi dữ liệu tạo voucher!');
    }
};

// Cập nhật voucher (sử dụng POST hoặc PUT)
export const voucherUpdateService = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/edit/${id}`, {
            method: 'GET',  // GET để lấy thông tin voucher cần cập nhật
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Lỗi khi lấy thông tin voucher!');
        }

        const responseData = await response.json();
        console.log("responseData => ", responseData);
        return responseData;
    } catch (error) {
        console.error(error);
        throw new Error('Có lỗi khi gọi API cập nhật voucher!');
    }
};

// Cập nhật voucher qua POST
export const voucherUpdatePostService = async (id, data) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/edit/${id}`, {
            method: 'POST',  // POST để gửi dữ liệu cập nhật
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Lỗi khi cập nhật voucher!');
        }

        const responseData = await response.json();
        console.log("responseData => ", responseData);
        return responseData;
    } catch (error) {
        console.error(error);
        throw new Error('Có lỗi khi gửi dữ liệu cập nhật voucher!');
    }
};

// Xóa voucher (sử dụng DELETE)
export const voucherDeleteService = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/delete/${id}`, {
            method: 'DELETE',  // DELETE để xóa voucher
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Lỗi khi xóa voucher!');
        }

        const responseData = await response.json();
        console.log("responseData => ", responseData);
        return responseData;
    } catch (error) {
        console.error(error);
        throw new Error('Có lỗi khi gửi yêu cầu xóa voucher!');
    }
};
