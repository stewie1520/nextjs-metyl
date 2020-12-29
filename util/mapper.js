export default function (status) {
    switch (status) {
        case 0:
            return 'Ẩn';
        case 1:
            return 'Hết hàng';
        case 2:
            return 'Đang bán';
        case 3:
            return 'Ngừng kinh doanh';
        default:
            return 'Đang bán';
    }
}
