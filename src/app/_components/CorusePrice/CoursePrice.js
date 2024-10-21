const formatPrice = (price) => {
  // Format the price without currency symbol
  const formattedNumber = new Intl.NumberFormat('en-EG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  // Add the currency symbol with a space
  return `E£ ${formattedNumber}`;
};

const CoursePrice = ({ price }) => {
  return (
    <>{formatPrice(price)}</>
  );
}

export default CoursePrice;
