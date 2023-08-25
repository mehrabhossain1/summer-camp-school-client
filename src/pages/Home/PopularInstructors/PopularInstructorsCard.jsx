const PopularInstructorsCard = ({ PopularInstructors }) => {
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={PopularInstructors.image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{PopularInstructors.name}</h2>
        <p>Expert In: {PopularInstructors.expertise}</p>
      </div>
    </div>
  );
};

export default PopularInstructorsCard;
