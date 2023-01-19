import Image from "next/image";
export default function Biography(props) {
  return (
    // <div className="inline w-fit">
    <div>
      <div className="wx-6/12 mx-auto text-center mt-20 mb-4">
        <h1
          className="font-bold  text-5xl  border-black border-l-4
      border-r-4 px-3 mx-auto  wx-6/12 inline-block"
        >
          BIOGRAPHY
        </h1>
      </div>
      <div className="text-center md:w-6/12 w-10/12 mx-auto">
        <Image src={"/goru.webp"} height={props.height} width={props.width} />
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
          2005年生まれ。現17歳。名古屋市在住。小五~中3に
          <span>RoboCupJuniorSoccer</span>
          に参加。それをきっかけに科学技術に興味を持つ。 豊田工業高等専門学校
          情報工学科所属。プログラミングとVTuberの
          <a href="https://www.youtube.com/@HoshimachiSuisei">星街すいせい</a>
          を愛しています。
          現在はプログラミングを始めとした技術は、”学ぶものではなく楽しむもの”という考えから
          <span>「Have Fun! With Technology!」</span>
          というモットーを掲げ、日々開発することを楽しむ。
        </p>
      </div>
    </div>
  );
}
