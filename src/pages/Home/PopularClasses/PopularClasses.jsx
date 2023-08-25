import classesData from "../../../data/classes.json";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const popularClassesData = [...classesData].sort(
    (a, b) => b.numberOfStudents - a.numberOfStudents
  );
  // console.log(popularClassesData);

  return (
    <div>
      <h2>
        - **Popular Classes Section -** Show relevant pictures related to the
        classes or activities. Have the top 6 classes based on the number of
        students.
      </h2>

      <div className='flex flex-wrap justify-center gap-4'>
        {popularClassesData.map((popularClass) => (
          <PopularClassesCard
            key={popularClass.id}
            popularClass={popularClass}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
