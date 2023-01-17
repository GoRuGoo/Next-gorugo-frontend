import Image from "next/legacy/image";
export default function Welcome(props) {
  return (
    <>
      <div>
        {/* <Image src="/cycle.webp" height={2048} width={1365} /> */}
        <Image src={"/cycle.webp"} layout="fill" />
      </div>
    </>
  );
}
