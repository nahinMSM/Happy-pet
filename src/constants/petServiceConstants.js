export const services = [
  { id: "hotel", name: "Hotel 24h" },
  { id: "daycare", name: "Day Care" },
  { id: "creche", name: "Creche" },
  { id: "banho", name: "Banho" }
];

export const initialForms = {
  hotel: { name: "", age: "", breed: "", owner: "", phone: "", checkIn: "", checkOut: "" },
  daycare: { name: "", age: "", breed: "", owner: "", phone: "", date: "" },
  creche: { name: "", age: "", breed: "", owner: "", phone: "", shift: "" },
  banho: { name: "", age: "", breed: "", furColor: "", owner: "", phone: "", dateTime: "", option: "" }
};

export const fieldLabels = {
  hotel: {
    name: "Nome do cão",
    age: "Idade",
    breed: "Raça",
    owner: "Nome do tutor",
    phone: "Telefone do tutor",
    checkIn: "Data e hora da entrada",
    checkOut: "Data e hora da saída"
  },
  daycare: {
    name: "Nome do cão",
    age: "Idade",
    breed: "Raça",
    owner: "Nome do tutor",
    phone: "Telefone do tutor",
    date: "Data"
  },
  creche: {
    name: "Nome do cão",
    age: "Idade",
    breed: "Raça",
    owner: "Nome do tutor",
    phone: "Telefone do tutor",
    shift: "Turno",
  },
  banho: {
    name: "Nome do cão",
    age: "Idade",
    breed: "Raça",
    furColor: "Cor da pelagem",
    owner: "Nome do tutor",
    phone: "Telefone do tutor",
    dateTime: "Data e hora",
    option: "Opção"
  }
};
