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
    return parentjson.map((element) => (
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white  max-w-xl h-full">
          <div className="h-2/4 m-h-2/4 rounded-lg">
            <Image
              src={element["img_path"]}
              width={500}
              height={500}
              className="inline-block object-contain py-auto"
            />
          </div>
          <div class="p-6 relative">
            <h5 class="text-black text-xl font-medium mb-2">
              {element["name"]}
            </h5>
            <p class="text-gray-700 text-base mb-4">{element["exp_text"]}</p>
            <button className="block mx-auto text-center w-10/12 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md ">
              <Link href={element["link"]}>link</Link>
            </button>
          </div>
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
      </div>
      <div className="w-10/12 grid grid-cols-1 mx-auto gap-10  md:grid-cols-2 lg:grid-cols-3">
        {generate_works(Worksdata.Works)}
      </div>
    </div>
  );
}
