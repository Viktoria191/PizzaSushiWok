import { Suggestion } from '../store/suggestions/types';
import comboImage from '../common/8625313c3c1050b33e60730dded484dc3c320fdf.jpg';
import novinkiImage from '../common/1e12ad23b467823b9460966b349ab447a9f605e3.png';
import akciiImage from '../common/590f04b72395e026a5f21bbe09cf4fade3044e94.png';
import vegImage from '../common/b66cbaa0117070a71028fae49e49ffb79523e4c0.png';
import pepperonyImage from '../common/d3b97ed462da44cdd1f3432bd44d3a4e723367c7.png';
import moscowImage from '../common/cef2f3d91eaaee55e23c5a1ffb7ea3ce2ab3e957.png';
import gulienImage from '../common/bb05e91f0b428f19a7335c9206aec07d04a86a92.png';
import chickenImage from '../common/0cf9fb638319c0fb1d3097bfcda90633cf37d81e.png';
import { Pizza } from '../store/pizzas/types';

const mockSuggestions: Suggestion[] = [
  {
    id: '1',
    title: 'Комбо',
    image: comboImage,
  },
  {
    id: '2',
    title: 'Новинки',
    image: novinkiImage,
  },
  {
    id: '3',
    title: 'Акции',
    image: akciiImage,
  },
  {
    id: '4',
    title: 'Veg',
    image: vegImage,
  },
];

export const getMockSuggestions = () => mockSuggestions;

const mockPizzas: Pizza[] = [
  {
    id: '1',
    title: 'Пепперони',
    image: pepperonyImage,
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, томатный соус',
    price: '1659',
    favorite: true,
  },
  {
    id: '2',
    title: 'Москвичка',
    image: moscowImage,
    description:
      'Сыр "Моцарелла", шампиньоны св, помидоры, перец болгарский, говядина, грудка куриная, бекон',
    price: '1659',
    favorite: true,
  },
  {
    id: '3',
    title: 'Жульетта',
    image: gulienImage,
    description: 'Грибы шампиньоны, моцарелла для пиццы',
    price: '1659',
    favorite: false,
  },
  {
    id: '4',
    title: 'Куриное Царство',
    image: chickenImage,
    description:
      'Соус "Шеф" (чеснок майонез соус соевый зелень), моцарелла для пиццы, грудка куриная',
    price: '1659',
    favorite: false,
  },
];

export const getMockPizzas = () => mockPizzas;
