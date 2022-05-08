import { useEffect } from "react";

const Charts = () => {
  const span = <span className={`bg-slate-600 w-10 h-32`}>10</span>;

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="flex gap-2 items-end">
      <span className={`bg-slate-600 w-10 h-20`}>20</span>
      <span className={`bg-slate-600 w-10 h-52`}>16</span>
      {span}
    </div>
  );
};

export default Charts;
