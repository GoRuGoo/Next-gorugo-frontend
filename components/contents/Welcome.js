import Image from "next/image";
export default function Welcome(props) {
  return (
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
