"use client";
import useFetch from "../customHooks/useFetch";
import DashAy from "../../components/DashAy";

export default function Home() {
console.log(useFetch("https://fakestoreapi.com/products"));
  return (

      <DashAy />
  );
}
