import Image from "next/legacy/image";
export default function Welcome(props) {
  return (
    <>
      <div className="bg-white">
        {/* <Image src="/cycle.webp" height={2048} width={1365} /> */}
        <Image
          src={"/cycle.webp"}
          height={props.height}
          width={props.width}
          objectPosition="left top"
          className="object-cover"
        />
      </div>
    </>
  );
}
