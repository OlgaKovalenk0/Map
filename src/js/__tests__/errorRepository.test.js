import { ErrorRepository } from "../errorRepository";

test ('errors map', () => {
  const errorRepository = new ErrorRepository();
  const text1 = errorRepository.translate(35);
  const text2 = errorRepository.translate(53);

  expect(text1).toBe('Ошибка №35');
  expect(text2).toBe('Unknown error');
}
)