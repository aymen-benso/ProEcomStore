"use client";
import useFetch from "../customHooks/useFetch";
import HeroAy from "@/components/HeroAy";


export default function store() {
//console.log(useFetch("https://fakestoreapi.com/products"));



  return (
  
      <HeroAy src="/hero2.mp4" text={""} buttonText={""} onClick={function (): void {
      throw new Error("Function not implemented.");
    } }  />
  
  );
}

/* ../../../public/hero.mp4 */