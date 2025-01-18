import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: payments=[] } = useQuery({
        queryKey: ["payments", user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <SectionTitle title="Payment History" subTitle="At a Glance!"></SectionTitle>
            <div>
                
                <div className="overflow-x-auto">
                    <p className="text-2xl font-bold my-6">Total Payments: {payments.length}</p>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Sl no</th>
                                <th>Price</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                payments.map((payment, idx) => <tr key={payment._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>${payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.status}</td>
                                    <td>{payment.date}</td>
                                </tr>
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;