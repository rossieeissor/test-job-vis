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

const filterByPrice = requiredRange => {
  // Деструктурируем заданный диапазон
  let [minRequiredPrice, maxRequiredPrice] = requiredRange;

  // Преобразовываем невведённые значения
  // Если значение MIN не введено, принимаем его за 0
  if (minRequiredPrice === null) minRequiredPrice = 0;
  // Если значение MAX не введено, принимаем его за бесконечность
  if (maxRequiredPrice === null) maxRequiredPrice = Infinity;

  // Фильтруем массив с курсами
  return courses.filter(course => {
    // Деструктурируем цены для удобства
    let [minCoursePrice, maxCoursePrice] = course.prices;

    // Если цены не указаны, такой курс отсеивается фильтром
    if (minCoursePrice === null && maxCoursePrice === null) return false;
    // Если минимальная или максимальная цены не указаны, приравниваем минимальную цену к максимальной
    else if (minCoursePrice === null) minCoursePrice = maxCoursePrice;
    else if (maxCoursePrice === null) maxCoursePrice = minCoursePrice;

    // Сравниваем по очереди минимальную цену курса с ценами диапазона, затем максимальную цену курса с ценами диапазона фильтра
    return (
      (minCoursePrice >= minRequiredPrice &&
        minCoursePrice <= maxRequiredPrice) ||
      (maxCoursePrice >= minRequiredPrice && maxCoursePrice <= maxRequiredPrice)
    );
  });
};

console.log(filterByPrice(requiredRange1));
console.log(filterByPrice(requiredRange2));
console.log(filterByPrice(requiredRange3));

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

    // Если минимальная или максимальная цены не указаны, приравниваем минимальную цену к максимальной
    if (minCoursePriceA === null) minCoursePriceA = maxCoursePriceA;
    else if (maxCoursePriceA === null) maxCoursePriceA = minCoursePriceA;

    if (minCoursePriceB === null) minCoursePriceB = maxCoursePriceB;
    else if (maxCoursePriceB === null) maxCoursePriceB = minCoursePriceB;

    // Если минимальные цены равны, сортируем по максимальной цене
    if (minCoursePriceA === minCoursePriceB)
      return maxCoursePriceA - maxCoursePriceB;

    // Сортируем по возрастанию минимальной цены
    if (minCoursePriceA < minCoursePriceB) return -1;
  });
};

console.log(sortByAscending(courses));

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

    // Если минимальная или максимальная цены не указаны, приравниваем минимальную цену к максимальной
    if (minCoursePriceA === null) minCoursePriceA = maxCoursePriceA;
    else if (maxCoursePriceA === null) maxCoursePriceA = minCoursePriceA;

    if (minCoursePriceB === null) minCoursePriceB = maxCoursePriceB;
    else if (maxCoursePriceB === null) maxCoursePriceB = minCoursePriceB;

    // Если минимальные цены равны, сортируем по максимальной цене
    if (minCoursePriceA === minCoursePriceB)
      return maxCoursePriceB - maxCoursePriceA;

    // Сортируем по убыванию минимальной цены
    if (minCoursePriceA > minCoursePriceB) return -1;
  });
};

console.log(sortByDescending(courses));
