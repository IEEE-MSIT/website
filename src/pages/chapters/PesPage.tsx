import ChapterPage from './ChapterPage';
import { chaptersData, chaptersList } from '../../data/chapters';

const PesPage = () => {
  return <ChapterPage chapter={chaptersData.PES} chaptersList={chaptersList} />;
};

export default PesPage;
