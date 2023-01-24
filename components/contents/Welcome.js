import Image from "next/image";
export default function Welcome(props) {
  return (
    <div className="inline-block item-center">
      <Image src={"/cycle.png"} height={5000} width={5000} alt="cycle" />
    </div>
  );
}
