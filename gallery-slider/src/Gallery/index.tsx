//Import Interface for implementation, used elsewhere too
import { Photo } from './types';

import { Navigation } from './Navigation';
import { PreviewGallery } from './PreviewGallery';
import { TransitionPhoto } from './TransitionPhoto';
interface GalleryProps {
    //Photo contains all the variables defined, and we do so for the array which holds it.
	photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = () => {
	return (
		<div>
			<TransitionPhoto />
			<Navigation />
			<PreviewGallery />
		</div>
	);
};
