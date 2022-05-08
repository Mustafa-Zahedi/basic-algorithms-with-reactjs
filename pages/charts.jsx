import { useEffect } from "react";

const Charts = () => {
  const c = [
    {
      32: "",
    },
    {
      20: "",
    },
    {
      40: "",
    },
    {
      10: "",
    },
    {
      52: "",
    },
  ];

  console.log("A: ", c);
  for (let i = 1; i < c.length; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(+Object.keys(c[j]));
      if (+Object.keys(c[i]) < +Object.keys(c[j])) {
        let temp = c[i];
        c[i] = c[j];
        c[j] = temp;
      }
    }
  }
  console.log("a: ", c);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div key={12} className="flex gap-2 items-end bg-slate-300 p-10 rounded-md">
      {c.map((e) => (
        <span
          key={Object.keys(e)}
          className={`bg-slate-600 w-10 h-${Object.keys(e)}`}
        >
          {Object.keys(e)}
        </span>
      ))}
    </div>
  );
};

export default Charts;
