import Link from "next/link";

export default function Footer() {
  return (
    <footer className="center mt-5 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs">
      <p>Powered by Dhatrutv Arya Reddy (President) and Devansh Saxena (Vice President) </p>
      <span>|</span>
      <Link
        href="/team"
        className="font-medium text-orange-600"
      >
        {/* Our Team */}
      </Link>
    </footer>
  )
}
