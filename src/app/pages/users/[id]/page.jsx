import { Fragment } from "react";
import Title from "@/components/Title";
import UserCard from "@/components/UserCard";
import Back from "@/components/Back";
import Banner from "@/components/Banner";

async function getUser({ id }) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const id = params;
  const user = await getUser(id);
  const name = await user.first_name;
  return (
    <Fragment>
           <Banner
        src="/assets/chef_2.jpg"
        alt="Vista al puerto de Puntarenas desde el restaurante."
      />
      <div className="relative p-32 top-0 flex flex-col items-center justify-center">
        <Title title={`Perfil de ${name}`} />
        <ul className="flex justify-center">
          <UserCard user={user} key={user.id} />
        </ul>
        <Back href="/pages/users" />
      </div>
    </Fragment>
  );
}

export default UserPage;
