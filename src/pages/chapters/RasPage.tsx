import ChapterPage from './ChapterPage';
import { chaptersData, chaptersList } from '../../data/chapters';

const RasPage = () => {
  return <ChapterPage chapter={chaptersData.RAS} chaptersList={chaptersList} />;
};

export default RasPage;
