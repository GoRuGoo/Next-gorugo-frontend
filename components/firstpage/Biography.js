import Biodata from "../../public/JSON/biodata.json";

export default function Biography(props) {
  function generate_bio(parentjson) {
    return parentjson.map((element, num) => (
      <li className="py-1" key={num}>
        {element["name"]}
      </li>
    ));
  }

  return (
    <div id="bio">
      <div className="wx-6/12 mx-auto text-center my-20">
        <h1
          className="font-bold  text-5xl  border-black border-l-4
      border-r-4 px-3 mx-auto  wx-6/12 inline-block"
        >
          BIOGRAPHY
        </h1>
      </div>
      <h1 className="text-center font-serif md:text-8xl text-5xl tracking-widest mt-20">
        伊 藤 優 汰
      </h1>
      <h2 className="text-center font-namemyotyo md:text-3xl text-2xl my-5 text-gray-400">
        Yuta Ito
      </h2>
      <div className="mb-20">
        <p
          className=" md:w-5/12  w-9/12 mx-auto text-justify
           font-namemyotyo md:tracking-widest tracking-wider text-base leading-8"
        >
          2005年7月30日生まれ。現18歳。岡崎市在住。
          小五~中三にRoboCupJuniorSoccer
          に参加。それをきっかけに科学技術に興味を持つ。豊田工業高等専門学校
          情報工学科所属。寮の先輩にゴルゴと名付けられる。
          現在はプログラミングを始めとした技術は、”学ぶものではなく楽しむもの”という考えから
          「Have Fun! With Technology!」
          というモットーを掲げ、日々開発することを楽しむ。
        </p>
      </div>
      <div
        className="md:w-8/12 w-10/12 mx-auto text-justify
           font-namemyotyo md:tracking-widest tracking-wider text-base leading-8"
      >
        <h3 className="text-center font-namemyotyo pb-5 ">
          <span className="border-gray-300 border-b pb-1 w-6/12 md:px-40 px-24 px-md:text-sg">
            受賞歴
          </span>
        </h3>
        <ul className="text-center pb-10">{generate_bio(Biodata.Awards)}</ul>
        <h3 className="text-center font-namemyotyo  pb-5">
          <span className="border-gray-300 border-b pb-1 md:px-40 px-24 md:text-sg">
            出展・出場歴
          </span>
        </h3>
        <ul className="text-center">
          {generate_bio(Biodata.ParticipationExhibit)}
        </ul>
      </div>
    </div>
  );
}
