import Image from "next/legacy/image";
export default function Welcome(props) {
  return (
    <>
      <div className="relative">
        {/* <Image src="/cycle.webp" height={2048} width={1365} /> */}
        {props.width >= 768 ? (
          <Image
            src={"/cycle.webp"}
            height={props.height}
            width={props.width}
            className="object-cover absolute"
          />
        ) : (
          <Image
            src={"/cycle.webp"}
            height={props.height}
            width={768}
            objectPosition={"left top"}
            className="object-cover absolute"
          />
        )}
      </div>
    </>
  );
}
