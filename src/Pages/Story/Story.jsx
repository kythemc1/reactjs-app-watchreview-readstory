import React, {useEffect, useState} from 'react';
import ListChapter from "../../components/ListChapter/ListChapter";
import {useSelector} from "react-redux";
import axios from "axios";
import {API} from "../../constants/API";

const Story = () => {
    const {MovieCurrent,ChapterCurrent } = useSelector((state) => state.infoMovies);
    const [sumChap,setSumChap]=useState();

    useEffect(()=>{
        try {
            axios({
                    method: "get",
                    url:`${API.API_COUNT_CHAPTER}/${MovieCurrent.name}`,
                    withCredentials: false,
                }
            ).then(res =>{
                console.log(res.data);
                setSumChap(res.data);
            })

        } catch (error) {
            console.log("get data fail", error);
        }
    })
    const ImageList = ({ images }) => {
        return (
            <div className="image-list-container">
                {images.map((image, index) => (
                    <img key={index} src={image.url} alt={`Image ${index}`} className="image-item" />
                ))}
            </div>
        );
    };

    const images = [
        { url: ChapterCurrent?.source_image },
        { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        // { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        // { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        // { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        // { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        // { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        // { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
    ];

    return (
        <div className='story-container'>
            <div style={{marginTop: 70,marginLeft: 30}}>
                <ListChapter sumChap={sumChap}/>
            </div>

            <ImageList images={images} />
            <style>
                {`
                    .image-list-container {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                        justify-content: center;
                        margin-top: 20px;
                    }

                    .image-item {
                        width: 1000px; /* Adjust the width as needed */
                        height: auto;
                        border-radius: 8px;
                        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
                    }
                `}
            </style>
        </div>
    );
};

export default Story;
