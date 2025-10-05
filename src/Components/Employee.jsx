import react from "react";

function Employee(helo) {
  const { name, age, position } = helo;
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{position}</h1>
    </div>
  );
}
export default Employee;
