import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4 px-5 md:px-0 md:text-base">
        <div className="font-bold text-center flex justify-center items-center gap:6 md:gap-20 md:text-5xl text-3xl">Buy me a Chai <span><img className="invertImg" src="/tea.gif" width={88} alt="" /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding platform for developers to fund their projects.
        </p>
        <p className="text-center md:text-left">
          A place where your fans can buy you a chai. Unlesh the power of ypur fans and get your projects funded.
        </p>
        <div>
          <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Start Here</button>
          </Link>
          
          <Link href={"/about"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Read more</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-8">
      </div>
      <div className="container text-white mx-auto pb-28 pt-14 px-10">
        <h2 className=" text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/man.gif" width={88} alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center text-white">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/coin.gif" width={88} alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center text-white">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/group.gif" width={88} alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center text-white">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-8"></div>

      <div className="container text-white mx-auto pb-28 pt-14 flex flex-col items-center justify-center ">
        <h2 className=" text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* responsive youtube embed */}
        <div className="w-auto h-fit">
        {/* <div className="w-screen"> */}
        <iframe src="https://www.youtube.com/embed/Sklc_fQBmcs?si=-qS34fav46BJ_ID0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}
