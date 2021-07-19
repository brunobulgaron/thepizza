import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Col } from "react-bootstrap"
import FormContainer from "../../components/FormContainer/FormContainer"
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps"
import { savePaymentMethod } from "../../actions/cartActions"

const PaymentPage = ({ history }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) history.push("/shipping")

  const [paymentMethod, setPaymentMethod] = useState("CreditCard")

  const submitHandler = e => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push("/placeorder")
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Credit Card"
              id="CreditCard"
              name="paymentMethod"
              value="CreditCard"
              checked={paymentMethod === "CreditCard"}
              onChange={e => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Money"
              id="Money"
              name="paymentMethod"
              value="Money"
              checked={paymentMethod === "Money"}
              onChange={e => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentPage
