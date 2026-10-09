// Total of a cart in đồng: subtotal + VAT + shipping, rounded to the whole đồng.
// See README.md for the specification.
export function cartTotal(items, options) {
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError(`price must not be negative: ${item.name}`)
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError(`qty must be a positive integer: ${item.name}`)
    }
  }

  if (items.length === 0) return 0

  const { vatRate, freeShipFrom, shipFee } = options
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  return Math.round(subtotal + vat + shipping)
}
