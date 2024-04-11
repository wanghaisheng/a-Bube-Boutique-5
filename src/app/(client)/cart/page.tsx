export default function CartPage() {
  return (
    <div className="">
      <main className="w-[70%] mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl">Your Cart</h1>
          <p className="underline">Continue Shopping</p>
        </div>
        <table className="w-full">
          <thead className="w-full">
            <tr className="grid grid-cols-12 border-b-[1px] border-gray-400 pb-4">
              <th className="text-left col-span-2">
                <p className="font-light text-gray-500">product</p>
              </th>
              <th className="text-left bg-red-200 col-span-5">
                <p className="opacity-0">description</p>
              </th>
              <th className="text-left bg-blue-300 col-span-3">
                <p className="font-light text-gray-500">quantity</p>
              </th>
              <th className="text-left  bg-green-200 col-span-2">
                <p className="font-light text-gray-500">total</p>
              </th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </main>
    </div>
  );
}
