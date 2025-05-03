import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-32 pl-8 pr-8 w-full text-center">
      <div className="text-4xl p-8">Welcome to Movie Seat Picker</div>
      <Link
        className="text-2xl border-2 border-gray-600 bg-black rounded-xl p-2 invert-0 hover:invert transition-all duration-300 w-full"
        href={"/movies"}
      >
        Proceed to see our current movies
      </Link>
    </div>
  );
};

export default Home;
