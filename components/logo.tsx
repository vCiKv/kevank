import Link from "next/link";

export default function Logo(props: { size?: number }) {
  const { size } = props
  return (
    <Link href="/">
      <img
        alt="logo"
        src={"/logo.png"}
        width={size ?? 48}
        height={size ?? 48}
      />
    </Link>
  );
};