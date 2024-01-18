import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <h1>David Coding Challenge</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit ipsa
        nisi, sit voluptatem ratione totam ipsum repellat animi assumenda
        reiciendis nam odit porro tempora illo, explicabo consectetur
        perspiciatis cum.
      </p>
    </main>
  );
}
