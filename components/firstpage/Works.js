import Image from "next/image";
import Worksdata from "../../public/JSON/worksdata.json";
export default function Works() {
  function generate_works(parentjson) {
    return parentjson.map((element) => (
      <div class="flex sjustify-center mx-auto">
        <div class="rounded-lg shadow-lg bg-whi min-w-full min-h-full max-w-xs  max-h-85">
          {/* <Image src={element["img_path"]} layout="fill" /> */}
          <Image
            src={element["img_path"]}
            width={500}
            height={500}
            className="object-cover"
          />
          <div class="p-6 relative">
            <h5 class="text-black text-xl font-medium mb-2">
              {element["name"]}
            </h5>
            <p class="text-gray-700 text-base mb-4">{element["exp_text"]}</p>
            <butotn
              className="block mx-auto text-center px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md "
              href={element["link"]}
            >
              link
            </butotn>
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
      <div className="w-10/12 grid grid-cols-1 mx-auto gap-10  md:grid-cols-3">
        {generate_works(Worksdata.Works)}
      </div>
    </div>
  );
}
