import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-03-02",
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { amount, receipt_email } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: "cad",
        receipt_email,
      });

      return res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
