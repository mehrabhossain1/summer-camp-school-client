const PopularClassesCard = ({ popularClass }) => {
  //   console.log(popularClass.image);

  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={popularClass.image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{popularClass.title}</h2>
        <p>{popularClass.description}</p>
      </div>
    </div>
  );
};

export default PopularClassesCard;
