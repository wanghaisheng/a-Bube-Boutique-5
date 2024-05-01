"use client";
import { useAppSelector } from "@/lib/hook";
import CartItem from "./cartItem";
import { useState } from "react";
import { paystackPay } from "@/app/(client)/actions/actions";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function CartItems() {
  const { cart, total } = useAppSelector((state) => state.cart);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  

  const handleCheckout = async (): Promise<void> => {
    // Your code logic goes here
    setSubmitting(true);
    if (isSignedIn) {
      const paystackResponse = await paystackPay({
        amount: total, //amount to be transacted by paystack
        email: "justinequartz@gmail.com", //email of the person making the payment
        currency: "NGN", //currency eg KES or USD if you are in kenya
        callback_url: "http://localhost:3000/confirmpayment", //route where paystack will redirect with reference code after a successful payment
        channels: ["mobile_money"], //channel to be used for making payment eg bank mobile_money
      });
      setSubmitting(false);
      if (paystackResponse.status === true) {
        window.location.href = paystackResponse.data.authorization_url; //extract the redirection and user it for redirecting the donor to the unique page generated for them to make payment
      }
    } else {
      setSubmitting(false);
      router.push("/sign-in")
    }
  };
  return (
    <>
      <div className="w-full flex flex-col gap-y-4 py-6 sm:py-8">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="w-full flex flex-col items-end gap-y-4">
        <div className="text-right">
          <p className="text-lg font-semibold">
            <span className="mr-4 text-base font-normal">Estimated total</span>{" "}
            <span className="font-normal">&#8358;</span>
            {total.toLocaleString()}
          </p>
          <p className="text-xs">
            Tax included. Shipping and discounts calculated at checkout.
          </p>
        </div>
        <button
          className="w-72 py-2 bg-black text-white hover:scale-[1.02] transition-all duration-300"
          onClick={handleCheckout}
        >
          {submitting ? "Please wait ..." : "Checkout"}
        </button>
      </div>
    </>
  );
}
