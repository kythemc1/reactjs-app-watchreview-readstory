import React from 'react';

const Story = () => {
    const ImageList = ({ images }) => {
        return (
            <div>
                {images.map((image, index) => (
                    <img key={index} src={image.url} alt={`Image ${index}`} />
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
        <div className=''>
            <h1>Danh sách hình ảnh</h1>
            <ImageList images={images} />
        </div>
    );
};
export default Story;
