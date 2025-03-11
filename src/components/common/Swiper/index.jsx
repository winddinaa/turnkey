import React from "react";
import { StyledWrapSwiper } from "./Swiper.styled";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

const SwiperComponent = ({ children, ...rest }) => {
  return (
    <StyledWrapSwiper>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} {...rest}>
        {children}
      </Swiper>
    </StyledWrapSwiper>
  );
};

export default SwiperComponent;
