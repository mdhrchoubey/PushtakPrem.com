import axios from 'axios';


const BookRent=()=>{

  const rentBook = async (bookId) => {
    try {
      const response = await axios.post(`http://localhost:5002/books/rent/${bookId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const returnBook = async (bookId) => {
    try {
      const response = await axios.post(`http://localhost:5002/books/return/${bookId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return(
    <>
    
    </>
  )


}
export default BookRent





















// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const RentBook = ({ bookId }) => {
//   const [isRented, setIsRented] = useState(false);
//   const [rentalPeriod, setRentalPeriod] = useState(1); // default to 1 day

//   const rentBook = async () => {
//     try {
//       const response = await axios.post(
//         `/api/books/${bookId}/rent`,
//         { rentalPeriod }
//       );
//       setIsRented(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (isRented) {
//       const timer = setTimeout(() => {
//         setIsRented(false);
//       }, rentalPeriod * 24 * 60 * 60 * 1000); // convert rental period to milliseconds

//       return () => clearTimeout(timer);
//     }
//   }, [isRented, rentalPeriod]);

//   return (
//     <div>
//       <button onClick={rentBook} disabled={isRented}>
//         {isRented? 'Book rented' : 'Rent book'}
//       </button>
//       <label>
//         Rental period (days):
//         <input
//           type="number"
//           min="1"
//           value={rentalPeriod}
//           onChange={(e) => setRentalPeriod(e.target.value)}
//         />
//       </label>
//     </div>
//   );
// };
// export default RentBook;