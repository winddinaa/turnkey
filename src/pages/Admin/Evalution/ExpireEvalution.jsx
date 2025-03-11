import React from "react";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { mockActiveEvaluation } from "./constants";
import { Card } from "@material-tailwind/react";
import { TextComponent } from "../../../components/common";
import SwiperComponent from "../../../components/common/Swiper";
const ExpireEvalution = () => {
  return (
    <div className="flex flex-col">
      <TextComponent variant="h6">Waiting for evaluation</TextComponent>
      <SwiperComponent
        className="w-full h-[350px]" // กำหนดขนาดให้ Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
      >
        {mockActiveEvaluation.map((itemMock, index) => {
          return (
            <SwiperSlide key={`swipper-expire-key-${index}`}>
              <Card className="flex flex-col justify-center items-center  border-defaultIcon border-2 pt-5 grayscale ">
                <img
                  src={itemMock.img}
                  alt={`โปรไฟล์ ${itemMock.first_name} ${itemMock.last_name}`}
                  className="w-40 h-40 "
                />
                <div className="flex flex-col items-center bg-cardEvaluation rounded-[5px] w-full  gap-1 py-2">
                  <TextComponent
                    className={"text-localWhite"}
                  >{` ${itemMock.first_name} ${itemMock.last_name}`}</TextComponent>
                  <TextComponent
                    className={"text-localWhite"}
                  >{` ${itemMock.position}`}</TextComponent>{" "}
                  <TextComponent
                    className={"text-localWhite"}
                  >{` ${itemMock.department}`}</TextComponent>
                  <TextComponent
                    className={"text-localWhite"}
                  >{`The evaluation is overdue.`}</TextComponent>
                </div>
              </Card>
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </div>
  );
};

export default ExpireEvalution;
