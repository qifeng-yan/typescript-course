const movie: string = 'Avatar';
let catName = 'Micky';

function greet(name: string) {
  console.log(`Hello ${name}`);
}

//Exercise　１
function twoFer(name: string = 'you'): string {
  return `one for ${name}, one for me`;
}

function isLearyear(year: number) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0) {
    year % 100 === 0 ? false : true;
  } else {
    return false;
  }
}

//exercise

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
  title: 'Dune',
  originalTitle: 'Dune Part One',
  director: 'Denis Villeneuve',
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: 'Cats',
  director: 'Tom Hooper',
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

function getProfit(movie: Movie): number {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}

//exercise
let ages: Array<number> = [];
let gameBoard: string[][] = [];

type Product = {
  name: string;
  price: number;
};

let;

function getTotal(products: Array<Product>): number {
  let sum = 0;
  for (let product of products) {
    sum += product.price;
  }
  return sum;
}
