import { Fragment } from "react";
import Title from "@/components/Title";
import UserCard from "@/components/UserCard";
import Link from "next/link";
import Back from "@/components/Back";
import Banner from "@/components/Banner";

async function loadUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function Users() {
  const users = await loadUsers();
  return (
    <Fragment>
      <Banner
        src="/assets/chef_2.jpg"
        alt="Vista al puerto de Puntarenas desde el restaurante."
      />
      <div className="flex flex-col relative p-32 items-center justify-center">
        <Title title="Personal" />
        <ul className="grid grid-cols-2 gap-4">
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
