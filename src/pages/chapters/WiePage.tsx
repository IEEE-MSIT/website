import ChapterPage from './ChapterPage';
import { chaptersData, chaptersList } from '../../data/chapters';

const WiePage = () => {
  return <ChapterPage chapter={chaptersData.WIE} chaptersList={chaptersList} />;
};

export default WiePage;
