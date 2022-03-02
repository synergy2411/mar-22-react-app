import { IExpense } from "./expenses";

export let INITIAL_EXPENSES: IExpense[] = [
    {
      id: "e101",
      title: "grocery",
      body: "to buy the pulses",
      createdAt: new Date("Dec 21, 2019"),
    },
    {
      id: "e102",
      title: "shopping",
      body: "to buy jeans",
      createdAt: new Date("Jan 1, 2020"),
    },
    {
      id: "e103",
      title: "plants",
      body: "to pot the plants",
      createdAt: new Date("Aug 12, 2021"),
    },
  ];