### useCallback

useCallback giúp tối ưu hiệu suất bằng cách giảm số lần tạo lại hàm callback trong quá trình render.

### dùng khi nào

- Truyền hàm callback vào các component con

### cách dùng

```jsx
import React, { useCallback } from "react";

const handleClickMe = useCallback(() => {
  setCount((prevCount) => prevCount + 1);
}, []);
```

## lưu ý

- Truyền dependency array vào useCallback để chỉ định các dependencies mà hàm callback phụ thuộc vào. Khi một trong các dependencies thay đổi, useCallback sẽ tạo ra một phiên bản mới của hàm callback. Nếu dependency array rỗng, hàm callback chỉ được tạo một lần duy nhất.
- dependency thay đổi useCallback sẽ tạo ra một phiên bản mới của hàm callback.
- dependency = [] gọi 1 lần

- => useCallback là một công cụ hữu ích để tối ưu hiệu suất và tránh việc tạo lại hàm callback không cần thiết
