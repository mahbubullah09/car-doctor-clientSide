import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  console.log(service);

  const {user} = useContext(AuthContext);

  const { _id, img, title, price } = service;

  const handleOrder = (event) => {
    event.preventDefault();
    const First_Name = event.target.first_name.value;
    const Last_Name = event.target.last_name.value;
    const phone = event.target.phone.value;
    const email = event.target.phone.value;

    const order = {
      First_Name,
      Last_Name,
      phone,
      email,
      _id,
      img,
      title,
      price
    };
    console.log(order);
  };
  return (
    <div>
      <div className="rounded  mb-12 md:mb-0  border border-1 p-20 bg-[#F3F3F3]">
        <form onSubmit={handleOrder}>
          <div className="flex justify-between items-center gap-8 ">
            <div className="relative mb-6 w-full" data-te-input-wrapper-init>
              <input
                type="text"
                className="border block h-12 w-full rounded border-1 bg-white px-3 py-[0.32rem] "
                name="first_name"
                placeholder="Frst Name"
              />
            </div>

            <div className="relative mb-6 w-full" data-te-input-wrapper-init>
              <input
                type="text"
                className="border block h-12 w-full rounded border-1 bg-white px-3 py-[0.32rem] "
                name="last_name"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-8">
            <div className="relative mb-6 w-full" data-te-input-wrapper-init>
              <input
                type="text"
                className="border block h-12 w-full rounded border-1 bg-white px-3 py-[0.32rem] "
                name="phone"
                placeholder="Your Phone"
              />
            </div>

            <div className="relative mb-6 w-full" data-te-input-wrapper-init>
              <input
                type="text"
                className="border block h-12 w-full rounded border-1 bg-white px-3 py-[0.32rem] "
                name="email"
                placeholder="Youre Email"
                defaultValue={user?.email}
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full border border-1 p-2"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#FF3811] w-full rounded py-2 text-white font-bold"
          >
            Order Confirm
          </button>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
