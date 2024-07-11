import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsComponent2 from "../../components/news/NewsComponent2";
import NewsComponent1 from "../../components/news/NewsComponent1";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { responsive } from "../../common/newData";


export default function News() {
  const [pNews, setPNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // useNavigate hook

//   Fetch Data

  useEffect(() => {
    setLoading(true);
    fetch("http://136.228.158.126:50003/api/contents/all_content/")
      .then((res) => res.json())
      .then((datas) => {
        // Assuming the data is an array of objects
        const filteredNews = datas.data.filter(
          (item) => item.content_type === "news"
        );
        setPNews(filteredNews);
        setLoading(false);
        // console.log(filteredNews);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("News Data:", pNews);

  // Sort the newsData array by release date in descending order
  const sortedRecentNews = pNews.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  );   

  // handle news page detail
  const handleNewsDetail = (newsItem) => {
    navigate("/news-detail", { state: newsItem });
  };

  // map data for Component_2
  const recentNews = sortedRecentNews.slice(0, 6).map((item, index) => (
    <NewsComponent2
      key={index}
      image={item.thumbnail}
      title={item.title}
      released_date={item.updated_at}
      view={item.view_count}
      handleNewsDetail={() => handleNewsDetail(item)} // pass the handler
    />
  ));
  console.log("Recent News: ", recentNews);

  // map data for Component_1
  const topNews = sortedRecentNews.slice(6, ).map((item, index) => (
    <NewsComponent1
      key={index}
      image={item.thumbnail}
      title={item.title}
      released_date={item.updated_at}
      handleNewsDetail={() => handleNewsDetail(item)} // pass the handler
      className={index === 0 ? "xl:col-span-2 xl:row-span-2" : ""}
    />
  ));
  console.log("Top News: ", topNews);

  return (
    <div className="News flex justify-center items-center flex-col gap-5 mx-auto p-5 pb-20 bg-slate-200">
      
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
        <h2 className="text-center text-4xl text-[#172554] font-bold m-7 ">
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
