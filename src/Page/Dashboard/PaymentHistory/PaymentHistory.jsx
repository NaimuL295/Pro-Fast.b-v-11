import React from 'react';
import useAuth from '../../../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
;
import useAxiosInstance from '../../../Hook/useAxiosInstance/useAxiosInstance';

const PaymentHistory = () => {
    const {user ,loading}=useAuth();
    const axiosSecure=useAxiosInstance()
    const {isPending,data:payment=[]}=useQuery({
        queryKey:["payments",user?.email],
           queryFn:async ()=>{ 
            const res=await axiosSecure.get(`/payments?email=${user.email}`)
         return res.data;
        }
    })
    if (isPending) {
        return(
            <> <h1>loading .....</h1></>
        )
    }
return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Parcel ID</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">Paid At</th>
              </tr>
            </thead>
            <tbody>
              {payment.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No payment history found.
                  </td>
                </tr>
              ) : (
                payment.map((item, index) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item?.parcelId}</td>
     
                    <td className="px-4 py-2">৳ {item?.amount}</td>

                    <td className="px-4 py-2">{item?.transactionId}</td>
                    <td className="px-4 py-2">{new Date(item?.paid_at).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

};

export default PaymentHistory;