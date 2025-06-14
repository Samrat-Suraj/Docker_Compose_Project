import { useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Minus, Plus } from "lucide-react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger", description: "Lorem ipsum, dolor sit amet", price: 200, quantity: 2, image: "https://downtownstjohns.com/wp-content/themes/dtsj/img/full-burger-battle.png" },
    { id: 2, name: "Pizza", description: "Lorem ipsum, dolor sit amet", price: 350, quantity: 1, image: "https://downtownstjohns.com/wp-content/themes/dtsj/img/full-burger-battle.png" },
    { id: 3, name: "Fries", description: "Lorem ipsum, dolor sit amet", price: 100, quantity: 3, image: "https://downtownstjohns.com/wp-content/themes/dtsj/img/full-burger-battle.png" },
  ]);

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: action === "increase" ? item.quantity + 1 : item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="mt-10 max-w-screen-lg mx-auto px-4">
      <h1 className="text-xl text-center font-bold text-gray-700">Your Shopping Cart</h1>
      <Table className="border mt-7 border-gray-200 rounded-lg">
        <TableCaption className="text-xl font-semibold text-gray-700">Items in your cart</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[340px] text-left lg:text-[13px] text-[10px]">Product</TableHead>
            <TableHead className="text-left lg:text-[13px] text-[10px]">Price</TableHead>
            <TableHead className="text-left lg:text-[13px] text-[10px]">Total</TableHead>
            <TableHead className="text-left lg:flex hidden lg:text-[13px] text-[10px]">Remove</TableHead>
            <TableHead className="lg:text-end text-center lg:text-[13px] text-[10px]">Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id} className="hover:bg-gray-50 transition-all duration-300">
              <TableCell className="font-medium py-4">
                <div className="flex items-center gap-4 sm:gap-2">
                  <img
                    className="h-16 w-16 rounded-md object-cover hidden sm:block"
                    src={item.image}
                    alt={item.name}
                  />
                  <div>
                    <p className="font-bold lg:text-lg text-sm text-gray-800">{item.name}</p>
                    <p className="text-[10px] lg:flex hidden text-gray-500">{item.description}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-gray-700 lg:text-[13px] text-[10px] ">Rs: {item.price}/-</TableCell>
              <TableCell className="text-gray-700 lg:text-[13px] text-[10px]">Rs: {item.price * item.quantity}/-</TableCell>
              <TableCell className="hidden sm:table-cell">
                <div
                  onClick={() => handleRemoveItem(item.id)}
                  className="flex justify-center items-center bg-red-600 text-white rounded-full w-8 h-8 cursor-pointer hover:bg-red-700 transition-all"
                >
                  X
                </div>
              </TableCell>
              <TableCell className="text-end">
                <div className="flex items-center justify-end rounded-full lg:py-2 lg:px-4 gap-4">
                  <div className="bg-gray-200 flex items-center justify-center gap-3  lg:py-1 lg:px-3 p-1 rounded-full">
                    <Plus
                      size={16}
                      className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
                      onClick={() => handleQuantityChange(item.id, "increase")}
                    />
                    <p className="text-sm text-gray-600">{item.quantity}</p>
                    <Minus
                      size={16}
                      className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center sm:items-start sm:space-x-4">
        <div className="mb-4 sm:mb-0">
          <p className="text-xl font-semibold text-gray-700">Total: Rs: {getTotalPrice()}/-</p>
        </div>
        <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-all">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
