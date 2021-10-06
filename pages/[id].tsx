import { useForm } from "react-hook-form";
import { useState } from 'react';
import ProcessPayment from "../components/Payment/ProcessPayment";

const Checkout = (id: string) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState(null);

    const onSubmit = (info: any) => {
        setData(info);
    }

    const handlePaymentSuccess = (paymentId: string) => {
        const subscriberDetails = {
            id,
            paymentId,
            checkout: data
        }
        fetch('https://damp-basin-57545.herokuapp.com/addSubscriber', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscriberDetails)
        })
            .then((res) => res.json())
            .then(data => {
                if (data) {
                    alert('You successfully subscribed')
                }
            })
    }

    return (
        <div className="container col-md-7 col-lg-8 py-5">
            <div className="row">
                <div style={{ display: data ? 'none' : 'block' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row g-3">
                            <div className="col-12">
                                <label className="form-label">Name</label>
                                <input {...register('name', { required: true })} className="form-control" />
                                {errors.name && <span className="error">Name is required</span>}
                            </div>
                        </div>

                        <div className="col-12 pt-2">
                            <label className="form-label">Email</label>
                            <input type="email" {...register('email', { required: true })} className="form-control" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="col-12 pt-2">
                            <label className="form-label">Phone Number</label>
                            < input type="tel" pattern="^\d{10}$" {...register('phone', { required: true })} className="form-control" placeholder="Enter 10 Digit Phone Number. Ex: 1718556127" required />
                            {errors.phone && <span className="error">Phone is required</span>}
                        </div>

                        <div className="col-12 pt-2">
                            <label className="form-label">Address</label>
                            <input type="text" {...register('address', { required: true })} className="form-control" required />
                            <div className="invalid-feedback">
                                Please enter your address.
                            </div>
                        </div>

                        <hr className="my-4" />

                        <input className="w-100 btn btn-primary btn-lg" type="submit" value="Proceed To Checkout" />
                    </form>
                </div >

                <div style={{ display: data ? 'block' : 'none' }}>
                    <h4 className="mb-3">Payment</h4>
                    <div className="mt-3">
                        {data && <ProcessPayment data={data} handlePayment={handlePaymentSuccess}></ProcessPayment>}
                    </div>
                </div>
            </div>
        </div>
    )
}

Checkout.getInitialProps = async ({ query }: any) => {
    const id = query;
    return id;
}

export default Checkout;