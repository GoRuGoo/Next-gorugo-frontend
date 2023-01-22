import Image from "next/image";
export default function Welcome(props) {
  return (
    // <>
    //   <div className="reative">
    //     {/* <Image src="/cycle.webp" height={2048} width={1365} /> */}
    //     {props.width >= 768 ? (
    //       <Image
    //         src={"/cycle.webp"}
    //         height={props.height}
    //         width={props.width}
    //         className="object-cover absolute"
    //       />
    //     ) : (
    //       <Image
    //         src={"/cycle.webp"}
    //         height={props.height}
    //         width={768}
    //         objectPosition={"left top"}
    //         className="object-cover absolute"
    //       />
    //     )}
    //   </div>
    // </>
    <div className="inline item-center">
      <Image
        src={"/cycle.png"}
        height={props.height}
        width={props.width}
        alt="cycle"
      />
    </div>
  );
}
