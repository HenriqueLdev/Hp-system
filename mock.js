const clientsData = [
    {
      id: 1,
      nomeCompleto: 'João da Silva',
      cpf: '123.456.789-00',
      parcelas: [ {parcela:1,valor:1000,Venc:'03/06/2023'},
      {parcela:2,valor:1000,Venc:'03/05/2023'},
      {parcela:3,valor:1000,Venc:'03/04/2023'},
      {parcela:4,valor:1000,Venc:'03/03/2023'},],
      contrato:12345632,
      diasEmAtraso: 15,
      valor:2000,
      desconto:20
    },
    {
      id: 2,
      nomeCompleto: 'Maria Souza',
      cpf: '987.654.321-00',
      parcelas:[ {parcela:1,valor:1000,Venc:'03/06/2023'},
      {parcela:2,valor:1000,Venc:'03/05/2023'},
      {parcela:3,valor:1000,Venc:'03/04/2023'},
      {parcela:4,valor:1000,Venc:'03/03/2023'},],
      contrato:123456,
      diasEmAtraso: 7,
      valor:3000,
      desconto:30
    },
    {
      id: 3,
      nomeCompleto: 'Pedro Santos',
      cpf: '555.444.333-22',
      parcelas: [ {parcela:1,valor:1000,Venc:'03/06/2023'},
      {parcela:2,valor:1000,Venc:'03/05/2023'},
      {parcela:3,valor:1000,Venc:'03/04/2023'},
      {parcela:4,valor:1000,Venc:'03/03/2023'},],
      contrato:123456,
      diasEmAtraso: 30,
      valor:4000,
      desconto:40
    },
    {
      id: 4,
      nomeCompleto: 'Ana Oliveira',
      cpf: '111.222.333-44',
      parcelas: [
        {parcela:1,valor:1000,Venc:'03/06/2023'},
        {parcela:2,valor:1000,Venc:'03/05/2023'},
        {parcela:3,valor:1000,Venc:'03/04/2023'},
        {parcela:4,valor:1000,Venc:'03/03/2023'},
        
      ],
      contrato:123456,
      diasEmAtraso: 3,
      valor:5000,
      desconto:50
    }
  ];
  
  export default clientsData
  