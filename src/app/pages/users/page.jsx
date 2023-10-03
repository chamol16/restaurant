import { Fragment } from "react";
import Title from "@/components/Title";
import UserCard from "@/components/UserCard";
import Link from "next/link";
import { WhiteBack, BlackBack } from "@/components/Back";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

async function loadUsers() {
  const res = await fetch("http://localhost:3000/api/users/");
  const data = await res.json();
  return data;
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
        <ul className="grid grid-cols-2 gap-10">
          {users.map((user) => (
            <Link href={`/pages/users/${user.id}`}>
              <UserCard user={user} key={user.id} />
            </Link>
          ))}
        </ul>
        <BlackBack href="/" />
      </div>
      <Footer position="relative" />
    </Fragment>
  );
}

export default Users;
