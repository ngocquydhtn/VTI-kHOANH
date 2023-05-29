### useMemo

useMemo là một hook trong React để memoize (lưu trữ) một giá trị tính toán. Nó giúp tối ưu hiệu suất bằng cách tránh tính toán lại giá trị nếu các dependencies không thay đổi.

### dùng khi nào

- Tính toán giá trị phức tạp: Khi bạn cần tính toán một giá trị phức tạp, ví dụ như kết quả của một hàm hoặc biểu thức, và muốn tránh việc tính toán lại mỗi lần component render lại,
- Sử dụng trong dependency của useEffect: Khi sử dụng useEffect và muốn chỉ định một giá trị là dependency, bạn có thể sử dụng useMemo để memoize giá trị đó và tránh việc chạy lại useEffect nếu giá trị không thay đổi.

### cách dùng

```jsx
import React, { useMemo } from "react";

const total = useMemo(() => {
  const result = products.reduce((total, product) => {
    console.log(11111);
    return total + +product.price;
  }, 0);
  return result;
}, [products]);
```

## lưu ý

- Khi dependencies trong dependency array thay đổi, useMemo sẽ tính toán lại giá trị và trả về giá trị mới.
- ependency array vào useMemo để chỉ định các dependencies mà giá trị phụ thuộc vào. Khi một trong các dependencies thay đổi, useMemo sẽ tính toán lại giá trị. Nếu dependency array rỗng, giá trị sẽ chỉ được tính toán một lần duy nhất.
