const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks", {
        useNewUrlParser: true
    }
);

const bookSeed = [
    {
        googleId: '2_P1mAEACAAJ',
        title: 'The Super Book for Super Heroes',
        subTitle: '',
        author: '',
        description: 'The Super Book for Super Heroes is a compendium of ideas, drawing, coloring, and activities that allows you to create your own crusaders for justice who do battle with super villains, unravelling their crazed schemes for taking over the world. You will learn to draw villains such as the Mad Scientist, Bog Creature, and Evil Robot, while also creating superheroes, their sidekicks, secret hideouts, outfits, and super gadgets. And there are superpowers to discover – such as invisibility, super strength, speed, flight, heat vision, teleportation, and X-ray vision. This book is a must for anyone wanting to create their own superhero universe!',
        publisher: 'Laurence King Publishing',
        publishedDate: '2013-10-22',
        image: 'http://books.google.com/books/content?id=2_P1mAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        link: 'http://books.google.ca/books?id=2_P1mAEACAAJ&dq=super&hl=&cd=1&source=gbs_api',
        pageCount: '144',
        language: 'en',
    },
    {
        googleId: '-bpn-g2yYBYC',
        title: 'Super',
        subTitle: '',
        author: 'Matthew Cody',
        description: '"In this sequel to POWERLESS, the superpowered kids of Noble\'s Green are once again threatened by an unknown force that may be trying to steal their powers"--Provided by publisher.',
        publisher: 'Alfred A. Knopf Books for Young Readers',
        publishedDate: '2012',
        image: 'http://books.google.com/books/content?id=-bpn-g2yYBYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        link: 'http://books.google.ca/books?id=-bpn-g2yYBYC&dq=super&hl=&source=gbs_api',
        pageCount: '298',
        language: 'en',
    },
    {
        googleId: '7aUfd2zHUnoC',
        title: 'Super Resolution of Images and Video',
        subTitle: '',
        author: "Aggelos Konstantinos Katsaggelos",
        description: 'Authors Katsaggelos, Molina, and Mateos present in a systematic way the building blocks of the Bayesian framework, which is also used as a reference in reviewing and comparing Super Resolution (SR) approaches which have appeared in the literature. This work should serve as a reference to the graduate student who would like to work in this area, to the practicing engineer, and scientists applying some of the tools and results to other related problems.The authors present a case that there is a strong relationship between the tools and techniques developed for SR and a number of other inverse problems encountered in signal processing (e.g., image restoration, and motion estimation). SR techniques can also be an integral part of an image and video codec and they can drive the development of new coder-decoders (codecs) and standards.',
        publisher: 'Morgan & Claypool Publishers',
        publishedDate: '2007',
        image: 'http://books.google.com/books/content?id=7aUfd2zHUnoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        link: 'http://books.google.ca/books?id=7aUfd2zHUnoC&dq=super&hl=&source=gbs_api',
        pageCount: '134',
        language: 'en',
    }
];

db.Book
    .deleteMany({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(dataBook => {
        console.log(dataBook.result.n + " BOOK records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        // process.exit(1);
    });
