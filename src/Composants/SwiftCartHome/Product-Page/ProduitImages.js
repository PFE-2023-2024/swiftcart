import React, { useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";

function ProduitImages({ product }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (product.media && product.media.length > 0) {
            const newMedia = product.media.map((url) => {
                const extension = url.split('.').pop(); // Obtient l'extension du fichier
                if (['mp4', 'webm', 'ogg'].includes(extension)) { // Vérifie si l'URL est pour une vidéo
                    return {
                        thumbnail: 'https://kohantextilejournal.com/wp-content/uploads/2018/04/video-poster-600x330.jpg',
                        embedUrl: url,
                        renderItem: () => (
                            <div className='video-wrapper'>
                                <video controls src={url} type={`video/${extension}`}  style={{objectFit:'cover',width:'100%',height:'100%'}} poster={'https://kohantextilejournal.com/wp-content/uploads/2018/04/video-poster-600x330.jpg'}></video>
                            </div>
                        )
                    };
                } else {
                    return {
                        original: url,
                        thumbnail: url,
                        renderItem: () => (
                            <div className='video-wrapper'>
                                <img src={url} alt="" style={{objectFit:'cover',width:'100%',height:'100%',maxHeight:'500px'}} />
                            </div>
                        )
                    };
                }
            });
            setImages(newMedia);
        }
    }, [product.media]);

    return (
        <div className='ImageGallery'>
            <ImageGallery 
                thumbnailPosition='left'
                showBullets={true}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                items={images} />
        </div>
    );
}

export default ProduitImages;
