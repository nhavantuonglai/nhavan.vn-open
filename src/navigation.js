import { getBlogPermalink } from './utils/permalinks';

export const headerData = {

	links: [

		{
			text: "Trang chủ",
			links: [
				{ text: "Về trang chủ", href: "https://nhavantuonglai.com" },
				{ text: "Giới thiệu", href: "https://nhavantuonglai.com/about" },
				{
					text: "Thông tin",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "Điều khoản", href: "https://nhavantuonglai.com/term" },
						{ text: "Chính sách", href: "https://nhavantuonglai.com/policy" },
						{ text: "Phiên bản", href: "https://nhavantuonglai.com/version" },
					],
				},
				{
					text: "Nguồn dữ liệu",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "RSS", href: "https://nhavantuonglai.com/rss.xml" },
						{ text: "Sitemaps", href: "https://nhavantuonglai.com/sitemap-0.xml" },
					],
				},
				{ text: "Trạng thái", href: "https://nhavantuonglai.openstatus.dev" },
				{ text: "Liên hệ", href: "https://nhavantuonglai.com/contact" },
			],
		},

		{
			text: "Viết lách",
			links: [
				{ text: "Bài mới nhất", href: "https://nhavantuonglai.com/article" },
				{ text: "Tuyển tập viết lách", href: "https://nhavantuonglai.com/tags/tuyen-tap-viet-lach" },
				{
					text: "Kỹ năng viết lách",
					href: "https://nhavantuonglai.com/tags/ky-nang-viet",
					links: [
						{ text: "Viết sách", href: "https://nhavantuonglai.com/tags/viet-sach" },
						{ text: "Viết content", href: "https://nhavantuonglai.com/tags/viet-content" },
						{ text: "Content SEO", href: "https://nhavantuonglai.com/tags/content-seo" },
						{ text: "Tối ưu content", href: "https://nhavantuonglai.com/tags/toi-uu-content" },
					],
				},
			],
		},

		{
			text: "Tự nhiên",
			links: [
				{ text: "Tổng quát", href: "https://nhavantuonglai.com/tags/khoa-hoc" },
				{ text: "Toán học", href: "https://nhavantuonglai.com/tags/vat-ly-hoc" },
				{ text: "Sinh học", href: "https://nhavantuonglai.com/tags/sinh-hoc" },
				{ text: "Vật lý học", href: "https://nhavantuonglai.com/tags/vat-ly-hoc" },
				{
					text: "Vũ trụ học",
					href: "https://nhavantuonglai.com/tags/vu-tru",
					links: [
						{ text: "Ngoại hành tinh", href: "https://nhavantuonglai.com/tags/ngoai-hanh-tinh" },
						{ text: "Trái đất", href: "https://nhavantuonglai.com/tags/trai-dat" },
						{ text: "Mặt trời", href: "https://nhavantuonglai.com/tags/mat-troi" },
						{ text: "Vật chất tối", href: "https://nhavantuonglai.com/tags/vat-chat-toi" },
						{ text: "Vật lý lượng tử", href: "https://nhavantuonglai.com/tags/vat-ly-luong-tu" },
					],
				},
			],
		},

		{
			text: "Xã hội",
			links: [
				{ text: "Tổng quát", href: "https://nhavantuonglai.com/tags/xa-hoi-hoc" },
				{ text: "Văn hóa", href: "https://nhavantuonglai.com/tags/van-hoa" },
				{ text: "Tư duy", href: "https://nhavantuonglai.com/tags/tu-duy" },
				{
					text: "Lịch sử",
					href: "https://nhavantuonglai.com/tags/lich-su",
					links: [
						{ text: "Lịch sử Việt Nam", href: "https://nhavantuonglai.com/tags/lich-su-viet-nam" },
						{ text: "Lịch sử thế giới", href: "https://nhavantuonglai.com/tags/lich-su-the-gioi" },
						{ text: "Lịch sử cổ đại", href: "https://nhavantuonglai.com/tags/lich-su-co-dai" },
						{ text: "Lịch sử trung đại", href: "https://nhavantuonglai.com/tags/lich-su-trung-dai" },
						{ text: "Lịch sử hiện đại", href: "https://nhavantuonglai.com/tags/lich-su-hien-dai" },
					],
				},
				{
					text: "Tâm lý học",
					href: "https://nhavantuonglai.com/tags/tam-ly-hoc",
					links: [
						{ text: "Tham vấn tâm lý", href: "https://nhavantuonglai.com/tags/tham-van-tam-ly" },
						{ text: "Vấn đề tâm lý", href: "https://nhavantuonglai.com/tags/van-de-tam-ly" },
						{ text: "Tâm lý động vật", href: "https://nhavantuonglai.com/tags/tam-ly-dong-vat" },
					],
				},
				{
					text: "Tôn giáo",
					href: "https://nhavantuonglai.com/tags/ton-giao",
					links: [
						{ text: "Phật giáo", href: "https://nhavantuonglai.com/tags/phat-giao" },
						{ text: "Đạo giáo", href: "https://nhavantuonglai.com/tags/dao-giao" },
						{ text: "Hồi giáo", href: "https://nhavantuonglai.com/tags/hoi-giao" },
						{ text: "Thiên chúa", href: "https://nhavantuonglai.com/tags/thien-chua" },
					],
				},
				{
					text: "Triết học",
					href: "https://nhavantuonglai.com/tags/triet-hoc",
					links: [
						{ text: "Chủ nghĩa hiện sinh", href: "https://nhavantuonglai.com/tags/chu-nghia-hien-sinh" },
						{ text: "Chủ nghĩa khắc kỷ", href: "https://nhavantuonglai.com/tags/chu-nghia-khac-ky" },
						{ text: "Chủ nghĩa bi quan", href: "https://nhavantuonglai.com/tags/chu-nghia-bi-quan" },
						{ text: "Chủ nghĩa siêu hình", href: "https://nhavantuonglai.com/tags/chu-nghia-sieu-hinh" },
						{ text: "Chủ nghĩa vô thần", href: "https://nhavantuonglai.com/tags/chu-nghia-vo-than" },

					],
				},
			],
		},

		{
			text: "Lập trình",
			links: [
				{ text: "Tổng quát", href: "https://nhavantuonglai.com/tags/developer" },
				{ text: "Blockchain", href: "https://nhavantuonglai.com/tags/blockchain" },
				{
					text: "Website",
					href: "https://nhavantuonglai.com/tags/website",
					links: [
						{ text: "Xây dựng website", href: "https://nhavantuonglai.com/tags/website-builder" },
						{ text: "Tối ưu website", href: "https://nhavantuonglai.com/tags/toi-uu-website" },
						{ text: "Giao diện website", href: "https://nhavantuonglai.com/tags/giao-dien-website" },
						{ text: "Tương tác website", href: "https://nhavantuonglai.com/tags/tuong-tac-website" },
					],
				},
				{
					text: "Phần mềm",
					href: "https://nhavantuonglai.com",
					links: [
						{ text: "Phần mềm Android", href: "https://nhavantuonglai.com/tags/phan-mem-android" },
						{ text: "Phần mềm iOS", href: "https://nhavantuonglai.com/tags/phan-mem-ios" },
						{ text: "Phần mềm Windos", href: "https://nhavantuonglai.com/tags/phan-mem-windos" },
						{ text: "Phần mềm mở", href: "https://nhavantuonglai.com/tags/phan-mem-mo" },
					],
				},
				{
					text: "Bảo mật",
					href: "https://nhavantuonglai.com/tags/bao-mat",
					links: [
						{ text: "Bảo mật dữ liệu", href: "https://nhavantuonglai.com/tags/bao-mat-du-lieu" },
						{ text: "Bảo mật thông tin", href: "https://nhavantuonglai.com/tags/bao-mat-thong-tin" },
					],
				},
			],
		},

		{
			text: "Công cụ",
			links: [
				{ text: "Nghe FM trực tuyến", href: "https://nhavantuonglai.com/analytics/radio" },
				{ text: "Bây giờ là mấy giờ", href: "https://nhavantuonglai.com/analytics/time" },
				{ text: "Đếm ngược Giao thừa", href: "https://nhavantuonglai.com/analytics/countdown" },
				{ text: "Từ điển trực tuyến", href: "https://nhavantuonglai.com/analytics/dictionary" },
			],
		},

		{
			text: "Tiện ích",
			links: [
				{ text: "In tài liệu", href: "https://nhavantuonglai.com" },
				{ text: "Chụp ảnh màn hình", href: "https://nhavantuonglai.com" },
				{ text: "Dịch văn bản", href: "https://nhavantuonglai.com" },
			],
		},

	],
};

export const footerData = {

	secondaryLinks: [

		{
			text: 'Điều khoản',
			href: 'https://nhavantuonglai.com/term'
		},

		{
			text: 'Chính sách',
			href: 'https://nhavantuonglai.com/policy'
		},

		{
			text: 'v25.07.31',
			href: 'https://nhavantuonglai.com/version'
		},

	],

};