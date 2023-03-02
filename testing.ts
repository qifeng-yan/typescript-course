const movie: string = 'Avatar';
let catName = 'Micky';

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

function calculateTax(price: number | string, tax: number) {
  return +price * tax;
}

// exercise
let highScore: number | boolean = true;
let stuff: number[] | string[] = [];

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: 'ski' | 'snowboard';
  level: SkillLevel;
};

type RGBColor = {
  r: number;
  g: number;
  b: number;
};

type HSLColor = {
  h: number;
  s: number;
  l: number;
};

let colors: (RGBColor | HSLColor)[] = [];

function greet(name: string | string[]): void {
  if (typeof name === 'string') {
    console.log(`Hello, ${name}`);
  } else {
    for (let n in name) {
      console.log(`Hello, ${n}`);
    }
  }
}
