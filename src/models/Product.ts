import * as Yup from "yup";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: {
    data: {
      amount: number;
    }[];
  };
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
