# Self-assessment — IA#1

Submitted by: 24127476 - Nguyễn Trần Trung Nhân  
Repository: https://github.com/TrungNhan8386/IA1_WAD

Total I claim: 90 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 29 | `src/cart.js`; `npm test` 9/9 green. Worked example returns 467400 as a number (tests `the example from the slides`, `returns a number, not a string`); threshold (`shipping is free when the subtotal equals the threshold`); empty cart (`an empty cart returns 0, with no VAT and no shipping`); RangeError for negative price, qty 1.5, 0 and -2. Commit fb282a7. |
| Tests | 20 | 18 | `test/cart.test.js`: 9 tests, one rule each; edge-case tests use `vatRate: 0` so each fails for one reason only. Commit e861501. |
| Harness | 20 | 18 | `CLAUDE.md` (stack, commands, 4 "Never" rules); gate = `npm test` + `npm run format:check` (Prettier); `.github/workflows/ci.yml` runs both on every push. Commit aed9865. CI run: [dán link lần chạy xanh trên tab Actions] |
| Brief | 15 | 14 | `brief.md`: files it may touch, contract, RangeError cases, "Không thêm dependency", list of tests, definition of done. |
| AI-LOG.md | 15 | 11 | `AI-LOG.md`: one entry per task with commit hashes; honest that Claude wrote the code, tests and harness, so few Changed/Rejected lines. |

## What I did not manage

- Mình không tự viết code hay test; toàn bộ do Claude viết theo brief, mình đọc lại và chạy kiểm tra.
- AI-LOG có ít dòng Changed / Rejected vì mình giữ nguyên gần như mọi thứ trợ lý tạo ra.
- Chưa kiểm chứng việc một người khác dùng brief.md có ra cùng kết quả hay không.

## What I would do differently

Viết một phần test bằng tay trước khi giao cho trợ lý, và ghi lại những chỗ mình phản biện kết quả của nó.
