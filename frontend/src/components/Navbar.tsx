import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#ddd" }}>
      <Link href="/">Home</Link> | <Link href="/contact">Contact</Link>
    </nav>
  );
}
