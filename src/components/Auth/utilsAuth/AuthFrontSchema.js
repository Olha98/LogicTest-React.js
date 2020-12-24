import * as Yup from 'yup';

export const registrationFrontSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'минимальное количество символов: 2')
    .max(16, 'максимальное количество символов: 16')
    .matches(
      /^[A-Za-zА-Яа-яЇїІіА-Яа-яËё]+$/,
      'имя может содержать только алфавитные символы',
    )
    .required('обязательное поле для заполнения'),

  email: Yup.string()
    .email('неправильный формат email')
    .max(30, 'максимальное количество символов: 30')
    .required('обязательное поле для заполнения'),

  password: Yup.string()
    .min(8, 'минимальное количество символов: 8')
    .max(16, 'максимальное количество символов: 16')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
      'пароль должен содежать латинские прописные, заглавные буквы и цифры',
    )
    .required('обязательное поле для заполнения'),
});

export const loginFrontSchema = Yup.object().shape({
  email: Yup.string()
    .email('неправильный формат email')
    .max(30, 'максимальное количество символов: 30')
    .required('обязательное поле для заполнения'),

  password: Yup.string()
    .min(8, 'минимальное количество символов: 8')
    .max(16, 'максимальное количество символов: 16')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
      'пароль должен содежать латинские прописные, заглавные буквы и цифры',
    )
    .required('обязательное поле для заполнения'),
});

//!"password" must has min 8 symbols, max 16 symbols, only digital letters and literal letters