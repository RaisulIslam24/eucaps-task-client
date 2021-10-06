/* eslint-disable @next/next/link-passhref */
import { ReactChild, ReactFragment, ReactPortal } from "react";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SubscriberList = () => {
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {

        fetch('https://damp-basin-57545.herokuapp.com/subscribers')
            .then(res => res.json())
            .then(data => setSubscribers(data))

    }, []);

    return (
        <div className="container">
            <div className="p-5 bg-white">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Subscription</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    {
                        subscribers.map(((subscriber: { id: { id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }; checkout: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; email: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; phone: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; address: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }; }) =>
                            // eslint-disable-next-line react/jsx-key
                            <tbody>
                                <tr>
                                    <td>Cycle {subscriber.id.id}</td>
                                    <td>{subscriber.checkout.name}</td>
                                    <td>{subscriber.checkout.email}</td>
                                    <td>{subscriber.checkout.phone}</td>
                                    <td>{subscriber.checkout.address}</td>
                                </tr>
                            </tbody>)
                        )
                    }
                </table>
            </div>
            <div className="text-center">
                <Link href={"/"}>
                    <button className="btn btn-primary">Home Page</button>
                </Link>
            </div>
        </div>
    );
}

export default SubscriberList;