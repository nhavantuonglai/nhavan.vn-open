---
pubDatetime: 2019-04-20T10:10:00Z
title: Gián điệp mạng | Chương 43
description: Gián điệp mạng kể về nhà khoa học chuyển nghề thành chuyên gia mạng, truy tìm hacker tại Phòng Thí nghiệm Lawrence Berkeley, California, Mỹ.
image: https://banmaixanh.vercel.app/image/cover/001-499.jpg
tags:
  - clifford stoll
  - gian diep mang
  - an ninh mang
  - thu vien
  - van hoc
  - van hoc nuoc ngoai
---

Hắn nhìn vô hồn vào chiếc cửa chớp hỏng, loang lổ vết dầu mỡ, đôi môi ẩm ướt ngậm hờ một đầu mẩu thuốc lá. Ánh sáng xanh nhợt nhạt của màn hình phản chiếu lên gương mặt tai tái và mệt mỏi. Lặng lẽ và cẩn trọng, hắn tiến hành cuộc xâm nhập vào máy tính.

Cách đó 10.000 kilometer, đôi tay trắng muốt nũng nịu của nàng quờ tìm anh. Anh có thể cảm nhận được hơi thở nóng ấm phả lên má mình, những ngón tay thon thon luồn qua mái tóc nâu bù xù của anh. Chiếc áo ngủ của nàng hờ hững mời gọi, anh đưa tay cảm nhận từng đường cong qua lớp lụa mỏng manh. Nàng thì thầm, _Anh yêu, đừng bỏ em…_

Đột nhiên, đêm tối vỡ vụn – lại là âm thanh đó – anh khựng người lại nhìn vào chiếc tủ đầu giường. Một tia sáng đỏ lấp lánh xuyên qua căn phòng tối.

Máy nhắn tin của anh lại vang lên những tiếng báo động.

6 giờ 30 phút sáng Chủ nhật, Martha và tôi đang mơ màng thì gã hacker dẫm phải cái bẫy điện tử của tôi. Khốn kiếp thật. Giấc mơ đang đẹp. tôi chui ra khỏi chăn và gọi điện cho Steve White. Anh chuyển tin cho Bundespost, và năm phút sau, cuộc lần dấu đã hoàn thành. Lại vẫn là Hannover. Vẫn hắn. tôi không thể quan sát từ nhà được vì sợ hắn phát hiện. Nhưng hôm qua hắn mới đọc hết các tập tin SDI giả rồi kia mà. Sao bây giờ còn quay lại làm gì? Phải đến khi đạp xe đến chỗ làm, tôi mới nhận ra mục tiêu của gã hacker.

Lại là Milnet. Bản in cho thấy hắn đăng nhập vào máy tính Berkeley, sau đó vươn ra Milnet, rồi cố gắng đăng nhập vào một hệ thống ở Căn cứ Không quân Eglin.

Hắn thử các tên tài khoản như `guest`, `system`, `manager` và `field service`… Loanh quanh vẫn chỉ là những mánh cũ. Máy tính của Eglin không chịu nổi chuyện vớ vẩn đó, nên nó đá hắn ra ngoài sau lần thử thứ tư. Tiếp đến, hắn dò dẫm vào máy tính của Cơ quan Kiểm soát Milnet của châu Âu, và thử lại lần nữa. Vẫn không có may mắn nào.

Sau khi lần mò 60 máy tính, dù không tiếp cận được máy tính quân sự nào nhưng hắn vẫn tiếp tục.

Vào lúc 1 giờ 39 phút chiều, hắn đăng nhập vào Trung tâm Hệ thống Bờ biển Hải quân ở thành phố Panama, Florida khi thử tài khoản `Ingres` với mật khẩu cũng là `Ingres`.

Phần mềm cơ sở dữ liệu Ingres cho phép tìm kiếm nhanh hàng nghìn hồ sơ kế toán cho một mục nhập lệnh như, _Hãy cho biết tất cả các chuẩn tinh phát ra tia X,_ hay _Có bao nhiêu tên lửa Tomahawk được triển khai trong hạm đội Thái Bình Dương?_

Phần mềm cơ sở dữ liệu vốn rất hiệu quả, và hệ thống Ingres là một trong những phần mềm tốt nhất.

Nhưng nó đã bị bán đứng bằng một mật khẩu cửa hậu. Ingres vốn có sẵn một tài khoản với mật khẩu dễ đoán ngay từ lúc mới được cài đặt. Gã hacker đã biết điều này. Nhưng Trung tâm Hệ thống Bờ biển Hải quân thì không.

Sau khi đăng nhập, hắn cẩn thận kiểm tra xem có ai đang theo dõi không.

Hắn liệt kê các cấu trúc tập tin và tìm kiếm liên kết đến các mạng gần đó.

Tiếp đến, hắn liệt kê toàn bộ tập tin mật khẩu đã được mã hóa.

Lại thế nữa rồi. Đây là lần thứ ba hay thứ tư tôi thấy hắn sao chép toàn bộ tập tin mật khẩu vào máy tính của mình. Có gì đó lạ lùng ở đây – các mật khẩu đều đã được bảo vệ bằng mật mã nên hắn không thể tìm ra được. Vậy thì tại sao hắn vẫn sao chép tập tin mật khẩu? Sau một giờ lần mò trong máy tính hải quân, hắn bắt đầu mệt mỏi và quay sang gõ cửa các máy trên Milnet. Không lâu sau, trò này cũng trở nên nhàm chán; sau khoảng 50 – 100 lần thử, ngay cả hắn cũng chán cảnh phải đọc đi đọc lại dòng thông tin: _Đăng nhập không hợp lệ – mật khẩu sai._

Vậy là hắn lại in ra một số tập tin `SDINET`, hầu hết đều là những nội dung hắn đã đọc từ mấy ngày trước. Khoảng 2 giờ 30 phút, hắn bỏ cuộc, kết thúc tám giờ đột nhập vào các mạng máy tính quân sự.

Vậy là dư dả thời gian để lần dấu cuộc gọi. Và tôi cũng kịp thời biết được rằng Bundespost lây nay đã hợp tác chặt chẽ với công tố viên ở Bremen, Đức. Lúc này họ đang liên lạc với cấp có thẩm quyền ở Hannover, đồng thời nói chuyện với BKA. Có vẻ như có người đã sẵn sàng tiếp cận gã hacker và bắt giữ hắn. tôi nên gọi cho ai để báo về cuộc xâm nhập vào máy tính Hải quân lần này đây? Mộ tuần trước, OSI Không quân cảnh báo tôi đừng gọi trực tiếp cho quản lý hệ thống. Jim Christy nói: _Việc đó đi ngược lại quy định của quân đội._

_Tôi hiểu,_ tôi nói. _Nhưng có cơ quan trung gian nào để tôi báo cáo những vấn đề này không?_

_Không, không thật sự là có,_ Jim phân trần. _Anh có thể báo cho Trung tâm An ninh Máy tính Quốc gia, nhưng họ là cái bẫy một chiều. Họ lắng nghe, nhưng sẽ không nói gì đâu. Vậy nếu đó là máy tính quân sự, hãy gọi cho chúng tôi. Chúng tôi sẽ chuyển tin đến đúng người._

Sáng thứ Hai, gã hacker lại xuất hiện. Lại đi vặn các tay nắm cửa. Hắn quét một lượt từng cỗ máy tính trong mạng Milnet, từ Trung tâm Phát triển Hàng không Rome ở New York cho đến những nơi lạ hoắc như Trung tâm Vũ khí Điện tử Hải quân. Sau khi thử 15 địa điểm không thành công, hắn bắt được mỏ vàng – máy tính của Căn cứ Không quân Ramstein. Lần này, hắn phát hiện ra tài khoản `bbncc` hớ hênh, không cần mật khẩu.

Có vẻ máy tính này là một hệ thống email dành cho sĩ quan. Hắn liệt kê email của tất cả mọi người. Tôi chợt giật mình – không nên để hắn trông thấy những thông tin này.

Phải làm gì đây? Không thể để hắn chộp được dữ liệu này, nhưng tôi cũng không muốn ra tay. Ngắt kết nối của hắn sẽ là vô ích – hắn sẽ tìm cách khác. tôi cũng không thể gọi tới địa điểm này, vì không biết Căn cứ Không quân Ramstein ở đâu. Tôi có thể gọi cho OSI của Không quân, nhưng lúc này phải hành động ngay – trong chưa đầy năm phút nữa – trước khi hắn đọc được toàn bộ dữ liệu của họ. tôi với tay ra chỗ điện thoại để gọi Jim Christy ở OSI Không quân. Dĩ nhiên, tôi không nhớ số điện thoại của anh ta. Tình cờ trong túi tôi có một chùm chìa khóa. Phải rồi, lại là mánh chùm chìa khóa cũ. Chỉ cần thêm tạp âm vào kết nối của hắn. tôi rung chùm chìa khóa vào bộ kết nối, và ngắt đường dây kết nối của gã hacker ở mức vừa đủ để hắn tưởng đó là tạp âm. Mỗi lần hắn yêu cầu email từ Ramstein, tôi lại làm nhiễu mệnh lệnh của hắn để máy tính của Ramstein không hiểu được hắn muốn gì.

Sau một vài lần thử nữa, hắn bỏ cuộc và quay lại quét các địa điểm khác trên Milnet.

Cuối cùng, tôi cũng gặp được Jim Christy ở OSI Không quân. _Gã hacker đã xâm nhập vào một địa điểm nào đó gọi là Căn cứ Không quân Ramstein.

Anh nên bảo họ thay đổi hết mật khẩu đi._

_Ramstein là ở Đức._

_Hả?_ Tôi hỏi. Tôi tưởng việc chiếm đóng châu Âu đã kết thúc từ những năm 1950 rồi kia mà. _Căn cứ Không quân của Mỹ làm gì ở Đức vậy?_

_Bảo vệ anh. Nhưng thôi, đừng bàn đến chuyện đó. Tôi sẽ cảnh báo họ ngay.

Anh cứ tiếp tục theo dõi gã hacker nhé._ Tôi đã bỏ lỡ 10 phút quan sát. Gã hacker đang tìm cách xâm nhập vào các hệ thống quân sự khác, chậm rãi và bài bản tiếp cận vài chục địa điểm nữa.

Các địa chỉ trên Milnet có vẻ như được sắp xếp theo thứ tự bảng chữ cái; và lúc này hắn đã lần xuống phần cuối bảng rồi. Hầu hết đều là các từ bắt đầu bằng R và S. À há! Đúng rồi! Hắn đang làm việc dựa trên một danh sách sắp xếp thứ tự theo bảng chữ cái. Bằng cách nào đó, hắn có được danh mục của Milnet, và hắn thử lần lượt từng địa điểm.

Đi được nửa chặng đường trong mục chữ S thì hắn vào được một máy tính gọi là Seckenheim với tên tài khoản `Guest`. Không mật khẩu. Thật đáng hổ thẹn.

Nhưng hắn không nán lại đó lâu. Sau vài phút quét các tập tin hệ thống của họ, hắn đăng xuất. Không hiểu vì sao hắn làm thế.

Nhưng có lẽ đến lúc hành động rồi. Tôi nhấc máy gọi Không quân.

_Gã hacker vừa xâm nhập vào một nơi gọi là Seckenheim trên Milnet, nên chắc đó là máy tính quân sự. Nhưng tôi chưa từng nghe đến tên này._

_Đồ quỷ quyệt xảo trá,_ Jim gầm gừ.

_Hả?_

_Khốn kiếp. Seckenheim là Bộ Chỉ huy Vật tư Lục quân ở châu Âu. Gần Heidelberg. Lại là Đức._

_Chà. Tôi rất tiếc về điều này._

_Tôi sẽ lo vụ này._

Thành công của gã hacker đồng nghĩa với rắc rối cho các thám tử. Tôi cứ thắc mắc không biết rốt cuộc Mỹ có bao nhiêu căn cứ quân sự ở nước ngoài. Tôi có thể xử lý được phần công nghệ, chỉ bị vướng mắc về vấn đề địa lý và các bộ máy hành chính quan liêu.

Sau khi xâm nhập vào được ba máy tính trong ngày hôm nay, gã hacker vẫn chưa thỏa mãn. Hắn tiếp tục đi gõ các cánh cửa trên mạng Milnet, nên tôi tiếp tục theo dõi ở trạm điều phối. Tôi thấy hắn lần lượt thử mật khẩu trên từng máy. Lúc 11 giờ 37 phút, hắn vào được một máy tính Vax tên là Stewart bằng tài khoản `Field` và mật khẩu `Service`. Chuyện cũ gặp lại.

Lại thêm một máy Vax chạy hệ điều hành VMS chưa thay đổi mật khẩu mặc định.

Gã hacker sà ngay vào. Đó là tài khoản đặc quyền, và hắn chộp ngay lấy thời cơ này. Trước tiên, hắn tắt chức năng kế toán để không lưu lại dấu vết.

Sau đó, hắn đi thẳng đến tiện ích authorize (cấp quyền) – tức phần mềm hệ thống kiểm soát mật khẩu – và chọn một tài khoản tên là `Rita`, vốn chưa sử dụng hệ thống này trong vài tháng qua. Hắn điều chỉnh tài khoản của Rita và cấp cho nó toàn bộ các đặc quyền hệ thống, rồi đặt lại mật khẩu.

`Ulfmerbold`. tôi gặp từ này ở đâu rồi nhỉ? `Ulfmerbold`. Nghe có vẻ giống tiếng Đức. Để tìm hiểu sau vậy, bây giờ tôi phải theo dõi hắn đã.

Cuối cùng, quá giờ trưa một chút, gã hacker rời khỏi Berkeley. Một ngày bội thu của hắn.

Hóa ra máy tính Steward thuộc về Pháo đài Stewart, một căn cứ quân sự ở Georgia. Tôi gọi Mike Gibbons của FBI để anh ta báo cho họ.

_Mike, anh đã nghe thấy từ Ulfmerbold bao giờ chưa?_

_Chưa. Có vẻ là tiếng Đức._

_Tôi chỉ hỏi xem anh có biết không thôi. À, phía Đức đã hoàn thành cuộc lần dấu. Bundespost hiện giờ đã biết ai là người gọi điện rồi._

_Họ nói với anh như vậy à?_

_Không. Làm gì có ai nói gì với tôi chứ. Anh biết rồi mà._

Mike bật cười. _Đó là cách hoạt động của chúng tôi mà. Được rồi. Nhưng tôi sẽ đưa tùy pháp tham gia vào vụ này ngay lập tức._

_Tùy pháp?_

_Ồ. Tùy viên tư pháp. Anh chàng ở Bonn phụ trách các vấn đề của chúng tôi ấy._

_Bao lâu nữa thì họ tóm cổ gã này?_ Tôi chỉ nóng lòng muốn biết hắn là ai và tại sao hắn làm chuyện này – đó là những mảnh ghép cuối cùng của câu đố.

_Tôi không biết. Nhưng khi nào bắt được, tôi sẽ báo anh. Đến giờ thì không còn lâu nữa đâu._

Một cách tình cờ, vào khoảng 3 giờ chiều, Teejay từ CIA gọi đến. _Có gì mới không?_

_Chúng tôi đã hoàn thành cuộc lần dấu vào cuối tuần._

_Hắn ở đâu?_

_Ở Hannover._

_Ừm. Anh có biết tên hắn không?_

_Không, chưa._

_Thực thể `F` có biết không?_

_Tôi không nghĩ vậy. Nhưng anh cứ gọi hỏi thử xem. Họ có bao giờ nói gì với tôi đâu._ Tôi nghi ngờ về việc FBI sẽ hé răng với CIA, mà tôi cũng không muốn bị kẹp giữa hai bên. Thực ra, việc tôi trao đổi với một trong hai bên đã đủ kỳ cục rồi.

_Anh có manh mối gì về thông tin nhận dạng của hắn không?_

_Khó nói lắm. Anh đã gặp từ Ulfmerbold bao giờ chưa?_

_Ừm. Anh gặp ở đâu vậy?_

_Gã hacker chọn nó làm mật khẩu khi hắn xâm nhập vào một máy tính sáng hôm nay. Ở Pháo đài Stewart, Georgia._

_Hắn không ôm cây đợi thỏ à?_

Teejay vẫn cố tỏ vẻ bàng quang, nhưng cái giọng run run của anh ta đã làm lộ ra tất cả.

_Đúng vậy. Hắn còn đi vào hai địa điểm khác nữa._

_Ở đâu?_

_Ồ,_ tôi nói, _không phải nơi nào đặc biệt cả. Vài căn cứ quân sự ở Đức thôi. Và một nơi gọi là Pháo đài Buckner._

_Đồ khốn nạn._

_Anh biết họ à?_

_Đúng vậy. Tôi từng làm việc ở Pháo đài Buckner hồi còn ở Lục quân. Hai vợ chồng tôi sống trong căn cứ này._

Điệp viên CIA mà có vợ sao? Tôi chưa bao giờ nghĩ đến tình huống này. Các tiểu thuyết về gián điệp có bao giờ nhắc đến chuyện vợ con đâu nhỉ? Gã hacker đã chọn một mật khẩu kỳ quặc. Ulfmerbold. Tôi chưa từng gặp từ này trong từ điển. Từ điển Đức – Anh cũng không có. Cuốn atlas đáng tin cậy cũng không cho thấy gì. Và tôi cũng chưa từng nghe ai nhắc đến từ này cả.

Martha chưa, bạn bè tôi cũng chưa. Chị tôi, người đã mạo hiểm tính mạng rình mò quanh một trường cấp ba ở McLean, Virginia, cũng thế.

Tuy loay hoay mất ba ngày, nhưng rốt cuộc sếp tôi, Roy Kerth, đã tìm ra.

Ulf Merbold, một nhà du hành vũ trụ người Tây Đức, đã thực hiện các quan sát thiên văn từ tàu con thoi.

Vậy là thêm một manh mối nữa đến từ Đức; thật thừa thãi vì rằng bây giờ bằng chứng đã quá nhiều rồi. Nhưng tại sao hắn lại chọn tên của một nhà du hành? Đó là vị anh hùng mà hắn tôn thờ ư? Hay lại thêm động cơ nào nham hiểm hơn? Liệu điều này có lý giải được tại sao hắn kiên trì xâm nhập vào các máy tính không? Phải chăng bấy lâu nay tôi đang theo dõi một kẻ bị ám ảnh với chương trình không gian của Mỹ – một anh chàng mơ ước trở thành nhà du hành vũ trụ nên đã thu thập thông tin về những chương trình không gian chăng? Không. Gã hacker này tìm kiếm các máy tính quân sự kia mà, không phải các hệ thống của NASA. Hắn muốn dữ liệu của SDI chứ không cần các dữ liệu thiên văn học. Có ai đi tìm tàu con thoi ở Okinawa đâu! Có ai tìm kiếm tiểu sử các nhà du hành vũ trụ trong các bản kế hoạch chiến tranh hạt nhân của Lục quân cho Trung Âu đâu!

Đọc [Gián điệp mạng, chương 01](https://nhavan.vn/article/gian-diep-mang-chuong-01) tại đây.

Đọc [Gián điệp mạng, chương 02](https://nhavan.vn/article/gian-diep-mang-chuong-02) tại đây.

Đọc [Gián điệp mạng, chương 03](https://nhavan.vn/article/gian-diep-mang-chuong-03) tại đây.

Đọc [Gián điệp mạng, chương 04](https://nhavan.vn/article/gian-diep-mang-chuong-04) tại đây.

Đọc [Gián điệp mạng, chương 05](https://nhavan.vn/article/gian-diep-mang-chuong-05) tại đây.

Đọc [Gián điệp mạng, chương 06](https://nhavan.vn/article/gian-diep-mang-chuong-06) tại đây.

Đọc [Gián điệp mạng, chương 07](https://nhavan.vn/article/gian-diep-mang-chuong-07) tại đây.

Đọc [Gián điệp mạng, chương 09](https://nhavan.vn/article/gian-diep-mang-chuong-09) tại đây.

Đọc [Gián điệp mạng, chương 10](https://nhavan.vn/article/gian-diep-mang-chuong-10) tại đây.

Đọc [Gián điệp mạng, chương 11](https://nhavan.vn/article/gian-diep-mang-chuong-11) tại đây.

Đọc [Gián điệp mạng, chương 12](https://nhavan.vn/article/gian-diep-mang-chuong-12) tại đây.

Đọc [Gián điệp mạng, chương 13](https://nhavan.vn/article/gian-diep-mang-chuong-13) tại đây.

Đọc [Gián điệp mạng, chương 14](https://nhavan.vn/article/gian-diep-mang-chuong-14) tại đây.

Đọc [Gián điệp mạng, chương 15](https://nhavan.vn/article/gian-diep-mang-chuong-15) tại đây.

Đọc [Gián điệp mạng, chương 16](https://nhavan.vn/article/gian-diep-mang-chuong-16) tại đây.

Đọc [Gián điệp mạng, chương 17](https://nhavan.vn/article/gian-diep-mang-chuong-17) tại đây.

Đọc [Gián điệp mạng, chương 18](https://nhavan.vn/article/gian-diep-mang-chuong-18) tại đây.

Đọc [Gián điệp mạng, chương 19](https://nhavan.vn/article/gian-diep-mang-chuong-19) tại đây.

Đọc [Gián điệp mạng, chương 20](https://nhavan.vn/article/gian-diep-mang-chuong-20) tại đây.

Đọc [Gián điệp mạng, chương 21](https://nhavan.vn/article/gian-diep-mang-chuong-21) tại đây.

Đọc [Gián điệp mạng, chương 22](https://nhavan.vn/article/gian-diep-mang-chuong-22) tại đây.

Đọc [Gián điệp mạng, chương 23](https://nhavan.vn/article/gian-diep-mang-chuong-23) tại đây.

Đọc [Gián điệp mạng, chương 24](https://nhavan.vn/article/gian-diep-mang-chuong-24) tại đây.

Đọc [Gián điệp mạng, chương 25](https://nhavan.vn/article/gian-diep-mang-chuong-25) tại đây.

Đọc [Gián điệp mạng, chương 26](https://nhavan.vn/article/gian-diep-mang-chuong-26) tại đây.

Đọc [Gián điệp mạng, chương 27](https://nhavan.vn/article/gian-diep-mang-chuong-27) tại đây.

Đọc [Gián điệp mạng, chương 28](https://nhavan.vn/article/gian-diep-mang-chuong-28) tại đây.

Đọc [Gián điệp mạng, chương 29](https://nhavan.vn/article/gian-diep-mang-chuong-29) tại đây.

Đọc [Gián điệp mạng, chương 30](https://nhavan.vn/article/gian-diep-mang-chuong-30) tại đây.

Đọc [Gián điệp mạng, chương 31](https://nhavan.vn/article/gian-diep-mang-chuong-31) tại đây.

Đọc [Gián điệp mạng, chương 32](https://nhavan.vn/article/gian-diep-mang-chuong-32) tại đây.

Đọc [Gián điệp mạng, chương 33](https://nhavan.vn/article/gian-diep-mang-chuong-33) tại đây.

Đọc [Gián điệp mạng, chương 34](https://nhavan.vn/article/gian-diep-mang-chuong-34) tại đây.

Đọc [Gián điệp mạng, chương 35](https://nhavan.vn/article/gian-diep-mang-chuong-35) tại đây.

Đọc [Gián điệp mạng, chương 36](https://nhavan.vn/article/gian-diep-mang-chuong-36) tại đây.

Đọc [Gián điệp mạng, chương 37](https://nhavan.vn/article/gian-diep-mang-chuong-37) tại đây.

Đọc [Gián điệp mạng, chương 38](https://nhavan.vn/article/gian-diep-mang-chuong-38) tại đây.

Đọc [Gián điệp mạng, chương 39](https://nhavan.vn/article/gian-diep-mang-chuong-39) tại đây.

Đọc [Gián điệp mạng, chương 40](https://nhavan.vn/article/gian-diep-mang-chuong-40) tại đây.

Đọc [Gián điệp mạng, chương 41](https://nhavan.vn/article/gian-diep-mang-chuong-41) tại đây.

Đọc [Gián điệp mạng, chương 42](https://nhavan.vn/article/gian-diep-mang-chuong-42) tại đây.

Đọc [Gián điệp mạng, chương 43](https://nhavan.vn/article/gian-diep-mang-chuong-43) tại đây.

Đọc [Gián điệp mạng, chương 44](https://nhavan.vn/article/gian-diep-mang-chuong-44) tại đây.

Đọc [Gián điệp mạng, chương 45](https://nhavan.vn/article/gian-diep-mang-chuong-45) tại đây.

Đọc [Gián điệp mạng, chương 46](https://nhavan.vn/article/gian-diep-mang-chuong-46) tại đây.

Đọc [Gián điệp mạng, chương 47](https://nhavan.vn/article/gian-diep-mang-chuong-47) tại đây.

Đọc [Gián điệp mạng, chương 48](https://nhavan.vn/article/gian-diep-mang-chuong-48) tại đây.

Đọc [Gián điệp mạng, chương 49](https://nhavan.vn/article/gian-diep-mang-chuong-49) tại đây.

Đọc [Gián điệp mạng, chương 50](https://nhavan.vn/article/gian-diep-mang-chuong-50) tại đây.

Đọc [Gián điệp mạng, chương 51](https://nhavan.vn/article/gian-diep-mang-chuong-51) tại đây.

Đọc [Gián điệp mạng, chương 52](https://nhavan.vn/article/gian-diep-mang-chuong-52) tại đây.

Đọc [Gián điệp mạng, chương 53](https://nhavan.vn/article/gian-diep-mang-chuong-53) tại đây.

Đọc [Gián điệp mạng, chương 54](https://nhavan.vn/article/gian-diep-mang-chuong-54) tại đây.

Đọc [Gián điệp mạng, chương 55](https://nhavan.vn/article/gian-diep-mang-chuong-55) tại đây.

Đọc [Gián điệp mạng, chương 56](https://nhavan.vn/article/gian-diep-mang-chuong-56) tại đây.

Đọc [Gián điệp mạng, chương 57](https://nhavan.vn/article/gian-diep-mang-chuong-57) tại đây.

Đọc [Gián điệp mạng, toàn tập](https://banmaixanh.vercel.app/ebook/gian-diep-mang.pdf) tại đây.

<figure><img src="https://banmaixanh.vercel.app/image/cover/001-622.jpg" alt="Gián điệp mạng | Chương 43. 925 – clifford stoll, gian diep mang, an ninh mang, thu vien, van hoc, van hoc nuoc ngoai." title="Gián điệp mạng | Chương 43." height="100%" width="100%" loading="lazy"><figcaption>Gián điệp mạng | Chương 43.</figcaption></figure>