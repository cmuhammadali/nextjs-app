import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>{" "}
      <Link href={"/complex-dashboard"} className="text-blue-500 underline">
        Default
      </Link>
    </Card>
  );
}
