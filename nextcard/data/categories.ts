export type Category = {
  id: number;
  name: string;
  color: string;
  textColor: string;
};

export const categories: Category[] = [
  { id: 1, name: "Electronics", color: "#14213D", textColor: "#FBF8F3" },
  { id: 2, name: "Fashion", color: "#FF5C39", textColor: "#FBF8F3" },
  { id: 3, name: "Home & Living", color: "#1B998B", textColor: "#FBF8F3" },
  { id: 4, name: "Beauty", color: "#FFB627", textColor: "#14213D" },
  { id: 5, name: "Toys & Baby", color: "#6B7280", textColor: "#FBF8F3" },
  { id: 6, name: "Groceries", color: "#E14A2A", textColor: "#FBF8F3" },
];
