import Image from "next/legacy/image";
export default function Welcome(props) {
  return (
    <>
      <div className="bg-white">
        {/* <Image src="/cycle.webp" height={2048} width={1365} /> */}
        {props.width >= 768 ? (
          <Image
            src={"/cycle.webp"}
            height={props.height}
            width={props.width}
            objectPosition="left top"
            objectFit="cover"
          />
        ) : undefined}
      </div>
    </>
  );
}
