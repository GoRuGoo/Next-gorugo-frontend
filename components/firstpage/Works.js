import Link from "next/link";
import Image from "next/image";
import Worksdata from "../../public/JSON/worksdata.json";
export default function Works() {
  function generate_works(parentjson) {
    return parentjson.map((element, num) => (
      <div className="rounded-lg shadow-xl bg-white  hover:shadow-2xl  ">
        <Link href={element["link"]}>
          <div className=" h-56  relative ">
            <Image
              src={element["img_path"]}
              className="object-contain"
              layout="fill"
            />
          </div>
          <div className=" relative p-6 ">
            <h5 className="text-black text-xl font-medium">
              {element["name"]}
            </h5>
            <p className="text-gray-700 text-base">{element["exp_text"]}</p>
          </div>
        </Link>
      </div>
    ));
  }
  return (
    <div className="mb-20" id="works">
      <div className="wx-6/12 mx-auto text-center my-20">
        <h1
          className="font-bold  text-5xl  border-black border-l-4
      border-r-4 px-3 mx-auto  wx-6/12 inline-block"
        >
          WORKS
        </h1>
        <h2 className="mt-6 text-center md:text-2xl text-2xl  text-gray-400 ">
          Click Card!!!
        </h2>
      </div>
      <div className="w-10/12 grid mx-auto gap-10  md:grid-cols-2 lg:grid-cols-3">
        {generate_works(Worksdata.Works)}
      </div>
    </div>
  );
}
