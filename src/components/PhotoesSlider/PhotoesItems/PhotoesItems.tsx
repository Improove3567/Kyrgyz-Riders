import React, { FC } from "react"
import scss from "./PhotoesItems.module.scss"
import { PhotoProvider, PhotoView } from "react-photo-view";

interface IPhotoesItemsProps {
  image: string;
}

const PhotoesItems: React.FC<IPhotoesItemsProps> = ({ image }) => {


  return (
    <PhotoProvider>
      <PhotoView src={image}>
        <div className={scss.photoesItemsMain}>
          <img src={image} alt="image" height={280} />
        </div>
      </PhotoView>
    </PhotoProvider>
  )
}

export default PhotoesItems