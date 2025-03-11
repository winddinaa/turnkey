import React from "react";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { mockActiveEvaluation } from "./constants";
import { Badge, Card } from "@material-tailwind/react";
import { TextComponent } from "../../../components/common";
import { CheckIcon } from "../../../components/Icon";
import { useDispatch } from "react-redux";
import { setEvaModal } from "../../../reduxs/evaluation/evaluationSlice";
import { EBool, EMode } from "../../../constants/enum";
import SwiperComponent from "../../../components/common/Swiper";
const ActiveEvalution = () => {
  const dispatch = useDispatch();
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
            <SwiperSlide key={`swipper-key-${index}`}>
              <Badge
                className={`${index !== 0 && "hidden"} bg-`}
                content={<CheckIcon />}
                containerProps={{
                  className: "flex ",
                }}
              >
                <Card
                  className={`flex flex-col justify-center items-center  border-defaultIcon border-2 pt-5 cursor-pointer w-full `}
                  onClick={() =>
                    dispatch(
                      setEvaModal({
                        mode: EMode.edit,
                        open: EBool.true,
                      })
                    )
                  }
                >
                  <img
                    src={itemMock.img}
                    alt={`โปรไฟล์ ${itemMock.first_name} ${itemMock.last_name}`}
                    className="w-45 h-40 "
                  />
                  <div
                    className={`flex flex-col items-center bg-cardEvaluation rounded-[10px] w-full  gap-1 py-2 `}
                  >
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
                    >{`Exp. ${itemMock.expire_date}`}</TextComponent>
                  </div>
                </Card>
              </Badge>
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </div>
  );
};

export default ActiveEvalution;
