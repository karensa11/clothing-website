import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeButton({totalPrice}) {
    const totalPriceStripe = totalPrice * 100;
    const publicKey = "pk_test_51H8WaQAvjxoSXfnVhuxqBTzn1EkdKLpKL2JQyYbwDzkkaszpDy46Go7GJC69Y4LsVLkQLhTgpSRqZoWn8XLnlL6g00PlvFcPcq"; // from stripe UI
    const onToken = (token) => {
        console.log(token);
        alert("success payment");
    };
    return (
        <StripeCheckout
            label="Pay now"
            name="Clothing website"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${totalPrice}`}
            amount={totalPriceStripe}
            stripeKey={publicKey}
            token={onToken}
        />
    )
}