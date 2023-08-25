import instructorsData from "../../../data/instructors.json";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
  // console.log(instructorsData);

  return (
    <div>
      <h2>
        - **Popular Instructors Section -** Show relevant pictures related to
        the instructors. Show the top 6 instructors based on the number of
        students in their Class. However, selecting top instructors based on the
        number of students is optional, but you must show 6 instructors.
      </h2>

      <div className='flex flex-wrap justify-center gap-4'>
        {instructorsData.map((PopularInstructors) => (
          <PopularInstructorsCard
            key={PopularInstructors.id}
            PopularInstructors={PopularInstructors}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
