import { vouchersService, voucherCreateService, voucherCreatePostService, voucherUpdateService, voucherUpdatePostService, voucherDeleteService } from '../services/voucher.service';

export async function vouchersController(setLoading) {
    try {
        setLoading(true); // Đang tải
        const result = await vouchersService(); // Gọi API
        // console.log("result admin ", result);
        setLoading(false); // Tải xong
        return result;
    } catch (err) {
        console.error(err); // Ghi log lỗi
        setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
    }
}

export async function voucherCreateController(setLoading) {
    try {
        setLoading(true); // Đang tải
        const result = await voucherCreateService(); // Gọi API
        // console.log("result admin ", result);
        setLoading(false); // Tải xong
        return result;
    } catch (err) {
        console.error(err); // Ghi log lỗi
        setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
    }
}

export async function voucherCreatePostController(data) {
    try {
        const result = await voucherCreatePostService(data); // Gọi API
        // console.log("result admin ", result);
        return result;
    } catch (err) {
        console.error(err); // Ghi log lỗi
    }
}
export async function voucherUpdateController(setLoading, id) {
    try {
        setLoading(true); // Đang tải
        const result = await voucherUpdateService(id); // Gọi API
        // console.log("result admin ", result);
        setLoading(false); // Tải xong
        return result;
    } catch (err) {
        console.error(err); // Ghi log lỗi
        setLoading(false); // Tắt trạng thái tải ngay cả khi lỗi
    }
}

export async function voucherUpdatePostController(id, data) {
    try {
        const result = await voucherUpdatePostService(id, data); // Gọi API
        // console.log("result admin ", result);
        return result;
    } catch (err) {
        console.error(err); // Ghi log lỗi
    }
}

export async function voucherDeleteController(id, data) {
    try {
        const result = await voucherDeleteService(id, data); // Gọi API
        // console.log("result admin ", result);
        return result;
    } catch (err) {
        console.error(err); // Ghi log lỗi
    }
}
