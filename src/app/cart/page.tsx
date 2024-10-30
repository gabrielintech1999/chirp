import Link from "next/link";


export default function Cart() {
  return (
    <div>
      <h1 className="text-red-500 text-center font-bold">
        Cart
        <Link href="/" className="text-blue-500 underline">
          Go back
        </Link>
      </h1>
    </div>
  );
}