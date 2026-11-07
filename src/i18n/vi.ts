import { ticketPrice } from '../data/site';

// Bản tiếng Việt: NGÔN NGỮ GỐC. Các file en.ts, ru.ts phải có đúng cấu trúc này (kiểu Dict).
// Mọi chỗ có giá tiền (t.price, t.priceLong) được tự bôi đậm nổi bật bằng hàm hl() trong index.ts.
const money = (n: number) => n.toLocaleString('vi-VN') + 'đ';
const price = money(ticketPrice);
const priceLong = ticketPrice.toLocaleString('vi-VN') + ' VNĐ';

export const vi = {
	htmlLang: 'vi',
	locale: 'vi-VN',
	ogLocale: 'vi_VN',
	money,
	price,
	priceLong,
	brandLine: 'Vé xe giá rẻ',
	slogan: 'Giải pháp tiết kiệm cho chuyến đi của bạn',
	// Từ khóa theo trang (đưa vào meta keywords và JSON-LD). Từ khóa chính đứng đầu.
	meta: {
		home: {
			title: `Xe sân bay Cam Ranh – Nha Trang chỉ từ ${price} | Origo`,
			description: `Vé xe từ sân bay Cam Ranh về trung tâm Nha Trang chỉ từ ${price}/người. Hạ cánh là có xe trong 30 phút, biết trước tài xế và biển số, không mặc cả. Đặt vé 1 phút.`,
			keywords: ['xe sân bay Cam Ranh Nha Trang', 'vé xe sân bay Cam Ranh', 'xe từ sân bay Cam Ranh về Nha Trang', 'xe đưa đón sân bay Cam Ranh giá rẻ', 'xe Nha Trang đi sân bay Cam Ranh'],
		},
		about: {
			title: 'Giới thiệu Origo – Vé xe sân bay Cam Ranh giá rẻ',
			description: 'Origo mang đến cách đi từ sân bay Cam Ranh về trung tâm Nha Trang tiết kiệm, an toàn và nhanh chóng: giá rõ ràng, biết trước tài xế, có xe trong 30 phút.',
			keywords: ['Origo', 'vé xe sân bay Cam Ranh', 'xe sân bay Cam Ranh uy tín'],
		},
		blog: {
			title: 'Tin tức, dịch vụ và cẩm nang du lịch Nha Trang | Origo',
			description: 'Bản tin dịch vụ xe sân bay Cam Ranh – Nha Trang, cẩm nang du lịch và tin tức Nha Trang do Origo tổng hợp.',
			keywords: ['cẩm nang du lịch Nha Trang', 'tin tức Nha Trang', 'kinh nghiệm đi sân bay Cam Ranh'],
		},
	},
	nav: {
		home: 'Trang chủ',
		routes: 'Điểm đón trả',
		about: 'Giới thiệu',
		blog: 'Tin tức',
		faq: 'Hỏi đáp',
		book: 'Đặt vé',
		menu: 'Mở menu',
		close: 'Đóng menu',
		language: 'Ngôn ngữ',
	},
	hero: {
		kicker: 'Giải pháp tiết kiệm cho chuyến đi của bạn',
		title: 'Vé xe sân bay Cam Ranh – Trung tâm Nha Trang',
		priceFrom: 'Chỉ từ',
		priceUnit: '/ người',
		cta: 'Đặt vé ngay',
		chips: ['Hạ cánh là có xe trong 30 phút', 'Biết trước tài xế, biển số', 'Giá rõ ràng, không mặc cả'],
		imgAlt: 'Xe đưa khách từ sân bay Cam Ranh về trung tâm Nha Trang',
	},
	routeInfo: {
		'cxr-to-nha-trang': { from: 'Sân bay Cam Ranh', to: 'Nha Trang' },
		'nha-trang-to-cxr': { from: 'Nha Trang', to: 'Sân bay Cam Ranh' },
	} as Record<string, { from: string; to: string }>,
	routes: {
		eyebrow: 'Chọn chiều đi',
		title: 'Bạn đi chiều nào?',
		sub: 'Điểm đón trả cố định ngay trong trung tâm Nha Trang. Biết trước nơi lên xuống, không lo lạc, không lo chờ sai chỗ.',
		dropTitle: 'Điểm trả tại Nha Trang',
		pickTitle: 'Điểm đón tại Nha Trang',
		dropTag: 'Điểm trả',
		pickTag: 'Điểm đón',
		airportIn: 'Đón tại sân bay quốc tế Cam Ranh (CXR). Trước giờ đón 15 phút, nhân viên gửi bạn khu vực đón cụ thể.',
		airportOut: 'Trả khách tại sân bay quốc tế Cam Ranh (CXR), kịp giờ làm thủ tục.',
		distBeach: 'Cách biển Trần Phú',
		distCenter: 'Cách trung tâm',
		map: 'Xem bản đồ',
		book: 'Đặt vé điểm này',
	},
	// Id khớp với stops trong site.ts
	stopInfo: {
		'tran-nhat-duat': {
			name: '70 Trần Nhật Duật',
			address: 'Số 70 Trần Nhật Duật, Nha Trang',
			desc: 'Ngay gần trung tâm, chỉ khoảng 1,5 km ra biển Trần Phú. Tiện về các khách sạn khu phố biển.',
		},
		'vanh-dai': {
			name: 'Đường Vành Đai',
			address: 'Đường Vành Đai, Nha Trang', // TODO: số nhà / vị trí cụ thể
			desc: 'Nằm trên đường Vành Đai, cách trung tâm Nha Trang khoảng 3 km.',
		},
		'stop-3': {
			name: '[Điểm 3, cập nhật sau]', // TODO
			address: '[Địa chỉ, cập nhật sau]',
			desc: '[Mô tả ngắn, cập nhật sau]',
		},
	} as Record<string, { name: string; address: string; desc: string }>,
	mission: {
		eyebrow: 'Sứ mệnh Origo',
		title: 'Hạ cánh là có xe. Giá rẻ mà vẫn an tâm.',
		text: 'Sau một chuyến bay dài, bạn chỉ muốn về khách sạn thật nhanh với mức giá hợp lý. Origo ra đời vì điều đó: đặt vé trước trong một phút, nhân viên xác nhận tận tình, tên tài xế và biển số được gửi trước giờ đón. Không mặc cả, không lo taxi dù, không phải chờ lâu.',
		more: 'Xem thêm về Origo',
	},
	process: {
		eyebrow: 'Quy trình',
		title: 'Đặt vé 1 phút, phần còn lại Origo lo',
		sub: 'Có nhân viên đồng hành từ lúc bạn đặt vé đến khi bước xuống xe.',
		booking: {
			title: 'Khi đặt vé',
			steps: [
				{ title: 'Đặt vé online', text: 'Để lại tên, số điện thoại, ngày giờ và chiều đi. Chưa đến 1 phút.' },
				{ title: 'Nhân viên liên hệ tư vấn', text: 'Nhân viên Origo gọi hoặc nhắn tin cho bạn.' },
				{ title: 'Xác nhận thông tin', text: 'Chốt giờ đón, số người, điểm trả và các yêu cầu khác.' },
				{ title: 'Thanh toán và nhận mã vé', text: 'Thanh toán theo hướng dẫn, nhận mã vé ngay.' },
			],
		},
		pickup: {
			title: 'Khi đón',
			steps: [
				{ title: 'Nhận thông tin xe trước 15 phút', text: 'Nhân viên gửi tên tài xế, biển số xe và khu vực đón.' },
				{ title: 'Kiểm tra xe và tài xế', text: 'Đối chiếu tên tài xế, biển số rồi mới lên xe. An tâm tuyệt đối.' },
				{ title: 'Lên xe về điểm trả', text: 'Xe đưa bạn về điểm trả đã chọn trong trung tâm Nha Trang.' },
			],
		},
		cta: 'Liên hệ tư vấn',
	},
	why: {
		eyebrow: 'Vì sao chọn Origo',
		title: 'Rẻ hơn taxi, an tâm hơn tự bắt xe',
		sub: '4 cam kết Origo dành cho mỗi hành khách.',
		items: [
			{ icon: 'price', title: 'Giá rẻ, rõ ràng', text: `Chỉ từ ${price} mỗi người, rẻ hơn nhiều so với taxi truyền thống. Giá báo trước, không mặc cả.` },
			{ icon: 'fast', title: 'Hạ cánh là có xe', text: 'Xe chạy liên tục. Chắc chắn có xe trong vòng 30 phút kể từ khi máy bay hạ cánh.' },
			{ icon: 'trust', title: 'Minh bạch, uy tín', text: 'Tên tài xế, biển số gửi trước giờ đón. Origo là đơn vị trung gian xác nhận và đồng hành suốt chuyến.' },
			{ icon: 'pin', title: 'Điểm đón trả rõ ràng', text: 'Điểm cố định ngay trung tâm Nha Trang, có địa chỉ và bản đồ. Không lo lạc, không lo chờ sai chỗ.' },
		],
		cta: 'Đặt ngay',
	},
	form: {
		eyebrow: 'Đặt vé',
		title: 'Giữ chỗ ngay, nhân viên liên hệ tư vấn',
		sub: 'Chỉ vài thông tin cơ bản. Nhân viên Origo sẽ liên hệ để xác nhận giờ đón và điểm trả.',
		priceLine: 'Giá vé chỉ từ',
		priceUnit: 'mỗi người, mỗi chiều',
		route: 'Chiều đi',
		people: 'Số người',
		currency: 'VNĐ',
		estimate: 'Tạm tính',
		estimateMore: 'Báo giá khi liên hệ',
		peopleMore: '10 người trở lên',
		date: 'Ngày đi',
		time: 'Giờ đi',
		timeHintIn: 'Đi từ sân bay: nhập giờ máy bay hạ cánh.',
		timeHintOut: 'Đi ra sân bay: nhập giờ bạn muốn được đón.',
		name: 'Họ tên',
		namePh: 'Nguyễn Văn A',
		phone: 'Số điện thoại (Zalo)',
		phonePh: '0905 123 456',
		phoneErr: 'Số điện thoại chưa đúng.',
		honeypot: 'Để trống',
		submit: 'Gửi yêu cầu đặt vé',
		sending: 'Đang gửi...',
		ok: 'Đã nhận yêu cầu! Nhân viên Origo sẽ liên hệ với bạn sớm nhất.',
		codeLabel: 'Mã yêu cầu',
		demo: 'Chế độ demo: form chạy được nhưng chưa nối Google Sheet.',
		err: 'Chưa gửi được. Vui lòng thử lại hoặc liên hệ trực tiếp.',
		privacy: 'Thông tin chỉ dùng để liên hệ xác nhận chuyến đi của bạn.',
	},
	blog: {
		eyebrow: 'Tin tức',
		title: 'Tin tức và cẩm nang Nha Trang',
		sub: 'Cập nhật dịch vụ Origo, kinh nghiệm du lịch và tin tức Nha Trang.',
		cats: {
			service: 'Bản tin dịch vụ',
			guide: 'Cẩm nang du lịch Nha Trang',
			news: 'Tin tức Nha Trang',
		} as Record<string, string>,
		catDesc: {
			service: 'Thông báo, cập nhật và hướng dẫn sử dụng dịch vụ xe sân bay Cam Ranh – Nha Trang của Origo.',
			guide: 'Kinh nghiệm du lịch Nha Trang: di chuyển, lịch trình, ăn chơi và mẹo hay cho chuyến đi.',
			news: 'Tin tức, sự kiện mới tại Nha Trang hữu ích cho du khách.',
		} as Record<string, string>,
		readMore: 'Đọc tiếp',
		all: 'Xem tất cả bài viết',
		empty: 'Bài viết sẽ sớm ra mắt.',
		back: 'Tất cả bài viết',
		published: 'Đăng ngày',
		ctaTitle: `Về trung tâm Nha Trang chỉ từ ${price}`,
		ctaText: 'Đặt vé trước, hạ cánh là có xe trong 30 phút.',
		ctaBtn: 'Đặt vé ngay',
		related: 'Bài viết khác',
	},
	faq: {
		eyebrow: 'Hỏi đáp',
		title: 'Câu hỏi thường gặp',
		// TODO: các câu về thanh toán, hành lý, trẻ em, trễ chuyến, thời gian đi là tạm, chủ xác nhận
		items: [
			{ q: 'Giá vé xe sân bay Cam Ranh về Nha Trang là bao nhiêu?', a: `Chỉ từ ${price} mỗi người, mỗi chiều. Nhân viên xác nhận giá cuối cùng khi liên hệ với bạn.` },
			{ q: 'Sau khi hạ cánh bao lâu thì có xe?', a: 'Xe chạy liên tục. Bạn chắc chắn có xe trong vòng 30 phút kể từ khi máy bay hạ cánh.' },
			{ q: 'Từ sân bay Cam Ranh về trung tâm Nha Trang bao xa?', a: 'Khoảng 35 km. Thời gian đi tùy giao thông và điểm trả bạn chọn.' },
			{ q: 'Làm sao nhận ra xe và tài xế?', a: 'Trước giờ đón 15 phút, nhân viên gửi bạn tên tài xế, biển số xe và khu vực đón. Hãy đối chiếu trước khi lên xe.' },
			{ q: 'Thanh toán như thế nào?', a: 'Sau khi nhân viên xác nhận thông tin chuyến đi, bạn thanh toán theo hướng dẫn và nhận mã vé.' },
			{ q: 'Xe trả khách ở đâu tại Nha Trang?', a: 'Tại các điểm trả trong trung tâm Nha Trang, xem mục Điểm đón trả. Chiều ra sân bay, bạn lên xe tại các điểm này.' },
			{ q: 'Chuyến bay bị trễ thì sao?', a: 'Hãy nhắn cho nhân viên số hiệu chuyến bay và giờ hạ cánh mới, chúng tôi sẽ sắp xếp lại.' },
			{ q: 'Mang nhiều hành lý hoặc đi cùng trẻ em?', a: 'Hãy báo khi nhân viên liên hệ xác nhận, chúng tôi sẽ tư vấn phù hợp.' },
		],
	},
	about: {
		eyebrow: 'Về Origo',
		title: 'Giới thiệu về Origo',
		sub: 'Vé xe sân bay Cam Ranh – trung tâm Nha Trang giá tiết kiệm',
		intro: 'Origo là dịch vụ vé xe giữa sân bay quốc tế Cam Ranh và trung tâm Nha Trang. Chúng tôi giúp bạn về thành phố với chi phí hợp lý, thông tin minh bạch và có người đồng hành từ lúc đặt vé đến khi xuống xe.',
		highlights: [
			{ icon: 'price', title: 'Giá tiết kiệm', text: `Chỉ từ ${price} mỗi người.` },
			{ icon: 'trust', title: 'An toàn', text: 'Biết trước tài xế và biển số xe.' },
			{ icon: 'fast', title: 'Nhanh chóng', text: 'Có xe trong 30 phút sau khi hạ cánh.' },
			{ icon: 'pin', title: 'Rõ ràng', text: 'Điểm đón trả cố định, có bản đồ.' },
		],
		missionTitle: 'Sứ mệnh của chúng tôi',
		missionText: 'Cung cấp giải pháp di chuyển từ sân bay Cam Ranh về trung tâm Nha Trang với giá vé tiết kiệm, an toàn và nhanh chóng, để chặng đường đầu tiên của chuyến đi luôn nhẹ nhàng.',
		values: [
			{ title: 'Tiết kiệm', text: 'Giá vé rõ ràng ngay từ đầu, thấp hơn nhiều so với taxi truyền thống, không mặc cả.' },
			{ title: 'An toàn', text: 'Thông tin tài xế và xe được xác nhận, gửi trước. Origo hỗ trợ bạn suốt chuyến đi.' },
			{ title: 'Nhanh chóng', text: 'Xe chạy liên tục, bạn không phải chờ lâu sau chuyến bay dài.' },
		],
		ctaRoutes: 'Xem điểm đón trả',
	},
	cta: { title: 'Hạ cánh rồi, về trung tâm thôi!', text: `Chỉ từ ${price} mỗi người. Đặt vé chưa đến một phút.`, book: 'Đặt vé ngay', question: 'Câu hỏi thường gặp' },
	footer: {
		about: 'Origo – vé xe giữa sân bay Cam Ranh và trung tâm Nha Trang: tiết kiệm, an toàn, nhanh chóng.',
		routes: 'Chiều đi',
		info: 'Thông tin',
		cats: 'Chuyên mục',
		contact: 'Liên hệ',
		contactSoon: 'Thông tin liên hệ sẽ sớm cập nhật.',
		rights: 'Bảo lưu mọi quyền.',
	},
	mobileBar: { from: 'Chỉ từ', book: 'Đặt vé' },
};

export type Dict = typeof vi;
