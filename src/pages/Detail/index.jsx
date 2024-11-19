import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import api from "../../api"
import ReactPlayer from "react-player"
import Description from "./Description"
import Comments from "./Comments"
import Channel from "./Channel"
import { BasicLoader } from "../../components/Loader"
import Error from "../../components/Error";
import Card from "../../components/Card";
const Detail = () => {
    const [video, setVideo] = useState(null);
    const [error, setError] = useState(null);

    //   arama parametrelerine erişim için kullan
    const [searcParams] = useSearchParams();

    // url v isimli parametreye eriş
    const id = searcParams.get("v");


    //   id bilinen video bilgilerini apiden al
    useEffect(() => {

        const params = { id, extend: 1 }
        api
            .get(`/video/info`, { params })
            .then((res) => setVideo(res.data))


            .catch((err) => setError(err.message));
    }, [id]);

    return (
        <div className="detail-page h-screen overflow-auto ">
            <div className="page-content">
                {/* videoiçerigi içerigi */}
                <div>
                    {/* video */}
                    <div className=" h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden">
                        <ReactPlayer
                            playing={true}
                            height={"100%"}
                            width={"100%"}
                            controls
                            url={`https://www.youtube.com/watch?v=${id}`} />
                    </div>
                    {/* Açıklama */}
                    {error ? (<Error info={error} />) : !video ? (<BasicLoader />) : (
                        <div>
                            {/* Başlık */}
                            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
                            {/* Kanal bilgileri */}
                            <Channel video={video} />
                            {/* Açıklama alanı */}
                            <Description video={video} />
                            {/* Yorumlar */}
                            <Comments videoId={id} />
                        </div>
                    )}
                </div>
                {/* öneilen videolar */}
                <div className="flex flex-col gap-5 p-1">
                    {video?.relatedVideos.data.map((item) =>
                        item.type === "video" && <Card key={item.videoId} video={item} isRow />)}
                </div>
            </div>
        </div>
    )


};

export default Detail