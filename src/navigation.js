import { getBlogPermalink } from './utils/permalinks';

export const headerData = {

	links: [

		{
			text: "Trang chủ",
			links: [
				{ text: "Về trang chủ", href: "/" },
				{ text: "Giới thiệu", href: "/about" },
				{
					text: "Thông tin",
					href: "/",
					links: [
						{ text: "Điều khoản", href: "/term" },
						{ text: "Chính sách", href: "/policy" },
						{ text: "Phiên bản", href: "/version" },
					],
				},
				{
					text: "Nguồn dữ liệu",
					href: "/",
					links: [
						{ text: "RSS", href: "/rss.xml" },
						{ text: "Sitemaps", href: "/sitemap-0.xml" },
					],
				},
				{ text: "Trạng thái", href: "https://nhavantuonglai.openstatus.dev" },
				{ text: "Đăng ký", href: "/contact" },
			],
		},

		{
			text: "Viết lách",
			links: [
				{ text: "Bài mới nhất", href: "/article" },
				{ text: "Tuyển tập viết lách", href: "/tags/tuyen-tap-viet-lach" },
				{
					text: "Kỹ năng viết lách",
					href: "/tags/ky-nang-viet",
					links: [
						{ text: "Viết sách", href: "/tags/viet-sach" },
						{ text: "Viết content", href: "/tags/viet-content" },
						{ text: "Content SEO", href: "/tags/content-seo" },
						{ text: "Tối ưu content", href: "/tags/toi-uu-content" },
					],
				},
			],
		},

		{
			text: "Tự nhiên",
			links: [
				{ text: "Tổng quát", href: "/tags/khoa-hoc" },
				{ text: "Toán học", href: "/tags/vat-ly-hoc" },
				{ text: "Sinh học", href: "/tags/sinh-hoc" },
				{ text: "Vật lý học", href: "/tags/vat-ly-hoc" },
				{
					text: "Vũ trụ học",
					href: "/tags/vu-tru",
					links: [
						{ text: "Ngoại hành tinh", href: "/tags/ngoai-hanh-tinh" },
						{ text: "Trái đất", href: "/tags/trai-dat" },
						{ text: "Mặt trời", href: "/tags/mat-troi" },
						{ text: "Vật chất tối", href: "/tags/vat-chat-toi" },
						{ text: "Vật lý lượng tử", href: "/tags/vat-ly-luong-tu" },
					],
				},
			],
		},

		{
			text: "Xã hội",
			links: [
				{ text: "Tổng quát", href: "/tags/xa-hoi-hoc" },
				{ text: "Văn hóa", href: "/tags/van-hoa" },
				{ text: "Tư duy", href: "/tags/tu-duy" },
				{
					text: "Lịch sử",
					href: "/tags/lich-su",
					links: [
						{ text: "Lịch sử Việt Nam", href: "/tags/lich-su-viet-nam" },
						{ text: "Lịch sử thế giới", href: "/tags/lich-su-the-gioi" },
						{ text: "Lịch sử cổ đại", href: "/tags/lich-su-co-dai" },
						{ text: "Lịch sử trung đại", href: "/tags/lich-su-trung-dai" },
						{ text: "Lịch sử hiện đại", href: "/tags/lich-su-hien-dai" },
					],
				},
				{
					text: "Tâm lý học",
					href: "/tags/tam-ly-hoc",
					links: [
						{ text: "Tham vấn tâm lý", href: "/tags/tham-van-tam-ly" },
						{ text: "Vấn đề tâm lý", href: "/tags/van-de-tam-ly" },
						{ text: "Tâm lý động vật", href: "/tags/tam-ly-dong-vat" },
					],
				},
				{
					text: "Tôn giáo",
					href: "/tags/ton-giao",
					links: [
						{ text: "Phật giáo", href: "/tags/phat-giao" },
						{ text: "Đạo giáo", href: "/tags/dao-giao" },
						{ text: "Hồi giáo", href: "/tags/hoi-giao" },
						{ text: "Thiên chúa", href: "/tags/thien-chua" },
					],
				},
				{
					text: "Triết học",
					href: "/tags/triet-hoc",
					links: [
						{ text: "Chủ nghĩa hiện sinh", href: "/tags/chu-nghia-hien-sinh" },
						{ text: "Chủ nghĩa khắc kỷ", href: "/tags/chu-nghia-khac-ky" },
						{ text: "Chủ nghĩa bi quan", href: "/tags/chu-nghia-bi-quan" },
						{ text: "Chủ nghĩa siêu hình", href: "/tags/chu-nghia-sieu-hinh" },
						{ text: "Chủ nghĩa vô thần", href: "/tags/chu-nghia-vo-than" },

					],
				},
			],
		},

		{
			text: "Lập trình",
			links: [
				{ text: "Tổng quát", href: "/tags/developer" },
				{ text: "Blockchain", href: "/tags/blockchain" },
				{
					text: "Website",
					href: "/tags/website",
					links: [
						{ text: "Xây dựng website", href: "/tags/website-builder" },
						{ text: "Tối ưu website", href: "/tags/toi-uu-website" },
						{ text: "Giao diện website", href: "/tags/giao-dien-website" },
						{ text: "Tương tác website", href: "/tags/tuong-tac-website" },
					],
				},
				{
					text: "Phần mềm",
					href: "/",
					links: [
						{ text: "Phần mềm Android", href: "/tags/phan-mem-android" },
						{ text: "Phần mềm iOS", href: "/tags/phan-mem-ios" },
						{ text: "Phần mềm Windos", href: "/tags/phan-mem-windos" },
						{ text: "Phần mềm mở", href: "/tags/phan-mem-mo" },
					],
				},
				{
					text: "Bảo mật",
					href: "/tags/bao-mat",
					links: [
						{ text: "Bảo mật dữ liệu", href: "/tags/bao-mat-du-lieu" },
						{ text: "Bảo mật thông tin", href: "/tags/bao-mat-thong-tin" },
					],
				},
			],
		},

	],
};