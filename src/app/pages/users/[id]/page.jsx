import { Fragment } from "react";
import Title from "@/components/Title";
import UserCard from "@/components/UserCard";
import Back from "@/components/Back";
import Banner from "@/components/Banner";

async function getUser({ id }) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const data = await res.json();
  return data;
}

async function UserPage({ params }) {
  const id = params.id;
  const user = await getUser({ id });
  return (
    <Fragment>
      <Banner
        src="/assets/chef_2.jpg"
        alt="Vista al puerto de Puntarenas desde el restaurante."
      />
      <div className="relative p-32 top-0 flex flex-col items-center justify-center">
        <Title title={`Perfil de ${user.name}`} />
        <ul className="flex justify-center">
          <UserCard user={user} key={user.id} />
        </ul>
        <Back href="/pages/users" />
      </div>
    </Fragment>
  );
}

export default UserPage;
