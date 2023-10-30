const BookingRow = ({ bookings,handleDelete ,handleStatus}) => {
  console.log(bookings);

  const {
    First_Name,
    Last_Name,
    phone,
    email,
    service_id,
    img,
    title,
    price,
    size,
    date,
    _id,
    status
  } = bookings;

  console.log(status,bookings);


  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded-xl w-24 ">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Size: {size}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
       {
        status === 'confirm' ?

        <p className="text-[#29B170] font-semibold border border-1 text-center border-[#29B170] rounded py-2 px-4">Approved</p>

        :
        <button onClick={() => handleStatus(_id)} className="bg-[#FF3811] py-2 px-4 rounded text-white">Pending</button>
       }
      </th>
    </tr>
  );
};

export default BookingRow;
