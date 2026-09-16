export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="font-display font-800 text-lg text-cream mb-2">
            Next<span className="text-brand">Card</span>
          </p>
          <p className="text-cream/60">
            Your everyday marketplace for electronics, fashion and home
            goods.
          </p>
        </div>

        <div>
          <p className="font-semibold text-cream mb-2">Customer care</p>
          <ul className="space-y-1 text-cream/60">
            <li>Help center</li>
            <li>How to order</li>
            <li>Returns & refunds</li>
            <li>Track my order</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-cream mb-2">About NextCard</p>
          <ul className="space-y-1 text-cream/60">
            <li>About us</li>
            <li>Careers</li>
            <li>Sell on NextCard</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-cream mb-2">Payment methods</p>
          <ul className="space-y-1 text-cream/60">
            <li>Cash on delivery</li>
            <li>Mobile banking</li>
            <li>Debit / credit card</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 text-center text-xs text-cream/50 py-4">
        © 2026 NextCard. All rights reserved.
      </div>
    </footer>
  );
}
