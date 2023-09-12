import Link from "next/link";
import { Fragment } from "react";
import Title from "@/components/Title";
import UserCard from "@/components/UserCard";

async function getUser({ id }) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const id = params;
  const user = await getUser(id);
  return (
    <Fragment>
      <Title title="Perfil de Usuario" />
      <ul className="flex justify-center">
        <UserCard user={user} key={user.id} />
      </ul>
      <Link href={"/pages/users"}>Regresar</Link>
    </Fragment>
  );
}

export default UserPage;
