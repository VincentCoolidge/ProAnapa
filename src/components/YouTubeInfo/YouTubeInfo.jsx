import "./styled.css";

const YouTubeInfo = () => {
  return (
    <section className="container_youtubeinfo">
      <h3 className="heading_3 heading_3_youtubeinfo">
        Больше о недвижимости
        <br /> на нашем{" "}
        <a
          href="https://www.youtube.com/@anapa-partner"
          target="_blank"
          style={{ color: "#FDBD21", textDecoration: "underline" }}
          rel="noreferrer"
        >
          Youtube
        </a>{" "}
        канале<span className="heading_3_circle">&bull;</span>
      </h3>
      <div className="container_video_team">
        <iframe
          className="video_team"
          src="https://www.youtube.com/embed/gCHJtVvgOx4?si=cW2fYBU7JCffSGYm&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
        <iframe
          className="video_team"
          src="https://www.youtube.com/embed/7bCmayMVpPc?si=-ZIhPZAnmQWc8JGo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
        <iframe
          className="video_team"
          src="https://www.youtube.com/embed/8YAC_g2t2kY?si=61WxgheZNVPImaf8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
};

export default YouTubeInfo;
