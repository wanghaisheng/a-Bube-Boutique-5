import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="w-full flex flex-col items-center gap-y-14 my-20">
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-5xl">Your cart is empty</h1>
        <Link href="/shop" className="px-10 py-2 bg-black text-white">
          Continue Shopping
        </Link>
      </div>
      <div className="text-center">
        <h4 className="text-2xl">Have an account?</h4>
        <p>
          <span className="border-b-[1px] hover:border-b-[3px] border-black pb-[0.5px] cursor-pointer text-[#7247FF]">
            Log in
          </span>{" "}
          to check out faster
        </p>
      </div>
    </div>
  );
}
