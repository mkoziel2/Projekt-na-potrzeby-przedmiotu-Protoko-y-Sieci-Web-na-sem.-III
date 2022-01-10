let questions = [
    {
      id: 1,
      category: 'History',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What was William Frederick Cody better known as?',
      correct_answer: 'Buffalo Bill',
      incorrect_answers: [ 'Billy the Kid', 'Wild Bill Hickok', 'Pawnee Bill' ],
      authorId: 2
    },
    {
      id: 2,
      category: 'Entertainment:  Music',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What was the title of ABBA`s first UK hit single?',
      correct_answer: 'Waterloo',
      incorrect_answers: [ 'Mamma Mia', 'Fernando', 'Dancing Queen' ],
      authorId: 3
    },
    {
      id: 3,
      category: 'Geography',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the capital of Indonesia?',
      correct_answer: 'Jakarta',
      incorrect_answers: [ 'Bandung', 'Medan', 'Palembang' ],
      authorId: 4
    },
    {
      id: 4,
      category: 'Science:  Computers',
      type: 'multiple',
      difficulty: 'medium',
      question: 'When was the programming language &quot;C#&quot; released?',
      correct_answer: '2000',
      incorrect_answers: [ '1998', '1999', '2001' ],
      authorId: 5
    },
    {
      id: 5,
      category: 'Science:  Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'HTML is what type of language?',
      correct_answer: 'Markup Language',
      incorrect_answers: [ 'Macro Language', 'Programming Language', 'Scripting Language' ],
      authorId: 6
    },
    {
      id: 6,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Which video game earned music composer Mike Morasky the most awards for his work?',
      correct_answer: 'Portal 2',
      incorrect_answers: [
        'Left 4 Dead 2',
        'Team Fortress 2',
        'Counter-Strike:  Global Offensive'
      ],
      authorId: 7
    },
    {
      id: 7,
      category: 'Entertainment:  Board Games',
      type: 'multiple',
      difficulty: 'easy',
      question: 'How many dots are on a single die?',
      correct_answer: '21',
      incorrect_answers: [ '24', '15', '18' ],
      authorId: 8
    },
    {
      id: 8,
      category: 'Art',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What nationality was the surrealist painter Salvador Dali?',
      correct_answer: 'Spanish',
      incorrect_answers: [ 'Italian', 'French', 'Portuguese' ],
      authorId: 9
    },
    {
      id: 9,
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Which language is NOT Indo-European?',
      correct_answer: 'Hungarian',
      incorrect_answers: [ 'Russian', 'Greek', 'Latvian' ],
      authorId: 10
    },
    {
      id: 10,
      category: 'Vehicles',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Complete the following analogy:  Audi is to Volkswagen as Infiniti is to ?',
      correct_answer: 'Nissan',
      incorrect_answers: [ 'Honda', 'Hyundai', 'Subaru' ],
      authorId: 1
    },
    {
      id: 11,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'hard',
      question: 'Which video game was recalled for containing a hidden, playable South Park episode?',
      correct_answer: 'Tiger Woods 99 PGA Tour',
      incorrect_answers: [ 'Tony Hawk&#039;s Pro Skater 3', 'Sonic Adventure', 'Madden 99' ],
      authorId: 2
    },
    {
      id: 12,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question: 'How many times do you fight Gilgamesh in &quot;Final Fantasy 5&quot;?',
      correct_answer: '6',
      incorrect_answers: [ '4', '5', '3' ],
      authorId: 3
    },
    {
      id: 13,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'hard',
      question: 'In the original &quot;Super Mario Bros.&quot;, what is the acceleration of Mario if he was in free fall?',
      correct_answer: '91.28 m/s^2',
      incorrect_answers: [ '110  m/s^2', '9.42  m/s^2', '4.4  m/s^2' ],
      authorId: 4
    },
    {
      id: 14,
      category: 'Entertainment:  Music',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Finish these lyrics from the 2016 song &quot;Panda&quot; by Desiigner:  &quot;I got broads in _______&quot;.',
      correct_answer: 'Atlanta',
      incorrect_answers: [ 'Savannah', 'Augusta', 'Marietta' ],
      authorId: 5
    },
    {
      id: 15,
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'hard',
      question: 'Which of the following is not another name for the eggplant?',
      correct_answer: 'Potimarron',
      incorrect_answers: [ 'Brinjal', 'Guinea Squash', 'Melongene' ],
      authorId: 6
    },
    {
      id: 16,
      category: 'Entertainment:  Music',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Who is the lead singer of Silverchair?',
      correct_answer: 'Daniel Johns',
      incorrect_answers: [ 'Ben Gillies', 'Chris Joannou', 'George Costanza' ],
      authorId: 7
    },
    {
      id: 17,
      category: 'Entertainment:  Cartoon & Animations',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What is the name of Sid&#039;s dog in &quot;Toy Story&quot;?',
      correct_answer: 'Scud',
      incorrect_answers: [ 'Buster', 'Whiskers', 'Mr. Jones' ],
      authorId: 8
    },
    {
      id: 18,
      category: 'Entertainment:  Cartoon & Animations',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Which of these is not a real character in the cartoon series My Little Pony:  Friendship is Magic?',
      correct_answer: 'Rose Marene',
      incorrect_answers: [ 'Pinkie Pie', 'Maud Pie', 'Rainbow Dash' ],
      authorId: 9
    },
    {
      id: 19,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which Mario spin-off game did Waluigi make his debut?',
      correct_answer: 'Mario Tennis',
      incorrect_answers: [
        'Mario Party 3',
        'Mario Kart:  Double Dash!!',
        'Mario Golf:  Toadstool Tour'
      ],
      authorId: 10
    },
    {
      id: 20,
      category: 'Science:  Computers',
      type: 'multiple',
      difficulty: 'medium',
      question: 'How many cores does the Intel i7-6950X have?',
      correct_answer: '10',
      incorrect_answers: [ '12', '8', '4' ],
      authorId: 1
    },
    {
      id: 21,
      category: 'Entertainment:  Japanese Anime & Manga',
      type: 'multiple',
      difficulty: 'hard',
      question: 'What is the last line muttered in the anime film &quot;The End of Evangelion&quot;?',
      correct_answer: '&quot;How disgusting.&quot;',
      incorrect_answers: [
        '&quot;Idiot, I won&#039;t let you kill me!&quot;',
        '&quot;Nothing.&quot;',
        '&quot;Goddammit, Shinji.&quot;'
      ],
      authorId: 2
    },
    {
      id: 22,
      category: 'Entertainment:  Film',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Who played Baron Victor Frankestein in the 1957 Hammer horror film &quot;The Curse of Frankenstein&quot;?',
      correct_answer: 'Peter Cushing',
      incorrect_answers: [ 'Boris Karloff', 'Vincent Price', 'Lon Chaney Jr.' ],
      authorId: 3
    },
    {
      id: 23,
      category: 'Entertainment:  Television',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Who is the main character in the show &quot;Burn Notice&quot;?',
      correct_answer: 'Michael Westen',
      incorrect_answers: [ 'Sam Axe', 'Fiona Glenanne', 'Madeline Westen' ],
      authorId: 4
    },
    {
      id: 24,
      category: 'Science:  Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: [ '120', '160', '100' ],
      authorId: 5
    },
    {
      id: 25,
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What do the letters in the GMT time zone stand for?',
      correct_answer: 'Greenwich Mean Time',
      incorrect_answers: [
        'Global Meridian Time',
        'General Median Time',
        'Glasgow Man Time'
      ],
      authorId: 6
    },
    {
      id: 26,
      category: 'History',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What was the first sport to have been played on the moon?',
      correct_answer: 'Golf',
      incorrect_answers: [ 'Football', 'Tennis', 'Soccer' ],
      authorId: 7
    },
    {
      id: 27,
      category: 'Entertainment:  Film',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-lll?',
      correct_answer: 'Ewan McGregor',
      incorrect_answers: [ 'Alec Guinness', 'Hayden Christensen', 'Liam Neeson' ],
      authorId: 8
    },
    {
      id: 28,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Who are the original creators of Rachet &amp; Clank?',
      correct_answer: 'Insomniac Games',
      incorrect_answers: [ 'PixelTail Games', 'Rare', 'Bethesda' ],
      authorId: 9
    },
    {
      id: 29,
      category: 'Entertainment:  Music',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which Nirvana album had a naked baby on the cover?',
      correct_answer: 'Nevermind',
      incorrect_answers: [ 'Bleach', 'In Utero', 'Incesticide' ],
      authorId: 10
    },
    {
      id: 30,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the maximum HP in Terraria?',
      correct_answer: '500',
      incorrect_answers: [ '400', '1000', '100' ],
      authorId: 1
    },
    {
      id: 31,
      category: 'Entertainment:  Comics',
      type: 'multiple',
      difficulty: 'hard',
      question: 'What is the real hair colour of the mainstream comic book version (Earth-616) of Daredevil?',
      correct_answer: 'Blonde',
      incorrect_answers: [ 'Auburn', 'Brown', 'Black' ],
      authorId: 2
    },
    {
      id: 32,
      category: 'Entertainment:  Music',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Who is the lead singer of Green Day?',
      correct_answer: 'Billie Joe Armstrong',
      incorrect_answers: [ 'Mike Dirnt', 'Sean Hughes', 'Tr&eacute; Cool' ],
      authorId: 3
    },
    {
      id: 33,
      category: 'Entertainment:  Books',
      type: 'multiple',
      difficulty: 'medium',
      question: 'In Michael Crichton&#039;s novel &quot;Jurassic Park&quot;, John Hammond meets his demise at the claws of which dinosaur?',
      correct_answer: 'Procompsognathus',
      incorrect_answers: [ 'Dilophosaurus', 'Tyrannosaurus Rex', 'Velociraptor' ],
      authorId: 4
    },
    {
      id: 34,
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Which iconic Disneyland attraction was closed in 2017 to be remodeled as a &quot;Guardians of the Galaxy&quot; themed ride?',
      correct_answer: 'Twilight Zone Tower of Terror',
      incorrect_answers: [
        'The Haunted Mansion',
        'Pirates of the Caribbean',
        'Peter Pan&#039;s Flight'
      ],
      authorId: 5
    },
    {
      id: 35,
      category: 'Sports',
      type: 'multiple',
      difficulty: 'easy',
      question: 'This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.',
      correct_answer: 'Don Cherry',
      incorrect_answers: [ 'Don McKellar', 'Don Taylor ', 'Donald Sutherland' ],
      authorId: 6
    },
    {
      id: 36,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'hard',
      question: 'According to the lore of &quot;Starbound&quot;, what does the &quot;Colony Deed&quot; do when it is placed down?',
      correct_answer: 'Sends out an advertisement for someone to move in.',
      incorrect_answers: [
        'Teleports somebody from somewhere on the planet it is placed.',
        'Teleports a random person to the location.',
        'Materializes a new being at it&#039;s location.'
      ],
      authorId: 7
    },
    {
      id: 37,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What is the name of the first level in &quot;Call of Duty:  World at War&quot;?',
      correct_answer: 'Semper Fi',
      incorrect_answers: [ 'Ring of Steel', 'Vendetta', 'Eviction' ],
      authorId: 8
    },
    {
      id: 38,
      category: 'Science:  Computers',
      type: 'multiple',
      difficulty: 'medium',
      question: 'The name of technology company HP stands for what?',
      correct_answer: 'Hewlett-Packard',
      incorrect_answers: [ 'Howard Packmann', 'Husker-Pollosk', 'Hellman-Pohl' ],
      authorId: 9
    },
    {
      id: 39,
      category: 'Science & Nature',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What is the largest living organism currently known to man?',
      correct_answer: 'Honey Fungus',
      incorrect_answers: [ 'Blue Whale', 'Redwood Tree', 'The Coral Reef' ],
      authorId: 10
    },
    {
      id: 40,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'hard',
      question: 'In which game did the character &quot;Mario&quot; make his first appearance?',
      correct_answer: 'Donkey Kong',
      incorrect_answers: [ 'Super Mario Bros.', 'Super Mario Land', 'Mario Bros.' ],
      authorId: 1
    },
    {
      id: 41,
      category: 'Entertainment:  Film',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What is the name of the queen&#039;s pet in A Bug&#039;s Life?',
      correct_answer: 'Aphie',
      incorrect_answers: [ 'Flik', 'Hopper', 'Dot' ],
      authorId: 2
    },
    {
      id: 42,
      category: 'Sports',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What team did England beat to win in the 1966 World Cup final?',
      correct_answer: 'West Germany',
      incorrect_answers: [ 'Soviet Union', 'Portugal', 'Brazil' ],
      authorId: 3
    },
    {
      id: 43,
      category: 'Sports',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?',
      correct_answer: '1-7',
      incorrect_answers: [ '1-5', '1-6', '2-6' ],
      authorId: 4
    },
    {
      id: 44,
      category: 'History',
      type: 'multiple',
      difficulty: 'hard',
      question: 'The son of which pope supposedly held a lecherous f&ecirc;te involving 50 courtesans in the papal palace?',
      correct_answer: 'Alexander VI',
      incorrect_answers: [ 'Innocent V', 'Urban II', 'Pius III' ],
      authorId: 5
    },
    {
      id: 45,
      category: 'Science:  Computers',
      type: 'multiple',
      difficulty: 'medium',
      question: 'How many bits make up the significand portion of a single precision floating point number?',
      correct_answer: '23',
      incorrect_answers: [ '8', '53', '15' ],
      authorId: 6
    },
    {
      id: 46,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'hard',
      question: 'In the Team Fortress 2 canon, what did Shakespearicles NOT invent?',
      correct_answer: 'Stairs',
      incorrect_answers: [ 'Two-Story Building', 'Rocket Launcher', 'Stage Play' ],
      authorId: 7
    },
    {
      id: 47,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'medium',
      question: 'In the co-op shooter Payday 2, which contact helps you break out Hoxton?',
      correct_answer: 'The Dentist',
      incorrect_answers: [ 'Vlad', 'The Elephant', 'The Butcher' ],
      authorId: 8
    },
    {
      id: 48,
      category: 'Entertainment:  Comics',
      type: 'multiple',
      difficulty: 'medium',
      question: 'In Bionicle, who was formerly a Av-Matoran and is now the Toa of Light?',
      correct_answer: 'Takua',
      incorrect_answers: [ 'Jaller', 'Vakama', 'Tahu' ],
      authorId: 9
    },
    {
      id: 49,
      category: 'Entertainment:  Film',
      type: 'multiple',
      difficulty: 'medium',
      question: 'What is the name of the character Nicolas Cage plays in the movie &quot;National Treasure?&quot;',
      correct_answer: 'Benjamin Franklin Gates',
      incorrect_answers: [
        'Thomas Jefferson Walker',
        'George Washington Swanson',
        'John Quincy Beckett'
      ],
      authorId: 10
    },
    {
      id: 50,
      category: 'Entertainment:  Video Games',
      type: 'multiple',
      difficulty: 'easy',
      question: 'How many obsidian blocks are required to build a nether portal in Minecraft?',
      correct_answer: '10',
      incorrect_answers: [ '14', '13', '16' ],
      authorId: 1
    }
];
let authors = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io"
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz"
    }
];

const express = require('express');
const app = express();
app.use(express.json());

app.listen(3210, () => {
    console.log('App listening on port 3210');
});


app.get('/questions', (req, res) => {
    res.send(questions)
})

app.get('/authors', (req, res) => {
    res.send(authors)
})

app.post('/authors', (req, res) => {
  let id = authors[authors.length - 1].id + 1;
  authors = [...authors, {...req.body, id: id}]

  res.send({id: id})
})

app.delete('/authors/:id', (req, res) => {
  authors = authors.reduce((a, b) => {
    if (b.id !== req.params.id) {
      return [...a, b]
    } else {
      return a
    }
  },[])
  res.send(true)
})

app.put('/authors/:id', (req, res) => {
  authors = authors.reduce((a, b) => {
    if (b.id === req.params.id) {
      b = {...req.body, id: req.params.id}
    } else {
      return [...a, b]
    }
  },[])
  res.send(true)
})

app.post('/questions', (req, res) => {
  let id = questions[questions.length - 1].id + 1;
  questions = [...questions, {...req.body, id: id}]

  res.send({id: id})
})

app.delete('/questions/:id', (req, res) => {
  questions = questions.reduce((a, b) => {
    if (b.id !== req.params.id) {
      return [...a, b]
    } else {
      return a
    }
  },[])
  res.send(true)
})

app.put('/questions/:id', (req, res) => {
  questions = questions.reduce((a, b) => {
    if (b.id === req.params.id) {
      b = {...req.body, id: req.params.id}
    } else {
      return [...a, b]
    }
  },[])
  res.send(true)
})



