// Cấu hình KHÔNG phụ thuộc ngôn ngữ: giá, ảnh, liên hệ, điểm đón/trả. Chữ hiển thị nằm trong src/i18n/*.ts.
// Các giá trị đánh dấu TODO là GIÁ TRỊ TẠM, phải xác nhận với chủ trước khi cho chạy thật.

// Ảnh tạm lấy từ Unsplash (được phép dùng trực tiếp). Muốn thay: đổi link ở đây,
// hoặc bỏ file vào /public/images và dùng '/images/ten-file.jpg'.
const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;

export const images = {
	heroMobile: '/images/hero-mobile.jpg', // bản cắt riêng cho điện thoại (người + cửa xe)
	hero: '/images/hero.jpg', // ảnh banner (tạo bằng AI, tạm); TODO: thay bằng ảnh chụp thật khi có. Bên trái được phủ trắng
	about: u('1519046904884-53103b34b206', 1920), // TODO: ảnh thật cho trang giới thiệu
	mission: u('1436491865332-7a61a109cc05', 1200), // TODO
	cta: u('1507525428034-b723cf961d3e', 1800),
};

export const site = {
	brand: 'Origo',
	logo: '/logo.png', // 720x322, nền trong suốt
	ogImage: '/og-image.png', // 1200x630, dùng chung cho mọi ngôn ngữ

	// TODO: link Apps Script web app (xem apps-script/README.md). Để trống = form chạy chế độ demo, chưa gửi đi đâu.
	formEndpoint: 'https://script.google.com/macros/s/AKfycbxmvJRcGbiHd9MSKfyGIRDCIR3N4vp_KvgGciny-aSlW5pltRI6ykctX5nskrmqOHY/exec',

	// TODO: liên hệ thật
	contact: {
		hotline: '',
		whatsapp: '',
		telegram: '',
		kakao: '',
		zalo: '',
		email: '',
		address: '',
	},
};

// Giá vé "chỉ từ", tính theo người, mỗi chiều (VND). Hiển thị nổi bật ở mọi nơi qua hàm hl() trong src/i18n/index.ts.
export const ticketPrice = 80000;

// Một tuyến, hai chiều. Chiều đầu tiên là mặc định.
// Hiện chỉ bán một chiều: sân bay Cam Ranh → Nha Trang. Muốn mở lại chiều ngược lại: thêm { id: 'nha-trang-to-cxr' } và các dòng chữ tương ứng trong i18n.
export const routes = [{ id: 'cxr-to-nha-trang' }] as const;
export type RouteId = (typeof routes)[number]['id'];

// Điểm đón/trả trong Nha Trang. Tên, địa chỉ, mô tả nằm trong stopInfo của từng file i18n (theo id).
// beachKm = cách biển Nha Trang (đường Trần Phú), centerKm = cách trung tâm Nha Trang. null = chưa có số, không hiện dòng đó.
// map = chuỗi tìm trên Google Maps. ready = false: thẻ vẫn hiện (để thấy chỗ trống) nhưng không có trong form đặt vé.
export const stops = [
	{ id: 'tran-nhat-duat', beachKm: 1.5 as number | null, centerKm: 2 as number | null, image: u('1519046904884-53103b34b206', 800), map: '70 Trần Nhật Duật, Nha Trang', ready: true }, // TODO: ảnh thật
	{ id: 'vanh-dai', beachKm: 5 as number | null, centerKm: 3 as number | null, image: u('1507525428034-b723cf961d3e', 800), map: 'Đường Vành Đai, Nha Trang', ready: true }, // TODO: ảnh thật, số nhà / vị trí cụ thể
	{ id: 'stop-3', beachKm: null as number | null, centerKm: null as number | null, image: u('1570125909232-eb263c188f7e', 800), map: '', ready: false }, // TODO: điểm thứ 3 chưa có thông tin
];
export type StopId = (typeof stops)[number]['id'];
