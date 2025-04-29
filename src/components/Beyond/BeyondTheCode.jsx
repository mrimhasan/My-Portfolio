

export default function BeyondTheCode() {
  return (
    <>
      {/* vdo div */}
      <div className="relative w-full h-[300px] lg:h-[500px] overflow-hidden shadow-xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/beyound/zenitsu.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 text-white sm:p-10 pt-10">
          <h1 className="text-sm sm:text-3xl font-bold max-[600px]:text-nowrap max-[600px]:text-center">
          Balancing Lifestyle, Strength and Passion
          </h1>
        </div>
      </div>
    </>
  );
}
//export default BeyondTheCode
