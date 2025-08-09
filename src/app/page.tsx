import UsersList from "@/components/Dashboard/users/UsersList";

export default function Home() {
  return (
    <div className="grid grid-cols-1  gap-4 ">
      <UsersList />
    </div>
  );
}
