# AI-LOG.md — IA#1 cartTotal

## 2026-10-09 — chuẩn bị repo và viết brief
`Tool:` Claude (Claude Code, qua Claude app).  
`Asked for:` đọc đề, lập kế hoạch, sao chép starter repo wad-cart-starter và soạn brief.md.  
`Kept:` cấu trúc repo của starter (src/cart.js, test/cart.test.js, package.json) không đổi.  
`Changed:` thêm mục `9.` trong phần `test cần có` của file `brief.md`.   
`Rejected:` không  
`By hand:` điền các dòng Changed / Rejected / By hand của entry này; thêm mục 9 (qty âm) vào brief.md; tạo repo GitHub IA1_WAD và nối remote.

## 2026-10-09 — tests cho cartTotal (commit e861501)
`Tool:` Claude (Claude Code, qua Claude app).  
`Asked for:` viết test trong test/cart.test.js theo danh sách 9 test trong brief.md.  
`Kept:` cả 9 test; giữ nguyên test có sẵn `the example from the slides`.  
`Changed:` không.  
`Rejected:` không.  
`By hand:` không viết dòng nào; đã đọc lại để đối chiếu với README. Hiểu vì sao các test lẻ đặt `vatRate: 0` (để mỗi test chỉ fail vì một lý do).

## 2026-10-09 — cài đặt cartTotal (commit fb282a7)
`Tool:` Claude (Claude Code, qua Claude app).  
`Asked for:` cài đặt cartTotal trong src/cart.js cho tất cả test xanh, theo brief.md.  
`Kept:` toàn bộ: kiểm tra RangeError trên từng item trước, giỏ rỗng trả 0, `reduce` tính subtotal, `Math.round` ở cuối.  
`Changed:` không.  
`Rejected:` không dùng `toFixed` (đã cấm trong brief vì trả về string).  
`By hand:` không.

## 2026-10-09 — harness: CLAUDE.md, Prettier, CI (commit aed9865)
`Tool:` Claude (Claude Code, qua Claude app).  
`Asked for:` rules file, một gate format/lint và CI chạy khi push.  
`Kept:` CLAUDE.md, Prettier 3.3.3 (devDependency), `.prettierrc.json`, `.github/workflows/ci.yml`.  
`Changed:` không.  
`Rejected:` không.  
`By hand:` tạo repo GitHub; kiểm tra CI trên tab Actions.

## 2026-10-09 — SELF_ASSESSMENT_REPORT.md
`Tool:` Claude (Claude Code, qua Claude app).  
`Asked for:` soạn bản nháp tự chấm theo rubric, có bằng chứng cho từng tiêu chí.  
`Kept:` bảng và bằng chứng.  
`Changed:` không  
`Rejected:` không.  
`By hand:` 24127476 - Nguyễn Trần Trung Nhân
