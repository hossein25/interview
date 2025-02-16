import { FieldTypes } from "../types/field";
import { FormSchema } from "../types/form";

export const baseFormSchema: FormSchema = [
  {
    title: "نام",
    type: FieldTypes.Input,
    name: "firstName",
    placeholder: "نام خود را وارد کنید",
  },
  {
    title: "نام خانوادگی",
    type: FieldTypes.Input,
    name: "lastName",
    placeholder: "نام خانوادگی خود را وارد کنید",
  },
  {
    title: "فعالیت",
    type: FieldTypes.Select,
    name: "activity",
    options: [
      { title: "واسطه گر", value: "mediator" },
      {
        title: "نمایشگاه دار",
        value: "showroom",
      },
    ],
    forms: {
      showroom: [
        {
          title: "نام نمایشگاه",
          type: FieldTypes.Input,
          name: "name_showroom",
          placeholder: "نام نمایشگاه خود را وارد کنید",
        },
      ],
    },
  },
  {
    title: "انتخاب شهر",
    type: FieldTypes.Select,
    name: "province",
    options: [
      { title: "تهران", value: "tehran" },
      { title: "اصفهان", value: "isfahan" },
      { title: "خراسان رضوی", value: "khorasan-razavi" },
      { title: "فارس", value: "fars" },
      { title: "آذربایجان شرقی", value: "azarbayjan-sharghi" },
      { title: "آذربایجان غربی", value: "azarbayjan-gharbi" },
      { title: "خوزستان", value: "khuzestan" },
      { title: "کرمان", value: "kerman" },
      { title: "مازندران", value: "mazandaran" },
      { title: "گیلان", value: "gilan" },
      { title: "سیستان و بلوچستان", value: "sistan-baluchestan" },
      { title: "البرز", value: "alborz" },
      { title: "قم", value: "qom" },
      { title: "کردستان", value: "kordestan" },
      { title: "همدان", value: "hamedan" },
      { title: "زنجان", value: "zanjan" },
      { title: "کرمانشاه", value: "kermanshah" },
      { title: "گلستان", value: "golestan" },
      { title: "لرستان", value: "lorestan" },
      { title: "بوشهر", value: "bushehr" },
      { title: "یزد", value: "yazd" },
      { title: "چهارمحال و بختیاری", value: "chaharmahal-bakhtiari" },
      { title: "قزوین", value: "qazvin" },
      { title: "خراسان جنوبی", value: "khorasan-jonubi" },
      { title: "خراسان شمالی", value: "khorasan-shomali" },
      { title: "اردبیل", value: "ardabil" },
      { title: "ایلام", value: "ilam" },
      { title: "هرمزگان", value: "hormozgan" },
      { title: "کهگیلویه و بویراحمد", value: "kohgiluyeh-boyerahmad" },
      { title: "سمنان", value: "semnan" },
      { title: "مرکزی", value: "markazi" },
    ],
  },
];
