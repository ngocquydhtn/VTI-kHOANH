### react.memo

### dùng khi nào

- Các component có các props không thay đổi thường xuyên
- Các component render lại nhiều lần mà không có sự thay đổi

### cách dùng

```jsx
import React, { memo } from 'react';

export default memo(Content);

export default memo(Content, (prevProps, nextProps) => {
   return isEqual(prevProps.objProp, nextProps.objProp) && isEqual(prevProps.arrProp, nextProps.arrProp);
});

//isEqual(prevProps, nextProps) trả về true, điều đó có nghĩa là không có sự thay đổi nào xảy ra giữa prevProps và nextProps.
//isEqual(prevProps, nextProps) trả về false, điều đó có nghĩa là có sự thay đổi trong props của component. Trong trường hợp này, React Memo sẽ thực hiện quá trình render lại component, cập nhật giao diện với các giá trị props mới.

```

## lưu ý

toán tử ===

React Memo sẽ so sánh props theo kiểu "shallow comparison". Điều này có nghĩa là nếu các props là object hoặc array, React Memo sẽ so sánh reference của chúng. Nếu bạn muốn kiểm tra sự thay đổi sâu hơn trong object hoặc array, bạn có thể sử dụng các kỹ thuật như spread operator hoặc lodash để tạo ra phiên bản mới của object/array.

## kết luận

React Memo là một công cụ hữu ích để tối ưu hóa hiệu suất render trong React. Bằng cách sử dụng React Memo một cách đúng đắn và hiểu rõ cách làm việc của nó, bạn có thể giảm số lần render
