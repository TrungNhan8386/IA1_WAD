# Brief — IA#1 cartTotal

Đây là brief giao cho trợ lý AI. Ai cầm brief này đưa cho một trợ lý khác
cũng phải nhận được cùng một kết quả.

## Nhiệm vụ

Cài đặt hàm `cartTotal(items, options)` trong `src/cart.js` và viết test cho nó
trong `test/cart.test.js`, đúng theo đặc tả bên dưới.

## Phạm vi — file được phép sửa

- `src/cart.js` — chỉ phần thân của `cartTotal` (giữ nguyên `export function cartTotal(items, options)`).
- `test/cart.test.js` — được thêm test; **không được sửa hay xoá** test
  `the example from the slides`.

Không tạo file mới, không sửa `package.json`, `README.md` hay bất kỳ file nào khác.

## Ràng buộc

- JavaScript thuần, ES modules (`"type": "module"`), Node 20+.
- **Không thêm dependency** nào (không `npm install`, không sửa `package.json`).
- Test dùng `node:test` và `node:assert/strict`, chạy bằng `npm test`.
- Không dùng `toFixed` (trả về string). Kết quả phải là `number`.

## Hợp đồng (contract)

```js
cartTotal(items, options) -> number
// items:   [{ name: string, price: number, qty: number }]
// options: { vatRate: number, freeShipFrom: number, shipFee: number }
```

1. `subtotal` = tổng `price × qty` của mọi item.
2. `vat` = `subtotal × vatRate`.
3. `shipping` = `0` nếu `subtotal >= freeShipFrom`, ngược lại là `shipFee`.
4. Trả về `subtotal + vat + shipping`, làm tròn đến đồng bằng `Math.round`,
   kiểu `number`.
5. Giỏ rỗng (`items` là `[]`) trả về `0` — không VAT, không phí ship.

Ví dụ mẫu: 2 × 180000 + 1 × 45000 = 405000; VAT 8% = 32400; chưa tới ngưỡng
500000 nên ship 30000 → **467400**.

## Trường hợp lỗi — ném `RangeError`

- Một item có `price` âm (`price < 0`). Giá `0` là hợp lệ.
- Một item có `qty` không phải số nguyên dương: `0`, số âm, hoặc số lẻ như `1.5`.

Kiểm tra lỗi trên từng item trước khi tính toán.

## Test cần có (mỗi test chỉ có một lý do để fail)

1. Ví dụ mẫu trả về `467400` (test có sẵn).
2. Kết quả là kiểu `number` (`typeof` là `'number'`).
3. Giỏ rỗng trả về `0`.
4. `subtotal` đúng bằng `freeShipFrom` thì phí ship bằng `0`.
5. `subtotal` thấp hơn ngưỡng 1 đồng thì có tính `shipFee`.
6. `price` âm ném `RangeError`.
7. `qty: 1.5` ném `RangeError`.
8. `qty: 0` ném `RangeError`.
9. `qty: âm` ném `RangeError`. 

Test phải kiểm tra theo đặc tả (giá trị đầu vào → kết quả mong đợi), không
kiểm tra chi tiết cài đặt bên trong.

## Xong khi

`npm test` xanh toàn bộ và chỉ hai file trong phạm vi bị thay đổi.
