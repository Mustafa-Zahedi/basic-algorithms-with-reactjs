import { useEffect } from "react";

const Charts = () => {
  setInterval(() => {
    console.log(new Date());
  }, 1000);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="flex gap-2 items-end">
      <span className={`bg-slate-600 w-10 h-${20}`}>20</span>
      <span className={`bg-slate-600 w-10 h-${24}`}>24</span>
      <span className={`bg-slate-600 w-10 h-${10}`}>10</span>
    </div>
  );
};

export default Charts;
