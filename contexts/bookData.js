export const bookData = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 11.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg",
    summary:
      "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    price: 13.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg",
    summary:
      "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.",
  },
  {
    id: "3",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 10.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
    summary:
      "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
  },
  {
    id: "4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 7.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg",
    summary:
      'The Great Gatsby, F. Scott Fitzgerald\'s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted "gin was the national drink and sex the national obsession," it is an exquisitely crafted tale of America in the 1920s.',
  },
  {
    id: "5",
    title: "Animal Farm",
    author: "George Orwell",
    price: 7.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1325861570l/170448.jpg",
    summary:
      "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible.",
  },
  {
    id: "6",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    price: 12.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg",
    summary:
      "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and once girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.",
  },
  {
    id: "7",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 17.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579036753l/77203._SY475_.jpg",
    summary:
      "The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father’s servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed. It is about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies.",
  },
  {
    id: "8",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    price: 10.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367545443l/157993.jpg",
    summary:
      "Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince. Richard Howard's translation of the beloved classic beautifully reflects Saint-Exupéry's unique and gifted style. Howard, an acclaimed poet and one of the preeminent translators of our time, has excelled in bringing the English text as close as possible to the French, in language, style, and most important, spirit. The artwork in this edition has been restored to match in detail and in color Saint-Exupéry's original artwork. Combining Richard Howard's translation with restored original art, this definitive English-language edition of The Little Prince will capture the hearts of readers of all ages.",
  },
  {
    id: "9",
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    price: 16.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327868566l/2429135.jpg",
    summary:
      "Harriet Vanger, a scion of one of Sweden’s wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption.",
  },
  {
    id: "10",
    title: "Life of Pi",
    author: "Yann Martel",
    price: 17.99,
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320562005l/4214.jpg",
    summary:
      'Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.',
  },
];

export function getAllBookIds() {
  return bookData.map((book) => {
    return {
      params: {
        id: book.id,
      },
    };
  });
}

export function getBookInfo(id) {
  return bookData.find((book) => book.id === id);
}
