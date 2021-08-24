import * as Yup from "yup";

type MetricValueType = {
  value: number;
  unit: string;
};

type ImperialValueType = {
  value: string;
};

type MeasureType = {
  metric?: MetricValueType;
  imperial?: ImperialValueType;
};

export type Product = {
  id: number;
  name: string;
  description?: string;
  specifications?: {
    yard?: string;
    type?: string;
    guests?: number;
    crew?: number;
    cabins?: number;
    length?: MeasureType;
    beam?: MeasureType;
    draft?: MeasureType;
    yearOfBuild?: number;
    classification?: string;
    refit?: number;
    displacement?: string;
    brand?: string;
    model?: string;
    enginePower?: MeasureType;
    totalPower?: MeasureType;
    maximumSpeed?: MeasureType;
    cruisingSpeed?: MeasureType;
    range?: MeasureType;
    fuelConsumption?: MeasureType;
    grossTonage?: number;
    hull?: string;
    superstructure?: string;
    interiorDesigner?: string;
    generator?: string;
    stabilizers?: string;
    zeroSpeed?: string;
    waterCapacity?: number;
    flag?: string;
    portOfRegistry?: string;
    fuelCapacity?: number;
  };
  price?: {
    data: {
      amount: number;
      currency?: string;
    }[];
  };
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  specifications: Yup.object().shape({
    yard: Yup.string(),
    type: Yup.string(),
    guests: Yup.number(),
    crew: Yup.number(),
    cabins: Yup.number(),
    length: Yup.object().shape({
      metric: Yup.object().shape({
        value: Yup.number(),
        unit: Yup.string(),
      }),
      imperial: Yup.object().shape({
        value: Yup.string(),
      }),
    }),
    beam: Yup.object().shape({
      metric: Yup.object().shape({
        value: Yup.number(),
        unit: Yup.string(),
      }),
      imperial: Yup.object().shape({
        value: Yup.string(),
      }),
    }),
    draft: Yup.object().shape({
      metric: Yup.object().shape({
        value: Yup.number(),
        unit: Yup.string(),
      }),
      imperial: Yup.object().shape({
        value: Yup.string(),
      }),
    }),
    yearOfBuild: Yup.number(),
    classification: Yup.string(),
    refit: Yup.number(),
    displacement: Yup.string(),
    brand: Yup.string(),
    model: Yup.string(),
    enginePower: Yup.object().shape({
      value: Yup.number(),
      unit: Yup.string(),
    }),
    totalPower: Yup.object().shape({
      value: Yup.number(),
      unit: Yup.string(),
    }),
    maximumSpeed: Yup.object().shape({
      value: Yup.number(),
      unit: Yup.string(),
    }),
    cruisingSpeed: Yup.object().shape({
      value: Yup.number(),
      unit: Yup.string(),
    }),
    range: Yup.object().shape({
      value: Yup.number(),
      unit: Yup.string(),
    }),
    fuelConsumption: Yup.object().shape({
      value: Yup.number(),
      unit: Yup.string(),
    }),
    grossTonage: Yup.number(),
    hull: Yup.string(),
    superstructure: Yup.string(),
    interiorDesigner: Yup.string(),
    generator: Yup.string(),
    stabilizers: Yup.string(),
    zeroSpeed: Yup.string(),
    waterCapacity: Yup.number(),
    flag: Yup.string(),
    portOfRegistry: Yup.string(),
    fuelCapacity: Yup.number(),
  }),
  price: Yup.object().shape({
    data: Yup.array().of(
      Yup.object().shape({
        amount: Yup.number().required(),
        currency: Yup.string(),
      })
    ),
  }),
});
