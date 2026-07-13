const products = [
    {
        id: 1,
        ten: "Capybara Hôn chụt chụt",
        gia: "150.000đ/Tranh",
        mota: "Khoảnh khắc siêu ngọt ngào và đáng yêu của hai chú chuột Capybara đang thơm nhau. Thích hợp làm quà tặng cho các cặp đôi hoặc trang trí phòng ngủ lãng mạn.",
        hinhanh: "assets/image/capybara1.webp"
    },
    {
        id: 2,
        ten: "Capybara suy tình",
        gia: "180.000đ/Tranh",
        mota: "Chú chuột bộ dáng cô đơn đang lặng lẽ ngắm nhìn mặt nước bình yên, mang đậm bầu không khí suy tư, trầm mặc cho những ngày đầy tâm trạng.",
        hinhanh: "assets/image/capybara2.webp"
    },
    {
        id: 3,
        ten: "Capybara chuẩn dáng",
        gia: "180.000đ/Tranh",
        mota: "Bức ảnh bắt trọn góc đứng nghiêng đầy thần thái của bộ trưởng bộ ngoại giao làng động vật. Phong thái ung dung, tự tại không lẫn vào đâu được.",
        hinhanh: "assets/image/capybara3.webp"
    },
    {
        id: 4,
        ten: "Gia đình Capybara",
        gia: "220.000đ/Tranh",
        mota: "Hình ảnh cả gia đình Capybara đang cùng nhau ngâm mình thư giãn dưới dòng nước mát, biểu tượng cho sự gắn kết, ấm áp và hạnh phúc gia đình.",
        hinhanh: "assets/image/capybara4.webp"
    },
    {
        id: 5,
        ten: "Capybara selfie",
        gia: "120.000đ/Tranh",
        mota: "Góc chụp cận mặt bá đạo cận cảnh nét mặt nghiêm túc nhưng lại vô cùng hài hước của chú Capybara, tạo điểm nhấn vui nhộn cho không gian làm việc.",
        hinhanh: "assets/image/capybara5.webp"
    },
    {
        id: 7,
        ten: "Capybara Nuông Chiều",
        gia: "160.000đ/Tranh",
        mota: "Khoảnh khắc đáng yêu khi bộ trưởng được nhân viên chăm sóc tận tình đút từng miếng dưa hấu mát lạnh. Bức ảnh mang lại cảm giác được nuông chiều và thư giãn tuyệt đối.",
        hinhanh: "assets/image/capybara7.webp"
    },
    {
        id: 8,
        ten: "Capybara Ngủ Nướng",
        gia: "150.000đ/Tranh",
        mota: "Góc chụp cận cảnh đàn Capybara đang chìm vào giấc ngủ say nồng, lười biếng đè lên nhau. Một bức tranh hoàn hảo để tiếp thêm năng lượng vô tri cho những ngày cuối tuần.",
        hinhanh: "assets/image/capybara8.webp"
    },
    {
        id: 9,
        ten: "Capybara Tắm Khử Thâm",
        gia: "190.000đ/Tranh",
        mota: "Bức ảnh bắt trọn khoảnh khắc chú chuột lội nước chill chill bên cạnh những quả quả quýt thả bồn đúng chuẩn phong cách Nhật Bản. Giúp giải tỏa mọi áp lực ngay khi nhìn vào.",
        hinhanh: "assets/image/capybara9.webp"
    },
    {
        id: 10,
        ten: "Capybara Hướng Về Tương Lai",
        gia: "175.000đ/Tranh",
        mota: "Hai chú Capybara cùng nhau đứng trên đỉnh đồi lộng gió, ngước mắt nhìn về một phương xa xăm đầy hoài bão. Phong cảnh tối giản, mang chiều sâu nghệ thuật tinh tế.",
        hinhanh: "assets/image/capybara10.webp"
    },
    {
        id: 11,
        ten: "Đại Gia Đình Capybara",
        gia: "250.000đ/Tranh",
        mota: "Bức ảnh sum vầy của cả một đại gia đình chuột lang nước trên bãi cỏ xanh mướt. Thích hợp để trang trí phòng khách nhằm tạo không khí ấm cúng, gắn kết thành viên.",
        hinhanh: "assets/image/capybara11.webp"
    },
    {
        id: 12,
        ten: "Capybara Hảo Hán",
        gia: "140.000đ/Tranh",
        mota: "Dáng đứng hiên ngang, độc hành giữa thiên nhiên hoang dã đầy bản lĩnh của một chú Capybara trưởng thành. Thần thái lạnh lùng, phong trần nhưng không kém phần hài hước.",
        hinhanh: "assets/image/capybara12.webp"
    },
    {
        id: 6,
        ten: "Capybara Đội Đồ Ăn",
        gia: "200.000đ/Tranh",
        mota: "Góc nghiêng thần thánh kết hợp cùng chiếc mũ đồ ăn độc lạ trên đầu. Biểu cảm bất biến giữa dòng đời vạn biến, mang lại nguồn năng lượng tích cực mỗi ngày.",
        hinhanh: "assets/image/capybara6.jpg"
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
                    <a href="../js/chi-tiet.html?id=${product.id}" class="btn btn-primary btn-sm w-100 mt-2">Xem chi tiết</a>
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