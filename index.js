// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Функция фильтрации
const filterByPrice = requiredRange => {
  // Деструктурируем заданный диапазон
  let [minFilterPrice, maxFilterPrice] = requiredRange;

  // Преобразовываем невведённые значения
  // Если значение MIN не введено, принимаем его за 0
  if (minFilterPrice === null) minFilterPrice = 0;
  // Если значение MAX не введено, принимаем его за бесконечность
  if (maxFilterPrice === null) maxFilterPrice = Infinity;

  // Фильтруем массив с курсами
  return courses.filter(course => {
    // Деструктурируем цены для удобства
    let [minCoursePrice, maxCoursePrice] = course.prices;

    // Если цены в курсе не указаны, такой курс отсеивается фильтром
    if (minCoursePrice === null && maxCoursePrice === null) return false;
    // Если минимальная цена не указана, принимаем её за 0
    else if (minCoursePrice === null) minCoursePrice = 0;
    // Если максимальная цена не указана, принимаем её за бесконечность
    else if (maxCoursePrice === null) maxCoursePrice = Infinity;

    // Проверяем, чтобы минимальная цена фильтра находилась в диапазоне между минимальной и максимальной ценами курса.
    // Затем также проверяем максимальную цену фильтра.
    // Затем проверяем, чтобы минимальная цена курса находилась в диапазоне между ценами фильтра
    // И, наконец, проверяем, также максимальную цену курса
    // Если хотя бы одно из выражений верно, то такой курс удовлетворяет требованиям фильтра
    return (
      (minFilterPrice >= minCoursePrice && minFilterPrice <= maxCoursePrice) ||
      (maxFilterPrice >= minCoursePrice && maxFilterPrice <= maxCoursePrice) ||
      (minCoursePrice >= minFilterPrice && minCoursePrice <= maxFilterPrice) ||
      (maxCoursePrice >= minFilterPrice && maxCoursePrice <= maxFilterPrice)
    );
  });
};

console.log(filterByPrice(requiredRange1));
console.log(filterByPrice(requiredRange2));
console.log(filterByPrice(requiredRange3));

// Функция сортировки по возрастанию цены
const sortByAscending = courses => {
  // Создаём копию массива
  let sortedCourses = [...courses];

  // Сортируем массив с курсами
  return sortedCourses.sort((a, b) => {
    // Деструктурируем минимальные и максимальные цены для удобства
    let [minCoursePriceA, maxCoursePriceA] = a.prices;
    let [minCoursePriceB, maxCoursePriceB] = b.prices;

    // Если сраниваются курсы без указанных цен, порядок не меняется
    if (
      minCoursePriceA === null &&
      maxCoursePriceA === null &&
      minCoursePriceB === null &&
      maxCoursePriceB === null
    ) {
      return 0;

      // Курс без указанных цен отправляем в конец массива
    } else if (minCoursePriceA === null && maxCoursePriceA === null) return 1;
    else if (minCoursePriceB === null && maxCoursePriceB === null) return -1;

    // Если минимальная цена "А" не указана, принимаем её за 0
    if (minCoursePriceA === null) minCoursePriceA = 0;
    // Если максимальная цена "А" не указана, принимаем её за бесконечность
    else if (maxCoursePriceA === null) maxCoursePriceA = Infinity;

    // Если минимальная цена "B" не указана, принимаем её за 0
    if (minCoursePriceB === null) minCoursePriceB = 0;
    // Если максимальная цена "B" не указана, принимаем её за бесконечность
    else if (maxCoursePriceB === null) maxCoursePriceB = Infinity;

    // Если минимальные цены равны, сортируем по максимальной цене
    if (minCoursePriceA === minCoursePriceB)
      return maxCoursePriceA - maxCoursePriceB;

    // Сортируем по возрастанию минимальной цены
    if (minCoursePriceA < minCoursePriceB) return -1;
  });
};

console.log(sortByAscending(courses));

// Функция сортировки по убыванию цены
const sortByDescending = courses => {
  // Создаём копию массива
  let sortedCourses = [...courses];

  // Сортируем массив с курсами
  return sortedCourses.sort((a, b) => {
    // Деструктурируем минимальные и максимальные цены для удобства
    let [minCoursePriceA, maxCoursePriceA] = a.prices;
    let [minCoursePriceB, maxCoursePriceB] = b.prices;

    // Если сраниваются курсы без указанных цен, порядок не меняется
    if (
      minCoursePriceA === null &&
      maxCoursePriceA === null &&
      minCoursePriceB === null &&
      maxCoursePriceB === null
    ) {
      return 0;

      // Курс без указанных цен отправляем в конец массива
    } else if (minCoursePriceA === null && maxCoursePriceA === null) return 1;
    else if (minCoursePriceB === null && maxCoursePriceB === null) return -1;

    // Если минимальная цена "А" не указана, принимаем её за 0
    if (minCoursePriceA === null) minCoursePriceA = 0;
    // Если максимальная цена "А" не указана, принимаем её за бесконечность
    else if (maxCoursePriceA === null) maxCoursePriceA = Infinity;

    // Если минимальная цена "B" не указана, принимаем её за 0
    if (minCoursePriceB === null) minCoursePriceB = 0;
    // Если максимальная цена "B" не указана, принимаем её за бесконечность
    else if (maxCoursePriceB === null) maxCoursePriceB = Infinity;

    // Если максимальные цены равны, сортируем по минимальной цене
    if (maxCoursePriceA === maxCoursePriceB)
      return minCoursePriceB - minCoursePriceA;

    // Сортируем по убыванию максимальной цены
    if (maxCoursePriceA > maxCoursePriceB) return -1;
  });
};

console.log(sortByDescending(courses));
