import { Fragment } from "react";
import Title from "@/components/Title";
import UserCard from "@/components/UserCard";
import Link from "next/link";

async function loadUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function Users() {
  const users = await loadUsers();
  return (
    <Fragment>
      <Title title="Usuarios" />
      <ul className="grid grid-cols-3 px-5">
        {users.map((user) => (
          <Link href={`/pages/users/${user.id}`}>
            <UserCard user={user} key={user.id} />
          </Link>
        ))}
      </ul>
    </Fragment>
  );
}

export default Users;
