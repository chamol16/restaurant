import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import UserCard from "@/components/UserCard";
import Back from "@/components/Back";

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
      <div className="relative p-32 top-0 flex flex-col items-center justify-center">
        <Title title="Perfil de Usuario" />
        <ul className="flex justify-center">
          <UserCard user={user} key={user.id} />
        </ul>
        <Back href="/pages/users" />
      </div>
    </Fragment>
  );
}

export default UserPage;
