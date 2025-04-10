// [GET] /
export const vouchersService = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher`, {
            method: 'GET',
            credentials: 'include',
        });
        console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher`);

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

export const voucherCreateService = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/create`, {
            method: 'GET',
            credentials: 'include',
        });
        console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher`);

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

export const voucherCreatePostService = async (data) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/create`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });

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

export const voucherUpdateService = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/edit/${id}`, {
            method: 'GET',
            credentials: 'include',
        });
        console.log(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher`);

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

export const voucherUpdatePostService = async (id, data) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/edit/${id}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        });

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

export const voucherDeleteService = async (id, data) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/admin/voucher/delete/${id}`, {
            method: "DELETE",
            credentials: 'include',
        });

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
