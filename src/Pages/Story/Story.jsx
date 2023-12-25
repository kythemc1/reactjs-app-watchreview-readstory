import React from 'react';

const Story = () => {
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
        { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        { url: 'https://mangaclaw.com/843ZuJVKuKQuzsyeGR/uploads-by-manga-lc-net-4.jpg' },
        // Thêm các đường link ảnh khác vào đây nếu cần
    ];

    return (
        <div className='story-container'>
            <h1>Danh sách hình ảnh</h1>
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
