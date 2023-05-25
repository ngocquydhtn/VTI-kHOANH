### useState hook

### dùng khi nào

- khi muốn dữ liệu thay đổi thì
- giao diện tự động được cập nhập ( render lại theo dữ liệu)

### cách dùng

```jsx
import {useState} from 'react';

function Component() {
    const [state, setState] = useState(initState);
    ...code...
}
```

## lưu ý

- component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- set state với callback?
- set state là thay thế state bằng giá trị mới

## kết luận

useState là một hook trong React được sử dụng để đơn giản hóa việc thể hiện
trạng thái của dữ liệu ra giao diện người dùng (UI).
Khi bạn sử dụng useState thì React sẽ tạo ra một binding dữ liệu một chiều (từ state của component tới UI).
Khi state thay đổi tự động React sẽ xử lý để UI được cập nhật lại. Điều này được React xử lý tự động cho chúng ta, vì vậy khi làm việc với React + useState hook các bạn không cần phải thao tác DOM thủ công như khi code thuần với Javascript nhé.
