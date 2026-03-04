import Comp2 from "./Comp2";

function Comp1() {
  return (
    <div>
      <h2>მე ვარ Comp1 კომპონენტი</h2>

      {/* აქ ჩავამატეთ მეოთხე კომპონენტი */}
      <Comp2 />
    </div>
  );
}

export default Comp1;



