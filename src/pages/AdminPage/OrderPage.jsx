import OrderTable from '@/components/component/Admin/OrderTable'
import React from 'react'

const OrderPage = () => {
  return (
    <div>
      <h1 className='rounded-lg p-4 max-w-3xl mx-auto bg-white text-3xl font-bold'>Order Page</h1>
      <div className='mt-2'>
        {
          [1, 2, 2, 2, 2, 2, 2, 2, 2].map((item, index) => {
            return (
              <OrderTable />
            )
          })
        }
      </div>
    </div>
  )
}

export default OrderPage