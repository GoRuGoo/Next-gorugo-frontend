import Link from "next/link";
import Image from "next/image";
import Worksdata from "../../public/JSON/worksdata.json";
export default function Works() {
  return (
    <div className="mb-20" id="works">
      <div className="wx-6/12 mx-auto text-center my-20">
        <h1
          className="font-bold  text-5xl  border-black border-l-4
      border-r-4 px-3 mx-auto  wx-6/12 inline-block"
        >
          WORKS
        </h1>
        <p className="mt-6 text-center md:text-xl text-2xl">
          開発作品・職歴は
          <a
            href="https://www.wantedly.com/id/itoyuta"
            target="_blank"
            className="text-sky-400"
          >
            Wantedly
          </a>
          を参照ください。
        </p>
      </div>
    </div>
  );
}
