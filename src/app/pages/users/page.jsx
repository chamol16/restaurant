import { Fragment } from "react";
import Title from "@/components/Title";
import UserCard from "@/components/UserCard";
import Link from "next/link";
import Back from "@/components/Back";

async function loadUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function Users() {
  const users = await loadUsers();
  return (
    <Fragment>
      <div className="flex flex-col relative p-32 items-center justify-center border-4">
        <Title title="Usuarios" />
        <ul className="grid grid-cols-2 px-5 gap-10">
          {users.map((user) => (
            <Link href={`/pages/users/${user.id}`}>
              <UserCard user={user} key={user.id} />
            </Link>
          ))}
        </ul>
        <Back href="/" />
      </div>
    </Fragment>
  );
}

export default Users;
