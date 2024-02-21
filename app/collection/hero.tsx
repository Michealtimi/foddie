import { Clock, Mail, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className=" relative h-screen w-screen bg-black   mx-auto ">
        <Image
          src="/bg.jpg"
          alt="food"
          height="1000"
          width="1000"
          className="w-full h-full object-cover  "
        />
        <div className="mx-auto  absolute bg-black w-full h-full top-0 opacity-70"></div>
        <div className="mx-auto max-w-6xl">
          <div className="absolute mt-60  top-0 gap-4 w-[350px] ">
            <div className=" text-white text-[40px] font-bold">
              Have a Delicious Mealwith Us.
            </div>
            <div className=" text-white text-[12px]">
              {" "}
              A restaurant is a place where people go to eat, frequently with
              friends, family or coworkers
            </div>
          </div>
          <div className="flex gap-4 absolute  mt-[420px] mt- top-0  w-[350px]">
            <div className="px-2 py-1 bg-orange-700 text-white text-[10px] rounded">
              {" "}
              View Our Menu
            </div>
            <div className="px-2 py-1 border border-white text-white text-[10px] rounded">
              {" "}
              Reservation
            </div>
          </div>

          <div className=" absolute right-20 bottom-16">
            <Image
              src="/food3.jpg"
              alt="foodie"
              height="200"
              width="200"
              className="rounded-full border-4 border-b-orange-700 object-cover "
            />
            <div className=" w-full h-full  -top-4  left-16 absolute  justify-center">
              <div className="bg-orange-700 text-white rounded-full px-4 py-2 w-[60px] border-4 border-white text-[12px] top-0 mr-36  items-center">
                25% Off
              </div>
            </div>
          </div>
            <div className="w-24  h-24 flex absolute bottom-10 gap-5">
              <Image
                src="/food1.jpg"
                alt="foo"
                height={200}
                width={200}
                className="rounded-full w-full h-full border-4 object-cover "
              />
              <Image
              src="/food2.jpg"
              alt="fodie"
              height="200"
              width="200"
              className="rounded-full border-4 object-cover "
            />
             <Image
              src="/food4.jpg"
              alt="odie"
              height="200"
              width="200"
              className="rounded-full border-4 object-cover "
            />
            <Image
              src="/food5.jpg"
              alt="foie"
              height="200"
              width="200"
              className="rounded-full border-4 object-cover "
            />
            </div>
        </div>
      </div>
    </>
  ); //
}
