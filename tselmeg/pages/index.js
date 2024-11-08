import Image from "next/image";
import localFont from "next/font/local"

export default function Home() {
  return (
    <div className="text-2xl">
      <Image src="/hey.jpg" width={200} height={200} className="rounded-full justify-self-center" />
      <h1 className="text-green-500">Name: Tselmeg</h1>
    </div>
  );
}
