import { useState } from 'react';
//Import Interface for implementation, used elsewhere too
import { Photo } from './types';

import { Navigation } from './Navigation';
import { PreviewGallery } from './PreviewGallery';
import { TransitionPhoto } from './TransitionPhoto';
import style from './index.module.scss';
interface GalleryProps {
	//Photo contains all the variables defined, and we do so for the array which holds it.
	photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {
	if (!photos.length) {
		return null;
	}
	const [indexActivePhoto, setIndexActivePhoto] = useState(0);
	const prevPhoto = photos[indexActivePhoto - 1];
	const nextPhoto = photos[indexActivePhoto + 1];

	return (
		<div className={style.gallery}>
			<div className={style.galleryContainer}>
				<TransitionPhoto
					className={style.galleryTransitionPhoto}
					photos={photos}
					indexActivePhoto={indexActivePhoto}
				/>
				<Navigation
					className={style.galleryNavigation}
					disabledPrev={!prevPhoto}
					disabledNext={!nextPhoto}
					onPrevClick={() => {
						setIndexActivePhoto(indexActivePhoto - 1);
					}}
					onNextClick={() => {
						setIndexActivePhoto(indexActivePhoto + 1);
					}}
				/>
			</div>
			<PreviewGallery
				className={style.galleryPreviewList}
				indexActivePhoto={indexActivePhoto}
				photos={photos}
				setNewPhotos={setIndexActivePhoto}
			/>
		</div>
	);
}