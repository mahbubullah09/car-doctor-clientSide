import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);


  const handleDelete = id =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
    
    
    
    
    
                if (data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success',)
                    const remaining = bookings.filter((bookings) => bookings._id !== id);
    
                    setBookings(remaining)
                }
            })
          
        }
      })

   
    
  }
  return (
    <div>
      <h2>total bookings {bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {bookings.map((bookings) => (
              <BookingRow 
              key={bookings._id} 
              bookings={bookings} 
              handleDelete={handleDelete}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
