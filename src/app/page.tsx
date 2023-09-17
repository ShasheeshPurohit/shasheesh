import Image from "next/image";
import styles from "./styles.module.scss";
import { MainHeader } from "./components/Header";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "lzxib9tb",
  dataset: "production",
  apiVersion: "2023-03-18",
  useCdn: false,
});

async function getData(type: string) {
  const data = await client.fetch(`*[_type == "${type}"]`);

  return data[0];
}

export default async function Home() {
  const { mainSection } = styles;

  const headerData = await getData("homepage");

  return (
    <main className={`${mainSection} flex justify-center items-center`}>
      <MainHeader {...headerData} />
    </main>
  );
}
