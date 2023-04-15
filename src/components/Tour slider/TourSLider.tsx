import React, { useMemo, useEffect, useState } from "react";
import scss from "./TourSlider.module.scss";
import SliderCard from "./SliderCard/SliderCard";
import Slider from "react-slick";
import Image from "next/image";
import Divider from "../Divider/Divider";
import FilterTour from "../Tour filter/FilterTour";
import useTours from "../../hooks/useTours";
import Preloader from "../Preloader/Preloader";
import MoreBlock from "../Divider/More block/MoreBlock";
import { useRouter } from "next/router";
import { WhereFilterOp, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import Link from "next/link";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

interface filteringProps {
  category: string;
  operator: WhereFilterOp;
  comparison: string;
}

const TourSlider: React.FC = () => {
  const { tours, getTours, isLoading } = useTours();
  const [sliderData, setSliderData] = useState<Array<object>>();
  const router = useRouter();
  const { tour } = router.query

  const filtering = async ({ category, operator, comparison }: filteringProps) => {
    const q = query(collection(db, "tours"),
      where(category, operator, comparison))
    const data: { tid: string; }[] = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let obj: any = {
        docId: doc.id,
        ...doc.data(),
      };
      data.push(obj);
    });
    setSliderData(data)
  }

  useMemo(async () => {
    if (tour === "Most popular") {
      const q = query(collection(db, "tours"), orderBy("requests"))
      const data: { tid: string; }[] = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let obj: any = {
          docId: doc.id,
          ...doc.data(),
        };
        data.push(obj);
      });
      const sortedNumbers = data.sort((a: any, b: any) => a.requests - b.requests);
      const finalData = sortedNumbers.slice(-10)
      setSliderData(finalData.reverse())
      console.log(finalData)
    } else if (!tour) {
      getTours();
      if (!tour) {
        setSliderData(tours)
      }
    } else if (tour === "All tours") {
      setSliderData(tours)
    } else if (tour === "Multi-active") {
      filtering({ category: "tourInfo.category", operator: "==", comparison: "Multi-active" })
    } else if (tour === "Road trip") {
      filtering({ category: "tourInfo.category", operator: "==", comparison: "Road trip" })
    } else if (tour === "Horse riding") {
      filtering({ category: "tourInfo.category", operator: "==", comparison: "Horse riding" })
    } else if (tour === "Trekking") {
      filtering({ category: "tourInfo.category", operator: "==", comparison: "Trekking" })
    } else if (tour === "Winter tours") {
      filtering({ category: "tourInfo.category", operator: "==", comparison: "Winter tours" })
    } else if (tour === "Cultural") {
      filtering({ category: "tourInfo.category", operator: "==", comparison: "Cultural" })
    } else if (tour === "Upcoming") {
      const q = query(collection(db, "tours"), orderBy("tourInfo.startDate"))
      const data: { tid: string; }[] = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let obj: any = {
          docId: doc.id,
          ...doc.data(),
        };
        data.push(obj);
      });
      const sortedNumbers = data.sort((a: any, b: any) => a.requests - b.requests);
      const finalData: any = sortedNumbers.slice(-10)
      setSliderData(finalData)
      const date: any = finalData[0].tourInfo.startDate
    }
  }, [tour])

  useEffect(() => {
    getTours();
  }, []);

  function SampleNextArrow({ onClick }: ArrowProps) {
    return (
      <div className={scss.nextArrow_container} onClick={onClick}>
        <Image src="/images/Vector.svg" alt="NextArrow" width="6" height="12" />
      </div>
    );
  }

  function SamplePrevArrow({ onClick }: ArrowProps) {
    return (
      <div className={scss.prevArrow_container} onClick={onClick}>
        <Image src="/images/Vector.svg" alt="PrevArrow" width="6" height="12" />
      </div>
    );
  }

  const settings = {
    className: "center",
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          dots: false
        }
      }
    ],
    nextArrow: (
      <SampleNextArrow
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        onClick={function (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    dotsClass: `slick-dots dots`,
  };
  
  
  const render = useMemo(
    () => sliderData?.map((el, index) => <SliderCard key={index} {...el} />),
    [sliderData]
  );

  const renderAllTours = useMemo(
    () => tours?.map((el, index) => <SliderCard key={index} {...el} />),
    [tours, tour]
  );

  if (isLoading) return <Preloader full />

  return (
    <div className={scss.wrapper}>
      <div className="container">
        <div className={scss.containerDivider}>
          <Divider title="Select Tour">
            <>
              <FilterTour />
              <div className={scss.selectsArrow}>
                <Link href="/tours">
                  <MoreBlock />
                </Link>
              </div>
            </>
          </Divider>
        </div>
        <div className="mainSliders">
          <Slider {...settings}>{!tour ? renderAllTours : render}</Slider>
        </div>
      </div>
    </div>
  );
};

export default TourSlider;
