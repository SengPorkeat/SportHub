import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsComponent1 from "../../components/news/NewsComponent1";
import NewsComponent2 from "../../components/news/NewsComponent2";
import "../../index.css";
import { newsData, responsive } from "../../common/newsData";
import NewsCompomentDetail from "../../components/news/NewsCompomentDetail";

export default function News() {
  // Sort the newsData array by release date in descending order
  const sortedRecentNews = newsData.sort(
    (a, b) => new Date(b.released_date) - new Date(a.released_date)
  );
  // Sort the newsData array by view count in descending order
  const sortedTopNews = newsData.sort((a, b) => b.view - a.view);

  const topNews = sortedTopNews
    .slice(0, 6)
    .map((item, index) => (
      <NewsComponent1
        key={item.id}
        image={item.image}
        title={item.title}
        released_date={item.released_date}
        className={index === 0 ? "xl:col-span-2 xl:row-span-2" : ""}
      />
    ));

  const recentNews = newsData.map((item) => (
    <NewsComponent2
      key={item.id}
      image={item.image}
      title={item.title}
      released_date={item.released_date}
      view={item.view}
      publicer_image={item.publicer_image}
      publicer_name={item.publicer_name}
    />
  ));

  return (
    <div className="News flex justify-center items-center flex-col gap-5 p-5 pb-20 bg-slate-200 w-10/12 mx-auto">
      {/* section 1: Top News */}
      <section className="w-full h-auto">
        <h2 className="text-center text-4xl text-[#172554] font-bold mt-20 mb-7 ">
          ព័ត៌មានល្បីៗ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full h-auto mx-auto">
          {topNews}
        </div>
      </section>
      {/* section 2: Recent News */}
      <section className="w-full h-auto">
        <h2 className="text-center text-4xl text-[#172554] font-bold m-7">
          ព័ត៌មានថ្មីៗ
        </h2>
        <div
          style={{
            paddingBottom: "30px",
            position: "relative",
          }}
        >
          <Carousel
            responsive={responsive}
            showDots={true}
            renderDotsOutside={true}
            swipeable={true}
          >
            {recentNews}
          </Carousel>
        </div>
      </section>
    </div>
  );
}
