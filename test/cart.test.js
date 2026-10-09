import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

// vatRate 0 in the cases below so each test only depends on one rule.
const noVat = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }

test('returns a number, not a string', () => {
  const items = [{ name: 'Bút', price: 12345, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(typeof cartTotal(items, options), 'number')
})

test('an empty cart returns 0, with no VAT and no shipping', () => {
  assert.equal(cartTotal([], noVat), 0)
})

test('shipping is free when the subtotal equals the threshold', () => {
  const items = [{ name: 'Balo', price: 500000, qty: 1 }]
  assert.equal(cartTotal(items, noVat), 500000)
})

test('shipping is charged one đồng below the threshold', () => {
  const items = [{ name: 'Balo', price: 499999, qty: 1 }]
  assert.equal(cartTotal(items, noVat), 529999)
})

test('a negative price throws RangeError', () => {
  const items = [{ name: 'Lỗi', price: -1, qty: 1 }]
  assert.throws(() => cartTotal(items, noVat), RangeError)
})

test('a fractional qty throws RangeError', () => {
  const items = [{ name: 'Lỗi', price: 1000, qty: 1.5 }]
  assert.throws(() => cartTotal(items, noVat), RangeError)
})

test('qty 0 throws RangeError', () => {
  const items = [{ name: 'Lỗi', price: 1000, qty: 0 }]
  assert.throws(() => cartTotal(items, noVat), RangeError)
})

test('a negative qty throws RangeError', () => {
  const items = [{ name: 'Lỗi', price: 1000, qty: -2 }]
  assert.throws(() => cartTotal(items, noVat), RangeError)
})
