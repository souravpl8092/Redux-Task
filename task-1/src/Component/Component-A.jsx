import ComponentB from "./Component-B";
import ComponentC from "./Component-C";

const ComponentA = () => {
  return (
    <div className="compA">
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default ComponentA;
