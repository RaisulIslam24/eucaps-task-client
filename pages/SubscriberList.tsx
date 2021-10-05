/* eslint-disable @next/next/link-passhref */
import { ReactChild, ReactFragment, ReactPortal } from "react";
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/subscribers');
    const data = await res.json();
    return {
        props: { subscribers: data }
    }
}

const SubscriberList = ({ subscribers }: { subscribers: any }) => {
    return (
        <div className="container">
            <div className="p-5 bg-white">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Subscription</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">phone</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    {
                        subscribers.map(((subscriber: { id: { id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }; checkout: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; email: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; phone: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; address: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }; }) =>
                            // eslint-disable-next-line react/jsx-key
                            <tbody>
                                <tr>
                                    <td>{subscriber.id.id}</td>
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