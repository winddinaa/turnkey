import React from "react";
import { TextComponent } from "../../../components/common";
import { mockSelectEmployee } from "./constants";
import { Divider } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CheckboxComponent } from "../../../components/Input";
import ButtonComponent from "../../../components/common/Button";
import SwiperComponent from "../../../components/common/Swiper";

const ModalEvaluation = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <TextComponent variant="h5">Employee profile</TextComponent>
        <div className="flex flex-row items-center gap-5">
          <img
            src={mockSelectEmployee.img}
            alt={`โปรไฟล์ ${mockSelectEmployee.first_name} ${mockSelectEmployee.last_name}`}
            className="w-200 h-20  rounded-[360px] my-2"
          />
          <div className="flex flex-col ">
            <TextComponent variant="h6">
              {`Measured KPIs: ${mockSelectEmployee.fist_name} ${mockSelectEmployee.last_name}`}
            </TextComponent>
            <TextComponent>{mockSelectEmployee.detail}</TextComponent>
          </div>
        </div>
      </div>
      <Divider />
      <SwiperComponent
        className="w-full h-[400px]" // กำหนดขนาดให้ Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
      >
        {mockSelectEmployee.kpis.map((itemMock, index) => {
          return (
            <SwiperSlide key={`swipper-kpis-key-${index}`}>
              <div className="flex flex-col ">
                <div className="flex flex-row gap-5 w-full">
                  <TextComponent variant="h6">Measured KPIs:</TextComponent>
                  <TextComponent variant="paragraph">
                    {itemMock.measurement}
                  </TextComponent>
                </div>
                <div className="flex flex-row gap-5 w-full ">
                  <TextComponent variant="h6" className="whitespace-nowrap">
                    Detail Measured:
                  </TextComponent>
                  <TextComponent variant="paragraph">
                    {itemMock.measured_detail}
                  </TextComponent>
                </div>
                <div className="flex flex-col py-5">
                  {itemMock.kpisCriteria.map((itemKPIs, indexKPIs) => {
                    return (
                      <div
                        key={`item-evalutin-kpi-criteria-${indexKPIs.toString()}`}
                        className="flex flex-col"
                      >
                        <div className="flex flex-row w-[50%]  py-1 items-center  ">
                          <div className="flex flex-row w-full gap-5 w-[90%]">
                            <TextComponent variant="paragraph">
                              {indexKPIs}
                            </TextComponent>
                            <TextComponent variant="paragraph">
                              {itemKPIs}
                            </TextComponent>
                          </div>
                          <CheckboxComponent />
                        </div>
                        <Divider className="w-[50%]" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
      <div className="flex flex-row gap-5 justify-center items-center">
        <ButtonComponent className="w-[180px] bg-localDraft">
          Draft
        </ButtonComponent>
        <ButtonComponent className="w-[180px]">submit</ButtonComponent>
      </div>
    </div>
  );
};

export default ModalEvaluation;
