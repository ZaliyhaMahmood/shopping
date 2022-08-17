import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selectors";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);
    console.log("isProcessingPayment: ", isProcessingPayment);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
      }),
    }).then((res) => {
      return res.json();
    });

    setIsProcessingPayment(false);

    if (response.error) {
      alert("Payment Failed!");
    }

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={handlePayment}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
