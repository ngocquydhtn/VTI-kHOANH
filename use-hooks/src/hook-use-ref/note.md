### useRef

Hook useRef trong React được sử dụng để tham chiếu đến một phần tử DOM cụ thể hoặc để lưu trữ một giá trị duy trì qua các render của component.

### dùng khi nào

- khi tham chiếu đến một phần tử DOM cụ thể hoặc để lưu trữ một giá trị duy trì qua các render của component.
- Lưu trữ giá trị không gây render lại
- Lưu trữ và truy cập vào giá trị trước đó

### cách dùng

```jsx
import React, { useRef } from "react";

const myRef = useRef();
console.log(myRef.current);

return <div ref={myRef}>Hello, World!</div>;
```

## lưu ý

khởi tạo một biến ref bằng cách sử dụng useRef như sau: const myRef = useRef(initialValue);

thay đổi giá trị của biến ref bằng cách gán giá trị mới cho thuộc tính current của biến ref, ví dụ: myRef.current = newValue
Khi giá trị của biến ref thay đổi, React không sẽ kích hoạt việc render lại component.

Lấy giá trị của biến ref: Để truy cập vào giá trị của biến ref, bạn có thể sử dụng myRef.current trong JSX hoặc trong các hàm xử lý sự kiện.
Ví dụ: <input ref={myRef} /> hoặc console.log(myRef.current)

Sự thay đổi giá trị của biến ref không gây render lại: Khi bạn thay đổi giá trị của biến ref, React không thực hiện việc render lại component.
Do đó, nếu bạn muốn sử dụng giá trị biến ref để kích hoạt một render lại, bạn cần sử dụng useState hoặc useEffect.
