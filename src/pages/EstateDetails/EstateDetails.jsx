/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { RiShareFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import KeyDetails from "@/components/EstateDetails/KeyDetails";
import SectionTitle from "@/components/EstateDetails/SectionTitle";
import Amenities from "@/components/EstateDetails/Amenities";

const EstateDetails = () => {
  const { estateId } = useParams();
  const [room, setRoom] = useState({});

  useEffect(() => {
    axios.get("/rooms.json").then((res) => {
      const allRoom = res?.data;
      const currentRoom = allRoom.find(
        (roomDetails) => roomDetails.id === estateId
      );
      setRoom(currentRoom);
    });
  }, [estateId]);

  const {
    id,
    title,
    location,
    bed,
    bath,
    area,
    price,
    image,
    status,
    type,
    built_in,
    lot_width,
    lot_depth,
    stories,
    room_count,
    parking_spaces,
    overview,
    description,
    amenities,
    listed_by,
  } = room;

  const keyDetails = [
    { key: "status", value: status },
    { key: "type", value: type },
    { key: "built in", value: built_in },
    { key: "lot width", value: lot_width },
    { key: "lot depth", value: lot_depth },
    { key: "stories", value: stories },
    { key: "room count", value: room_count },
    { key: "parking spaces", value: parking_spaces },
  ];

  return (
    <section>
      <div className="container grid grid-cols-2 gap-6 pt-20 pb-12">
        <div className="space-y-2">
          <h1 className="text-4xl text-dark_charcoal font-old_standard font-bold">
            {title}
          </h1>
          <p className="text-base font-open_sans text-dark_silver">
            <CiLocationOn className="text-2xl inline-block mr-2" />
            {location}
          </p>
        </div>
        <div className="flex items-center justify-end gap-3">
          <div className="text-2xl font-open_sans font-bold text-dark_charcoal">
            <span>${price}</span> <span>/mo</span>
          </div>
          <div className=" font-open_sans font-normal text-dark_charcoal">
            <span className="text-2xl">{bed}</span>{" "}
            <span className="text-xs">BD</span>
          </div>
          <div className=" font-open_sans font-normal text-dark_charcoal">
            <span className="text-2xl">{bath}</span>{" "}
            <span className="text-xs">BA</span>
          </div>
          <div className=" font-open_sans font-normal text-dark_charcoal">
            <span className="text-2xl">{area}</span>{" "}
            <span className="text-xs">SF</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="uppercase text-sm font-bold font-open_sans bg-white py-3 px-6 rounded flex items-center gap-1 border broder-[#e2e2e2] hover:border-dark_charcoal transition-all duration-300 ease-in-out">
              <FaRegStar />
              Save
            </button>
            <button className="uppercase text-sm font-bold font-open_sans bg-white py-3 px-6 rounded flex items-center gap-1 border broder-[#e2e2e2] hover:border-dark_charcoal transition-all duration-300 ease-in-out">
              <RiShareFill />
              Save
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-center h-[650px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="py-24 container grid grid-cols-7 gap-8">
        <div className="col-span-5 space-y-12">
          <div>
            <SectionTitle text="Key Details" />
            <div className="grid grid-cols-2 gap-5">
              {keyDetails?.map((details, idx) => (
                <KeyDetails
                  key={idx}
                  text={details?.key}
                  value={details?.value}
                />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle text="Overview" />
            <p className="font-open_sans text-dark_charcoal font-normal">
              {overview} {description}
            </p>
          </div>

          <div>
            <SectionTitle text="Amenities" />
            <div className="grid grid-cols-2 gap-5">
              {amenities?.map((amenitie, idx) => (
                <Amenities
                  key={idx}
                  feature={amenitie?.feature}
                  ICON={amenitie?.ICON}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 relative">
          <div className="sticky top-10">
            <SectionTitle text="Listed By" />
            <div className="flex items-center gap-5">
              <div>
                <img
                  src={listed_by?.image}
                  className="size-28 rounded-sm"
                  alt=""
                />
              </div>
              <div className="grow">
                <h3 className="text-base font-open_sans font-bold text-dark_charcoal hover:text-dark_silver duration-150 transition-all cursor-pointer">
                  {listed_by?.name}
                </h3>
                <div className="flex items-center text-xs mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="font-open_sans text-dark_silver text-xs">
                  <a href={`mailto:${listed_by?.email}`}>
                    <span>{listed_by?.email}</span>
                  </a>
                  <a
                    href={`tel:${listed_by?.phone}`}
                    className="flex items-center gap-1"
                  >
                    <IoIosCall />
                    <span>{listed_by?.phone}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="flex items-center gap-2 rounded-sm justify-center bg-black text-white font-open_sans font-extrabold text-sm w-full py-4">
                <GoMail /> <span>Contact Agent</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstateDetails;
