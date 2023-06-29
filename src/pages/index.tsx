import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return <h1>Hello {hello.data?.greeting}</h1>;
}
