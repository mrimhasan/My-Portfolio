import "./Engineer.css";

export default function Engineer() {
  const span = "absolute top-0 left-0 bg-black lg:tracking-[8px] w-full";

  const tagLine = [
    {
      first: "Software",
      second: "Engineer",
    },
    {
      first: "Frontend",
      second: "Engineer",
    },
    {
      first: "UI/UX",
      second: "Developer",
    },
    {
      first: "Backend",
      second: "Engineer",
    },
    {
      first: "MERN",
      second: "Developer",
    },
  ];
  return (
    // 3 D cube rotation
    <div
      className="text-center w-full h-[30px]  mt-[10px] mb-[10px] font-normal text-2xl sm:font-extrabold relative transform-3d"
      id="cube"
    >
      <div
        className="absolute top-0 left-0 text-center w-full h-full transform-3d "
        id="Subcube"
      >
        {tagLine.map((items, indx) => (
          <p className={`${span}`} style={{ "--i": indx }} key={indx}>
            {items.first} <span className="text-blue-500">{items.second}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
