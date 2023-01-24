import next from "next";
import Image from "next/image";
import Link from "next/link";
import Worksdata from "../../public/JSON/worksdata.json";
export default function Works() {
  function set_address(address) {
    let next_address = "location.href" + address;
    return next_address;
  }
  function generate_works(parentjson) {
    return parentjson.map((element, num) => (
      <div className="flex justify-center" key={num}>
        <div className="rounded-lg shadow-lg bg-white  max-w-xl h-full hover:shadow-2xl">
          <a href={element["link"]}>
            <div className="h-2/4 m-h-2/4 rounded-lg">
              <Image
                src={element["img_path"]}
                width={500}
                height={500}
                className="inline-block object-contain py-auto"
              />
            </div>
            <div className="p-6 relative">
              <h5 className="text-black text-xl font-medium mb-2">
                {element["name"]}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                {element["exp_text"]}
              </p>
            </div>
          </a>
        </div>
      </div>
    ));
  }
  return (
    <div className="mb-20">
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
      <div className="w-10/12 grid grid-cols-1 mx-auto gap-10  md:grid-cols-2 lg:grid-cols-3">
        {generate_works(Worksdata.Works)}
      </div>
    </div>
  );
}
