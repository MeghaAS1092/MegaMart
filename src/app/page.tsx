import LoginComponent from "./components/homepage/logincomponent";
import { FaShieldAlt, FaShippingFast, FaMedal } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen">
        <div className="w-1/2 bg-blue-200 p-6">
          <h1 className="text-3xl font-bold">Shop More.</h1>
          <h1 className="text-3xl font-bold text-blue-600">Save More.</h1>
          <br/>
          <h4 className="font-light">MegaMart is your one-stop marketplace with thousands  <br/> of sellers and millions of products</h4>
          <br/>
          <div className="flex">
            <div className="px-2 py-2"><FaShieldAlt className="h-8 w-8" /></div>
            <div>
              <h3 className="font-semibold">Secure Payments</h3>
              <h4 className="font-light">100% secure & encrypted payments</h4>
            </div>
          </div>
          <br/>
          <div className="flex">
            <div className="px-2 py-2"><FaShippingFast className="h-8 w-8" /></div>
            <div>
              <h3 className="font-semibold">Fast Delivery</h3>
              <h4 className="font-light">Quick delivery at your doorstep</h4>
            </div>
          </div>
          <br/>
          <div className="flex">
            <div className="px-2 py-2"><FaMedal className="h-8 w-8" /></div>
            <div>
              <h3 className="font-semibold">Best Quality</h3>
              <h4 className="font-light">Quality products from trusted sellers</h4>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-lightgray-200 p-6">
          <LoginComponent />
        </div>
      </div>
    </main>
  );
}
