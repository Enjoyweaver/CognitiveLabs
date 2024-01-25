import Link from "next/link";

export default function AccountButton() {
  return (
    <Link
      href="/calendarpage"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Account
    </Link>
  );
}
