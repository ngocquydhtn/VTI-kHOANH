### useEffect

### dùng khi nào

- Fetching data từ một API:
  Chúng ta có thể sử dụng useEffect để gửi yêu cầu HTTP và lấy dữ liệu từ một API bên ngoài.

- Đăng ký sự kiện:
  Chúng ta có thể sử dụng useEffect để đăng ký các trình lắng nghe sự kiện, chẳng hạn như sự kiện nhấn phím hoặc sự kiện kéo thả chuột.

### cách dùng

```jsx
import React, { useEffect } from "react";

// Cú pháp cơ bản:
useEffect(() => {
  // Logic tác viết ở đây
  // Mã này sẽ chạy sau mỗi lần render
});

//Clean up
useEffect(() => {
  // Lấy dữ liệu từ API
  fetchData();
  // Đăng ký sự kiện
  window.addEventListener("resize", handleResize);
  // Dọn dẹp tác động (hủy đăng ký sự kiện)
  return () => {
    window.removeEventListener("resize", handleResize);
  };
});

//Phụ thuộc dependency:
useEffect(() => {
  // Logic tác động phụ
}, [dependency1]);
```

## lưu ý

- Định rõ phụ thuộc (dependencies)
- Dùng cleanup:
- Lưu ý về thứ tự thực thi:
