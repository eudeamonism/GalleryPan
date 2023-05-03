import { useEffect, useMemo, useRef } from 'react';
import cl from 'classnames';
import { CommonClassProps, Photo } from '../types';
import style from './index.module.scss';

interface PreviewGalleryProps extends CommonClassProps {
	photos: Photo[];
	setNewPhotos: (id: number) => void;
	indexActivePhoto: number;
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
	className,
	photos,
	indexActivePhoto,
	setNewPhotos,
}) => {
	/* if (!photos.length) {
		return null;
	} */

    const previewContainer = useRef<HTMLUListElement>(null);

    useEffect(() => {
			if (!previewContainer.current) {
				return;
			}

			previewContainer.current.style.transform = `translate3d(-${indexActivePhoto * 164}px, 0, 0)`;
		}, [indexActivePhoto]);

	return (
		<div className={cl(style.previewGallery, className)}>
			{useMemo(
				() => (
					<ul className={style.previewGalleryTrack} ref={previewContainer}>
						{photos.map((photo, id) => (
							<li key={photo.id}>
								<button className={style.previewGalleryPreview} onClick={() => setNewPhotos(id)}>
									<img className={style.previewGalleryImage} src={photo.preview} alt={photo.description} />
								</button>
							</li>
						))}
					</ul>
				),
				[photos, setNewPhotos]
			)}
			<div className={style.previewGalleryCover}>
				{indexActivePhoto + 1} / {photos.length}
			</div>
		</div>
	);
};
