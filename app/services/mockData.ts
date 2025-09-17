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
import baconImage from '../common/6cf8a5c03edc92c7f2e34106a6bd3392acd27135.png';
import hamImage from '../common/5b22011a0740e259ebd3cb6e6785b6ec6320cac0.png';
import pepImage from '../common/cc71f777f4430deb19aa7ab78a43b10a06fd7104.png';
import beefImage from '../common/8c3b26cf305030aa1e799441fc5e925b4a193b4d.png';
import chikImage from '../common/d1fd2c22bba50b44faeb45e51570c5ca8e0a5fe0.png';
import porkImage from '../common/d1fd2c22bba50b44faeb45e51570c5ca8e0a5fe0.png';
import cheeseImage from '../common/db1946f2031cf0145382094136643a8431d203ad.png';
import mozzarellaImage from '../common/0ab3cc48e7e3bb10b4d7e798ef283ec9c18503d5.png';
import arugulaImage from '../common/5bf76f7509cd19986e437cd49968faefcf9a4125.png';
import tomatoImage from '../common/643507fdcfcad0ef4f34612aaabf9b41fd99f5e6.png';
import pepperImage from '../common/cf833dadfb534af68a17004b06a6a0908bdfadcc.png';
import halapeImage from '../common/50ea527769b9507306df16d321fd03a746f756d6.png';
import onionImage from '../common/7a2e9f7611f9570a7b3078ad9645f84fd6a394b0.png';
import potatoImage from '../common/2932632037575e8fd39b1cd64305b3c0279782c7.png';
import freeOnionImage from '../common/3b92a3ed72daaa564aa81e18289bea400ff289b2.png';
import mushroomImage from '../common/4a7aec70378656524d5d1d9455f11ad459968179.png';
import oliveImage from '../common/83ec38e305e49d775ec70145ec409bd1caf13b7c.png';
import cucumberImage from '../common/76f0bce202fef4108ab99e424e29050282410f8b.png';
import salmonImage from '../common/f4121e1f7721cf58af64c741f82088cf5109dded.png';

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
    id: 1,
    title: 'Пепперони',
    image: pepperonyImage,
    parameters: 'Средняя 30 см, традиционное тесто, 690 г',
    sizes: [
      {
        size: '26 см',
        weight: '430 г',
      },
      {
        size: '30 см',
        weight: '575 г',
      },
      {
        size: '40 см',
        weight: '880 г',
      },
    ],
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, томатный соус',
    price: '1659',
    favorite: true,
    calories: '265 ',
    proteins: '12,6',
    carbohydrates: '12,8',
    fats: '12,1',
    supplements: [
      {
        id: 1,
        title: 'Бекон',
        image: baconImage,
        price: 69,
      },
      {
        id: 2,
        title: 'Ветчина',
        image: hamImage,
        price: 69,
      },
      {
        id: 3,
        title: 'Пепперони',
        image: pepImage,
        price: 69,
      },
      {
        id: 4,
        title: 'Говядина',
        image: beefImage,
        price: 69,
      },
      {
        id: 5,
        title: 'Куриная грудка',
        image: chikImage,
        price: 69,
      },
      {
        id: 6,
        title: 'Свинина',
        image: porkImage,
        price: 69,
      },
      {
        id: 7,
        title: 'Пармезан',
        image: cheeseImage,
        price: 69,
      },
      {
        id: 8,
        title: 'Моцарелла',
        image: mozzarellaImage,
        price: 69,
      },
      {
        id: 9,
        title: 'Руккола',
        image: arugulaImage,
        price: 69,
      },
      {
        id: 10,
        title: 'Помидоры',
        image: tomatoImage,
        price: 69,
      },
      {
        id: 11,
        title: 'Болгарский перец',
        image: pepperImage,
        price: 69,
      },
      {
        id: 12,
        title: 'Перец халапеньо',
        image: halapeImage,
        price: 69,
      },
      {
        id: 13,
        title: 'Лук красный',
        image: onionImage,
        price: 69,
      },
      {
        id: 14,
        title: 'Картофель по-деревенски',
        image: potatoImage,
        price: 69,
      },
      {
        id: 15,
        title: 'Лук фри',
        image: freeOnionImage,
        price: 69,
      },
      {
        id: 16,
        title: 'Шампиньоны',
        image: mushroomImage,
        price: 69,
      },
      {
        id: 17,
        title: 'Маслины',
        image: oliveImage,
        price: 69,
      },
      {
        id: 18,
        title: 'Огурчики маринованные',
        image: cucumberImage,
        price: 69,
      },
      {
        id: 19,
        title: 'Семга',
        image: salmonImage,
        price: 69,
      },
    ],
  },
  {
    id: 2,
    title: 'Москвичка',
    image: moscowImage,
    parameters: 'Средняя 30 см, традиционное тесто, 690 г',
    sizes: [
      {
        size: '26 см',
        weight: '430 г',
      },
      {
        size: '30 см',
        weight: '575 г',
      },
      {
        size: '40 см',
        weight: '880 г',
      },
    ],
    description:
      'Сыр "Моцарелла", шампиньоны св, помидоры, перец болгарский, говядина, грудка куриная, бекон',
    price: '1659',
    favorite: true,
    calories: '265 ',
    proteins: '12,6',
    carbohydrates: '12,8',
    fats: '12,1',
    supplements: [
      {
        id: 1,
        title: 'Бекон',
        image: baconImage,
        price: 69,
      },
      {
        id: 2,
        title: 'Ветчина',
        image: hamImage,
        price: 69,
      },
      {
        id: 3,
        title: 'Пепперони',
        image: pepImage,
        price: 69,
      },
      {
        id: 4,
        title: 'Говядина',
        image: beefImage,
        price: 69,
      },
      {
        id: 5,
        title: 'Куриная грудка',
        image: chikImage,
        price: 69,
      },
      {
        id: 6,
        title: 'Свинина',
        image: porkImage,
        price: 69,
      },
      {
        id: 7,
        title: 'Пармезан',
        image: cheeseImage,
        price: 69,
      },
      {
        id: 8,
        title: 'Моцарелла',
        image: mozzarellaImage,
        price: 69,
      },
      {
        id: 9,
        title: 'Руккола',
        image: arugulaImage,
        price: 69,
      },
      {
        id: 10,
        title: 'Помидоры',
        image: tomatoImage,
        price: 69,
      },
      {
        id: 11,
        title: 'Болгарский перец',
        image: pepperImage,
        price: 69,
      },
      {
        id: 12,
        title: 'Перец халапеньо',
        image: halapeImage,
        price: 69,
      },
      {
        id: 13,
        title: 'Лук красный',
        image: onionImage,
        price: 69,
      },
      {
        id: 14,
        title: 'Картофель по-деревенски',
        image: potatoImage,
        price: 69,
      },
      {
        id: 15,
        title: 'Лук фри',
        image: freeOnionImage,
        price: 69,
      },
      {
        id: 16,
        title: 'Шампиньоны',
        image: mushroomImage,
        price: 69,
      },
      {
        id: 17,
        title: 'Маслины',
        image: oliveImage,
        price: 69,
      },
      {
        id: 18,
        title: 'Огурчики маринованные',
        image: cucumberImage,
        price: 69,
      },
      {
        id: 19,
        title: 'Семга',
        image: salmonImage,
        price: 69,
      },
    ],
  },
  {
    id: 3,
    title: 'Жульетта',
    image: gulienImage,
    parameters: 'Средняя 30 см, традиционное тесто, 690 г',
    sizes: [
      {
        size: '26 см',
        weight: '430 г',
      },
      {
        size: '30 см',
        weight: '575 г',
      },
      {
        size: '40 см',
        weight: '880 г',
      },
    ],
    description: 'Грибы шампиньоны, моцарелла для пиццы',
    price: '1659',
    favorite: false,
    calories: '265 ',
    proteins: '12,6',
    carbohydrates: '12,8',
    fats: '12,1',
    supplements: [
      {
        id: 1,
        title: 'Бекон',
        image: baconImage,
        price: 69,
      },
      {
        id: 2,
        title: 'Ветчина',
        image: hamImage,
        price: 69,
      },
      {
        id: 3,
        title: 'Пепперони',
        image: pepImage,
        price: 69,
      },
      {
        id: 4,
        title: 'Говядина',
        image: beefImage,
        price: 69,
      },
      {
        id: 5,
        title: 'Куриная грудка',
        image: chikImage,
        price: 69,
      },
      {
        id: 6,
        title: 'Свинина',
        image: porkImage,
        price: 69,
      },
      {
        id: 7,
        title: 'Пармезан',
        image: cheeseImage,
        price: 69,
      },
      {
        id: 8,
        title: 'Моцарелла',
        image: mozzarellaImage,
        price: 69,
      },
      {
        id: 9,
        title: 'Руккола',
        image: arugulaImage,
        price: 69,
      },
      {
        id: 10,
        title: 'Помидоры',
        image: tomatoImage,
        price: 69,
      },
      {
        id: 11,
        title: 'Болгарский перец',
        image: pepperImage,
        price: 69,
      },
      {
        id: 12,
        title: 'Перец халапеньо',
        image: halapeImage,
        price: 69,
      },
      {
        id: 13,
        title: 'Лук красный',
        image: onionImage,
        price: 69,
      },
      {
        id: 14,
        title: 'Картофель по-деревенски',
        image: potatoImage,
        price: 69,
      },
      {
        id: 15,
        title: 'Лук фри',
        image: freeOnionImage,
        price: 69,
      },
      {
        id: 16,
        title: 'Шампиньоны',
        image: mushroomImage,
        price: 69,
      },
      {
        id: 17,
        title: 'Маслины',
        image: oliveImage,
        price: 69,
      },
      {
        id: 18,
        title: 'Огурчики маринованные',
        image: cucumberImage,
        price: 69,
      },
      {
        id: 19,
        title: 'Семга',
        image: salmonImage,
        price: 69,
      },
    ],
  },
  {
    id: 4,
    title: 'Куриное Царство',
    image: chickenImage,
    parameters: 'Средняя 30 см, традиционное тесто, 690 г',
    sizes: [
      {
        size: '26 см',
        weight: '430 г',
      },
      {
        size: '30 см',
        weight: '575 г',
      },
      {
        size: '40 см',
        weight: '880 г',
      },
    ],
    description:
      'Соус "Шеф" (чеснок майонез соус соевый зелень), моцарелла для пиццы, грудка куриная',
    price: '1659',
    favorite: false,
    calories: '265 ',
    proteins: '12,6',
    carbohydrates: '12,8',
    fats: '12,1',
    supplements: [
      {
        id: 1,
        title: 'Бекон',
        image: baconImage,
        price: 69,
      },
      {
        id: 2,
        title: 'Ветчина',
        image: hamImage,
        price: 69,
      },
      {
        id: 3,
        title: 'Пепперони',
        image: pepImage,
        price: 69,
      },
      {
        id: 4,
        title: 'Говядина',
        image: beefImage,
        price: 69,
      },
      {
        id: 5,
        title: 'Куриная грудка',
        image: chikImage,
        price: 69,
      },
      {
        id: 6,
        title: 'Свинина',
        image: porkImage,
        price: 69,
      },
      {
        id: 7,
        title: 'Пармезан',
        image: cheeseImage,
        price: 69,
      },
      {
        id: 8,
        title: 'Моцарелла',
        image: mozzarellaImage,
        price: 69,
      },
      {
        id: 9,
        title: 'Руккола',
        image: arugulaImage,
        price: 69,
      },
      {
        id: 10,
        title: 'Помидоры',
        image: tomatoImage,
        price: 69,
      },
      {
        id: 11,
        title: 'Болгарский перец',
        image: pepperImage,
        price: 69,
      },
      {
        id: 12,
        title: 'Перец халапеньо',
        image: halapeImage,
        price: 69,
      },
      {
        id: 13,
        title: 'Лук красный',
        image: onionImage,
        price: 69,
      },
      {
        id: 14,
        title: 'Картофель по-деревенски',
        image: potatoImage,
        price: 69,
      },
      {
        id: 15,
        title: 'Лук фри',
        image: freeOnionImage,
        price: 69,
      },
      {
        id: 16,
        title: 'Шампиньоны',
        image: mushroomImage,
        price: 69,
      },
      {
        id: 17,
        title: 'Маслины',
        image: oliveImage,
        price: 69,
      },
      {
        id: 18,
        title: 'Огурчики маринованные',
        image: cucumberImage,
        price: 69,
      },
      {
        id: 19,
        title: 'Семга',
        image: salmonImage,
        price: 69,
      },
    ],
  },
];

export const getMockPizzas = () => mockPizzas;
