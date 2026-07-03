// 1. KHAI BÁO MẢNG DỮ LIỆU SẢN PHẨM (Đảm bảo viết đúng từ khóa "products")
const products = [
    {
        id: 1,
        ten: "Capybara Hôn chụt chụt",
        gia: "300đ/Hình",
        mota: "Khoảnh khắc siêu ngọt ngào và đáng yêu của hai chú chuột Capybara đang thơm nhau. Thích hợp làm quà tặng cho các cặp đôi hoặc trang trí phòng ngủ lãng mạn.",
        hinhanh: "assets/image/capybara1.webp"
    },
    {
        id: 2,
        ten: "Capybara suy tình",
        gia: "350đ/Hình",
        mota: "Chú chuột bộ dáng cô đơn đang lặng lẽ ngắm nhìn mặt nước bình yên, mang đậm bầu không khí suy tư, trầm mặc cho những ngày đầy tâm trạng.",
        hinhanh: "assets/image/capybara2.webp"
    },
     {
        id: 4,
        ten: "Capybara",
        gia: "350đ/Hình",
        mota: "Bức ảnh bắt trọn góc đứng nghiêng đầy thần thái của bộ trưởng bộ ngoại giao làng động vật. Phong thái ung dung, tự tại không lẫn vào đâu được.",
        hinhanh: "assets/image/capybara4.webp"
    },
     {
        id: 5,
        ten: "Gia đình Capybara",
        gia: "350đ/Hình",
        mota: "Hình ảnh cả gia đình Capybara đang cùng nhau ngâm mình thư giãn dưới dòng nước mát, biểu tượng cho sự gắn kết, ấm áp và hạnh phúc gia đình.",
        hinhanh: "assets/image/capybara5.webp"
    },
     {
        id: 6,
        ten: "Capybara selfie",
        gia: "350đ/Hình",
        mota: "Góc chụp cận mặt bá đạo cận cảnh nét mặt nghiêm túc nhưng lại vô cùng hài hước của chú Capybara, tạo điểm nhấn vui nhộn cho không gian làm việc.",
        hinhanh: "assets/image/capybara6.jpg"
    },
    {
        id: 3,
        ten: "Capybara góc nghiêng",
        gia: "400đ/Hình",
        mota: "Góc nghiêng thần thánh kết hợp cùng chiếc mũ đồ ăn độc lạ trên đầu. Biểu cảm bất biến giữa dòng đời vạn biến, mang lại nguồn năng lượng tích cực, giải trí mỗi ngày.",
        hinhanh: "assets/image/capybara3.webp"
    }
];

// 2. HÀM HIỂN THỊ DANH SÁCH SẢN PHẨM TẠI PAGE8.HTML
function loadAllproducts() {
    const listContainer = document.getElementById("product-list");
    if (!listContainer) return;

    let htmlContent = "";
    
    products.forEach(product => {
        htmlContent += `
            <div class="col-md-4 product-item mb-4">
                <div class="card p-3 shadow-sm text-center">
                    <img src="../${product.hinhanh}" alt="Ảnh ${product.ten}" class="img-fluid rounded mb-2" style="max-height: 250px; object-fit: cover;">
                    <h3 class="h5 text-danger">${product.ten}</h3>
                    <p class="fw-bold text-success">${product.gia}</p>
                    <p class="text-muted small">${product.mota}</p>
                    <a href="../js/chi-tiet.html?id=${product.id}" class="btn btn-primary btn-sm w-100">Xem chi tiết</a>
                </div>
            </div>
        `;
    });

    listContainer.innerHTML = htmlContent;
}

// 3. HÀM HIỂN THỊ CHI TIẾT SẢN PHẨM TẠI CHI-TIET.HTML
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
            <h2 class="text-danger text-center">${product.ten}</h2>
            <h4 class="text-success text-center">Giá: ${product.gia}</h4>
            <hr>
            <h5>Mô tả sản phẩm:</h5>
            <p class="text-muted">${product.mota}</p>
        `;
    } else {
        detailContainer.innerHTML = `<div class="alert alert-danger text-center">Không tìm thấy sản phẩm này!</div>`;
    }
}