import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is the Main Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio Page</Link>
        </li>
        <li>
          <Link href="/clients">Clients Page</Link>
        </li>
      </ul>
    </div>
  );
}
