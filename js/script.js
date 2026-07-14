const products = [
    {
        id: 1,
        ten: "Capybara Hôn chụt chụt",
        gia: "150.000đ/Tranh",
        mota: "Khoảnh khắc siêu ngọt ngào và đáng yêu của hai chú chuột Capybara đang thơm nhau. Thích hợp làm quà tặng cho các cặp đôi hoặc trang trí phòng ngủ lãng mạn. Kích thước: 30x40cm. Vật liệu: Tranh tráng gương cao cấp, khung composite chống mối mọt.",
        hinhanh: "assets/image/capybara1.webp"
    },
    {
        id: 2,
        ten: "Capybara suy tình",
        gia: "180.000đ/Tranh",
        mota: "Chú chuột bộ dáng cô đơn đang lặng lẽ ngắm nhìn mặt nước bình yên, mang đậm bầu không khí suy tư, trầm mặc cho những ngày đầy tâm trạng. Kích thước: 40x60cm. Vật liệu: Vải canvas cao cấp nhập khẩu, mực in UV sắc nét.",
        hinhanh: "assets/image/capybara2.webp"
    },
    {
        id: 3,
        ten: "Capybara chuẩn dáng",
        gia: "180.000đ/Tranh",
        mota: "Bức ảnh bắt trọn góc đứng nghiêng đầy thần thái của bộ trưởng bộ ngoại giao làng động vật. Phong thái ung dung, tự tại không lẫn vào đâu được. Kích thước: 40x60cm. Vật liệu: Vải canvas bọc khung gỗ thông tự nhiên.",
        hinhanh: "assets/image/capybara3.webp"
    },
    {
        id: 4,
        ten: "Gia đình Capybara",
        gia: "220.000đ/Tranh",
        mota: "Hình ảnh cả gia đình Capybara đang cùng nhau ngâm mình thư giãn dưới dòng nước mát, biểu tượng cho sự gắn kết, ấm áp và hạnh phúc gia đình. Kích thước: 50x70cm. Vật liệu: Tranh tráng gương bóng viền nhôm sang trọng.",
        hinhanh: "assets/image/capybara4.webp"
    },
    {
        id: 5,
        ten: "Capybara selfie",
        gia: "120.000đ/Tranh",
        mota: "Góc chụp cận mặt bá đạo cận cảnh nét mặt nghiêm túc nhưng lại vô cùng hài hước của chú Capybara, tạo điểm nhấn vui nhộn cho không gian làm việc. Kích thước: 30x30cm (Khung vuông). Vật liệu: Gỗ MDF phủ Melamine chống ẩm.",
        hinhanh: "assets/image/capybara5.webp"
    },
    {
        id: 6,
        ten: "Capybara Đội Đồ Ăn",
        gia: "200.000đ/Tranh",
        mota: "Góc nghiêng thần thánh kết hợp cùng chiếc mũ đồ ăn độc lạ trên đầu. Biểu cảm bất biến giữa dòng đời vạn biến, mang lại nguồn năng lượng tích cực mỗi ngày. Kích thước: 45x60cm. Vật liệu: Tranh tráng gương pha lê pha sợi thủy tinh siêu bền.",
        hinhanh: "assets/image/capybara6.jpg"
    },
    {
        id: 7,
        ten: "Capybara Nuông Chiều",
        gia: "160.000đ/Tranh",
        mota: "Khoảnh khắc đáng yêu khi bộ trưởng được nhân viên chăm sóc tận tình đút từng miếng dưa hấu mát lạnh. Bức ảnh mang lại cảm giác được nuông chiều và thư giãn tuyệt đối. Kích thước: 40x50cm. Vật liệu: Vải canvas căng khung hiện đại.",
        hinhanh: "assets/image/capybara7.webp"
    },
    {
        id: 8,
        ten: "Capybara Ngủ Nướng",
        gia: "150.000đ/Tranh",
        mota: "Góc chụp cận cảnh đàn Capybara đang chìm vào giấc ngủ say nồng, lười biếng đè lên nhau. Một bức tranh hoàn hảo để tiếp thêm năng lượng vô tri cho những ngày cuối tuần. Kích thước: 35x50cm. Vật liệu: Tranh in trên nền gỗ lụa mịn bảo vệ mắt.",
        hinhanh: "assets/image/capybara8.webp"
    },
    {
        id: 9,
        ten: "Capybara Tắm Khử Thâm",
        gia: "190.000đ/Tranh",
        mota: "Bức ảnh bắt trọn khoảnh khắc chú chuột lội nước chill chill bên cạnh những quả quả quýt thả bồn đúng chuẩn phong cách Nhật Bản. Giúp giải tỏa mọi áp lực ngay khi nhìn vào. Kích thước: 40x60cm. Vật liệu: Mặt kính cường lực chống trầy xước, chịu lực tốt.",
        hinhanh: "assets/image/capybara9.webp"
    },
    {
        id: 10,
        ten: "Capybara Hướng Về Tương Lai",
        gia: "175.000đ/Tranh",
        mota: "Hai chú Capybara cùng nhau đứng trên đỉnh đồi lộng gió, ngước mắt nhìn về một phương xa xăm đầy hoài bão. Phong cảnh tối giản, mang chiều sâu nghệ thuật tinh tế. Kích thước: 40x60cm. Vật liệu: Vải canvas cao cấp dập nổi vân nổi.",
        hinhanh: "assets/image/capybara10.webp"
    },
    {
        id: 11,
        ten: "Đại Gia Đình Capybara",
        gia: "250.000đ/Tranh",
        mota: "Bức ảnh sum vầy của cả một đại gia đình chuột lang nước trên bãi cỏ xanh mướt. Thích hợp để trang trí phòng khách nhằm tạo không khí ấm cúng, gắn kết thành viên. Kích thước: 60x90cm (Khổ lớn). Vật liệu: Tranh tráng gương viền LED sang trọng.",
        hinhanh: "assets/image/capybara11.webp"
    },
    {
        id: 12,
        ten: "Capybara Hảo Hán",
        gia: "140.000đ/Tranh",
        mota: "Dáng đứng hiên ngang, độc hành giữa thiên nhiên hoang dã đầy bản lĩnh của một chú Capybara trưởng thành. Thần thái lạnh lùng, phong trần nhưng không kém phần hài hước. Kích thước: 30x40cm. Vật liệu: Khung gỗ composite bọc viền mạ vàng.",
        hinhanh: "assets/image/capybara12.webp"
    },
    {
        id: 13,
        ten: "Khỉ Uy Quyền",
        gia: "165.000đ/Tranh",
        mota: "Bức tranh lột tả ánh mắt sắc sảo và đầy quyền lực của chú khỉ đầu đàn giữa khu rừng già. Kích thước: 40x50cm. Vật liệu: Vải canvas nhập khẩu siêu bền.",
        hinhanh: "assets/image/khilieng1.webp"
    },
    {
        id: 14,
        ten: "Khỉ Tinh Nghịch",
        gia: "135.000đ/Tranh",
        mota: "Khoảnh khắc chú khỉ con đang chuyền cành đầy năng động, đem lại năng lượng tích cực cho căn phòng. Kích thước: 30x40cm. Vật liệu: Gỗ MDF phủ bóng chống nước.",
        hinhanh: "assets/image/khilieng2.webp"
    },
    {
        id: 15,
        ten: "Khỉ Trầm Tư",
        gia: "170.000đ/Tranh",
        mota: "Hình ảnh chú khỉ ngồi lặng lẽ dưới tán lá rậm, mang một nét đẹp nghệ thuật sâu lắng và bình yên. Kích thước: 40x60cm. Vật liệu: Tranh tráng gương viền đen hiện đại.",
        hinhanh: "assets/image/khilieng3.webp"
    },
    {
        id: 16,
        ten: "Khỉ Hạnh Phúc",
        gia: "210.000đ/Tranh",
        mota: "Cặp đôi khỉ đang tựa đầu vào nhau vô cùng ấm áp, thích hợp trang trí không gian gia đình. Kích thước: 50x50cm. Vật liệu: Vải canvas khung viền composite.",
        hinhanh: "assets/image/khilieng4.webp"
    },
    {
        id: 17,
        ten: "Khỉ Ăn Chuối",
        gia: "145.000đ/Tranh",
        mota: "Góc chụp hài hước và ngộ nghĩnh của chú khỉ khi đang thưởng thức món ăn khoái khẩu của mình. Kích thước: 35x45cm. Vật liệu: Tranh lụa cán format siêu nhẹ.",
        hinhanh: "assets/image/khilieng5.webp"
    },
    {
        id: 18,
        ten: "Khỉ Đón Bình Minh",
        gia: "195.000đ/Tranh",
        mota: "Ánh nắng ban mai ấm áp chiếu rọi bóng dáng chú khỉ trên ngọn cây, tạo chiều sâu không gian xuất sắc. Kích thước: 45x65cm. Vật liệu: Tranh tráng gương pha lê cao cấp.",
        hinhanh: "assets/image/khilieng6.webp"
    },
    {
        id: 19,
        ten: "Khỉ Suy Ngẫm",
        gia: "160.000đ/Tranh",
        mota: "Biểu cảm đầy thần thái mang tính triết lý của một chú khỉ già oai nghiêm đầy kinh nghiệm sống. Kích thước: 40x50cm. Vật liệu: Canvas cao cấp căng khung gỗ thông.",
        hinhanh: "assets/image/khilieng7.webp"
    },
    {
        id: 20,
        ten: "Khỉ Yoga",
        gia: "155.000đ/Tranh",
        mota: "Tư thế co chân thăng bằng trên một dây leo đầy khéo léo và độc đáo của loài khỉ tinh khôn. Kích thước: 30x50cm. Vật liệu: Gỗ MDF cao cấp dập vân nổi.",
        hinhanh: "assets/image/khilieng8.webp"
    },
    {
        id: 21,
        ten: "Khỉ Nghệ Thuật",
        gia: "185.000đ/Tranh",
        mota: "Sự phối hợp màu sắc đầy phá cách và trừu tượng lấy cảm hứng từ hình ảnh loài khỉ thông minh. Kích thước: 40x60cm. Vật liệu: Kính cường lực in UV sắc nét.",
        hinhanh: "assets/image/khilieng9.webp"
    },
    {
        id: 22,
        ten: "Tình Mẫu Tử Khỉ",
        gia: "230.000đ/Tranh",
        mota: "Hình ảnh khỉ mẹ ôm chặt khỉ con vào lòng vô cùng xúc động, chứa đựng tình yêu thương vô bờ bến. Kích thước: 50x70cm. Vật liệu: Tranh tráng gương bóng viền bạc.",
        hinhanh: "assets/image/khilieng10.webp"
    },
    {
        id: 23,
        ten: "Hươu Cao Cổ Kiêu Sa",
        gia: "190.000đ/Tranh",
        mota: "Góc nghiêng khoe trọn chiếc cổ dài quyến rũ trên nền trời xanh ngắt đầy tự do. Kích thước: 40x60cm. Vật liệu: Vải canvas bọc khung gỗ thông.",
        hinhanh: "assets/image/huoucaoco1.webp"
    },
    {
        id: 24,
        ten: "Hươu Cao Cổ Đôi Bạn",
        gia: "220.000đ/Tranh",
        mota: "Hai chú hươu cao cổ đang quấn quýt đan cổ vào nhau, biểu tượng cho một tình bạn gắn kết bền lâu. Kích thước: 50x70cm. Vật liệu: Tranh tráng gương viền nhôm sang trọng.",
        hinhanh: "assets/image/huoucaoco2.webp"
    },
    {
        id: 25,
        ten: "Hươu Cao Cổ Ăn Lá",
        gia: "175.000đ/Tranh",
        mota: "Bức ảnh chụp khoảnh khắc chú hươu rướn người ăn những chiếc lá non trên đỉnh cây cao. Kích thước: 40x50cm. Vật liệu: Gỗ MDF chống ẩm phủ Melamine.",
        hinhanh: "assets/image/huoucaoco3.webp"
    },
    {
        id: 26,
        ten: "Hươu Cao Cổ Hoàng Hôn",
        gia: "260.000đ/Tranh",
        mota: "Bóng dáng đàn hươu cao cổ đi bộ dưới ánh chiều tà rực rỡ của vùng đồng cỏ Châu Phi. Kích thước: 60x90cm. Vật liệu: Tranh tráng gương pha lê cao cấp.",
        hinhanh: "assets/image/huoucaoco4.webp"
    },
    {
        id: 27,
        ten: "Hươu Cao Cổ Con Tò Mò",
        gia: "150.000đ/Tranh",
        mota: "Nét mặt ngơ ngác đầy đáng yêu của một chú hươu con khi lần đầu nhìn vào ống kính máy ảnh. Kích thước: 30x40cm. Vật liệu: Vải canvas căng khung hiện đại.",
        hinhanh: "assets/image/huoucaoco5.webp"
    },
    {
        id: 28,
        ten: "Hươu Cao Cổ Tối Giản",
        gia: "165.000đ/Tranh",
        mota: "Bức tranh vẽ theo đường nét đơn giản, tinh tế tạo phong cách Scandinavian hiện đại cho căn hộ. Kích thước: 40x60cm. Vật liệu: Tranh in trên nền gỗ lụa mịn màng.",
        hinhanh: "assets/image/huoucaoco6.webp"
    },
    {
        id: 29,
        ten: "Hươu Cao Cổ Sắc Màu",
        gia: "200.000đ/Tranh",
        mota: "Sự bùng nổ của các mảng màu nghệ thuật đầy cá tính tái hiện hình ảnh chú hươu cao cổ năng động. Kích thước: 45x60cm. Vật liệu: Mặt kính cường lực cao cấp.",
        hinhanh: "assets/image/huoucaoco7.webp"
    },
    {
        id: 30,
        ten: "Gia Đình Hươu Cao Cổ",
        gia: "240.000đ/Tranh",
        mota: "Đội hình ba chú hươu cao cổ lớn nhỏ đứng bên nhau mang lại cảm giác sum vầy, che chở. Kích thước: 50x70cm. Vật liệu: Tranh tráng gương viền composite vân gỗ.",
        hinhanh: "assets/image/huoucaoco8.webp"
    },
    {
        id: 31,
        ten: "Hươu Cao Cổ Thư Thái",
        gia: "180.000đ/Tranh",
        mota: "Dáng đứng ung dung tự tại giữa đồng cỏ xanh, giúp xua tan căng thẳng mệt mỏi mỗi khi ngắm nhìn. Kích thước: 40x60cm. Vật liệu: Vải canvas dập nổi vân sợi cao cấp.",
        hinhanh: "assets/image/huoucaoco9.webp"
    },
    {
        id: 32,
        ten: "Hươu Cao Cổ Giữa Rừng Già",
        gia: "215.000đ/Tranh",
        mota: "Sự kết hợp hoàn hảo giữa vóc dáng chú hươu cùng thảm thực vật phong丰富, tạo điểm nhấn thiên nhiên xanh mát. Kích thước: 50x65cm. Vật liệu: Khung gỗ Composite bọc viền mạ vàng.",
        hinhanh: "assets/image/huoucaoco10.webp"
    }
];

function loadAllproducts() {
    const listContainer = document.getElementById("product-list");
    if (!listContainer) return;

    let htmlContent = "";
    
    products.forEach(product => {
        htmlContent += `
            <div class="col-md-4 product-item mb-4">
                <div class="card p-3 shadow-sm h-100 text-center">
                    <img src="../${product.hinhanh}" alt="Ảnh ${product.ten}" class="img-fluid rounded mb-2" style="max-height: 250px; object-fit: cover;">
                    <h3 class="h5 text-danger fw-bold">${product.ten}</h3>
                    <p class="fw-bold text-success">${product.gia}</p>
                    <p class="text-muted small flex-grow-1">${product.mota}</p>
                    <a href="chi-tiet.html?id=${product.id}" class="btn btn-primary btn-sm w-100 mt-2">Xem chi tiết</a>
                </div>
            </div>
        `;
    });

    listContainer.innerHTML = htmlContent;
}

function loadProductDetail() {
    const detailContainer = document.getElementById("product-detail");
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const product = products.find(p => p.id === productId);

    if (product) {
        detailContainer.innerHTML = `
            <div class="text-center">
                <img src="../${product.hinhanh}" alt="${product.ten}" class="img-fluid rounded mb-3" style="max-width: 100%; height: auto; max-height: 400px; object-fit: cover;">
            </div>
            <h2 class="text-danger text-center fw-bold">${product.ten}</h2>
            <h4 class="text-success text-center">Giá: ${product.gia}</h4>
            <hr>
            <h5>Mô tả chi tiết:</h5>
            <p class="text-muted" style="line-height: 1.6;">${product.mota}</p>
        `;
    } else {
        detailContainer.innerHTML = `<div class="alert alert-danger text-center">Không tìm thấy sản phẩm này rồi bạn ơi!</div>`;
    }
}