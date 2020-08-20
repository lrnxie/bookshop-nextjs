import { useContext, useState, useEffect } from "react";
import Router from "next/router";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import { CartContext } from "../contexts/CartContext";
import BillingInfo from "./BillingInfo";

const CheckoutForm: React.FC = () => {
  const { cart, clearCart } = useContext(CartContext);

  useEffect(() => {
    if (!cart.length) {
      Router.push("/");
    }
  }, []);

  const subtotal =
    cart.length > 0 &&
    cart
      .map((item) => item.price)
      .reduce((prev, next) => prev + next)
      .toFixed(2);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState<boolean | null>(null);
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e: StripeCardElementChangeEvent) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);

    const billingDetails = {
      name: e.currentTarget.customer.value,
      email: e.currentTarget.email.value,
      address: {
        line1: e.currentTarget.address.value,
        city: e.currentTarget.city.value,
        state: e.currentTarget.province.value,
        postal_code: e.currentTarget.postal.value,
      },
    };

    try {
      const { data: clientSecret } = await axios.post("/api/payment_intents", {
        amount: subtotal,
        receipt_email: billingDetails.email,
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setError(paymentMethodReq.error.message);
        setProcessing(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setError(error.message);
        setProcessing(false);
        return;
      }

      setSuccess(true);
      clearCart();
    } catch (err) {
      setError(err.message);
    }
  };

  return success ? (
    <h5 className="text-center mt-4">
      Payment success. Thank you for your purchase.
    </h5>
  ) : (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "1rem" }}>
      <h5>Checkout</h5>

      <Form onSubmit={handleSubmit}>
        <BillingInfo />

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Card Info
          </Form.Label>
          <Col sm={10}>
            <CardElement
              options={{ hidePostalCode: true }}
              className="p-2 mb-2 border rounded"
              onChange={handleChange}
            />
          </Col>
          <Form.Text className="text-muted ml-3">
            Visit{" "}
            <a href="https://stripe.com/docs/testing#cards" target="_blank">
              Stripe Docs
            </a>{" "}
            for test card numbers.
          </Form.Text>
        </Form.Group>

        <Button
          block
          variant="info"
          className="my-2"
          type="submit"
          disabled={!stripe || processing || disabled || error !== ""}
        >
          {processing ? (
            <Spinner animation="border" size="sm" />
          ) : (
            `Pay $${subtotal}`
          )}
        </Button>

        {error && <Form.Text className="text-danger">{error}</Form.Text>}
      </Form>
    </div>
  );
};

export default CheckoutForm;
