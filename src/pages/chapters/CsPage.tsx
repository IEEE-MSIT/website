import ChapterPage from './ChapterPage';
import { chaptersData, chaptersList } from '../../data/chapters';

const CsPage = () => {
  return <ChapterPage chapter={chaptersData.CS} chaptersList={chaptersList} />;
};

export default CsPage;
