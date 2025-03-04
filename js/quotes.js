const quotes = [
    {
      text: "Knowing yourself is the beginning of all wisdom.",
      author: "Aristotle"
    },
    {
      text: "Courage is knowing what not to fear.",
      author: "Plato"
    },
    {
      text: "Wealth consists not in having great possessions, but in having few wants.",
      author: "Epictetus"
    },
    {
      text: "The happiness of your life depends upon the quality of your thoughts.",
      author: "Marcus Aurelius"
    },
    {
      text: "Cogito, ergo sum.",
      author: "René Descartes"
    },
    {
      text: "Science is organized knowledge. Wisdom is organized life.",
      author: "Immanuel Kant"
    },
    {
      text: "The highest activity a human being can attain is learning for understanding, because to understand is to be free.",
      author: "Baruch Spinoza"
    },
    {
      text: "Existence precedes essence.",
      author: "Jean-Paul Sartre"
    },
    {
      text: "Reason is, and ought only to be the slave of the passions.",
      author: "David Hume"
    },
    {
      text: "He who has a why to live can bear almost any how.",
      author: "Friedrich Nietzsche"
    },
    {
      text: "Man is condemned to be free.",
      author: "Jean-Paul Sartre"
    },
    {
      text: "Happiness depends upon ourselves.",
      author: "Aristotle"
    },
    {
      text: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates"
    },
    {
      text: "You become what you think about all day long.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "To be, or not to be, that is the question.",
      author: "William Shakespeare"
    },
    {
      text: "The life of man is solitary, poor, nasty, brutish, and short.",
      author: "Thomas Hobbes"
    },
    {
      text: "There is only one good, knowledge, and one evil, ignorance.",
      author: "Socrates"
    }, 
    {
      text: "The unexamined life is not worth living.",
      author: "Socrates"
    },
      {
        text: "The secret of man's being is not only to live but to have something to live for.",
        author: "Fyodor Dostoevsky"
      },
      {
        text: "Man is what he believes.",
        author: "Anton Chekhov"
      },
      {
        text: "A man takes pride in what he has done, not in what he could have done.",
        author: "Leo Tolstoy"
      },
      {
        text: "I cannot make you understand. I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.",
        author: "Franz Kafka"
      },
      {
        text: "I have the true feeling of myself only when I am unbearably unhappy.",
        author: "Franz Kafka"
      },
      {
        text: "The world is indeed full of peril, and in it there are many dark places.",
        author: "J.R.R. Tolkien"
      },
      {
        text: "I write only because there is a voice within me that will not be still.",
        author: "Sylvia Plath"
      },
      {
        text: "There is no greater agony than bearing an untold story inside you.",
        author: "Maya Angelou"
      },
      {
        text: "To live is to suffer, to survive is to find some meaning in the suffering.",
        author: "Friedrich Nietzsche"
      },
      {
        text: "The only way to deal with this life meaningfully is to find one's passion and live it.",
        author: "Søren Kierkegaard"
      },
      {
        text: "I am not what happened to me, I am what I choose to become.",
        author: "Carl Jung"
      },
      {
        text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        author: "Charles Darwin"
      },
      {
        text: "The best way out is always through.",
        author: "Robert Frost"
      },
      {
        text: "All that we see or seem is but a dream within a dream.",
        author: "Edgar Allan Poe"
      },
      {
        text: "There is no friend as loyal as a book.",
        author: "Ernest Hemingway"
      },    
      {
        text: "The only thing I know is that I know nothing.",
        author: "Socrates"
      },
      {
        text: "Freedom is the power to choose our own chains.",
        author: "Jean-Jacques Rousseau"
      },
      {
        text: "Knowing others is intelligence; knowing yourself is true wisdom.",
        author: "Lao Tzu"
      },
      {
        text: "It is not length of life, but depth of life.",
        author: "Ralph Waldo Emerson"
      },
      {
        text: "What can be added to the happiness of a man who is in health, out of debt, and has a clear conscience?",
        author: "Adam Smith"
      },
      {
        text: "God is dead. God remains dead. And we have killed him.",
        author: "Friedrich Nietzsche"
      },
      {
        text: "The only way to deal with this life meaningfully is to find one's passion and live it.",
        author: "Søren Kierkegaard"
      },
      {
        text: "The first and greatest victory is to conquer yourself.",
        author: "Plato"
      },
      {
        text: "Man is the measure of all things.",
        author: "Protagoras"
      },
      {
        text: "To thine own self be true.",
        author: "William Shakespeare"
      },
      {
        text: "There is nothing either good or bad, but thinking makes it so.",
        author: "William Shakespeare"
      },
      {
        text: "The mind is everything. What you think you become.",
        author: "Buddha"
      },
      {
        text: "The truth will set you free, but first it will make you miserable.",
        author: "James A. Garfield"
      },
      {
        text: "To live is to suffer, to survive is to find some meaning in the suffering.",
        author: "Friedrich Nietzsche"
      },
      {
        text: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
      },    
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "God does not play dice with the universe.",
    author: "Albert Einstein"
  },
  {
    text: "The struggle you're in today is developing the strength you need for tomorrow.",
    author: "Unknown"
  },
  {
    text: "Success is the best revenge.",
    author: "Unknown"
  },
  {
    text: "You can be either a slave to your mind or the master of it. The choice is entirely up to you.",
    author: "Unknown"
  },
  {
    text: "The wound is the place where the Light enters you.",
    author: "Rumi"
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    text: "Like Buddha’s aura, let your presence radiate calm and wisdom.",
    author: "Unknown"
  },
    {
      text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      author: "Dr. Seuss"
    },
    {
      text: "Fall seven times, stand up eight.",
      author: "Japanese Proverb"
    },
    {
      text: "A bird does not sing because it has an answer. It sings because it has a song.",
      author: "Chinese Proverb"
    },
    {
      text: "When the student is ready, the teacher will appear.",
      author: "Buddhist Proverb"
    },
    {
      text: "He who asks a question is a fool for a minute; he who does not ask is a fool for life.",
      author: "Chinese Proverb"
    },
    {
      text: "The person who says it cannot be done should not interrupt the person who is doing it.",
      author: "Chinese Proverb"
    },
    {
      text: "A man who has committed a mistake and doesn't correct it is committing another mistake.",
      author: "Confucius"
    },
    {
      text: "If you want happiness for an hour, take a nap. If you want happiness for a year, inherit a fortune. If you want happiness for a lifetime, help someone else.",
      author: "Chinese Proverb"
    },
    {
      text: "Rivers know this: There is no hurry. We shall get there someday.",
      author: "Winnie the Pooh"
    },
    {
      text: "It’s not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
      author: "Charles Darwin"
    },
    {
      text: "A journey of a thousand miles begins with a single step.",
      author: "Lao Tzu"
    },
    {
      text: "Do not wait for leaders; do it alone, person to person.",
      author: "Mother Teresa"
    },
    {
      text: "Life is what happens when you’re busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
      {
        text: "A single bracelet does not jingle.",
        author: "Malagasy Proverb"
      },
      {
        text: "You reap what you sow.",
        author: "Latin Proverb"
      },
      {
        text: "The child who is not embraced by the village will burn it down to feel its warmth.",
        author: "African Proverb"
      },
      {
        text: "Wisdom is like a baobab tree; no one individual can embrace it.",
        author: "African Proverb"
      },
      {
        text: "Better a diamond with a flaw than a pebble without one.",
        author: "Chinese Proverb"
      },
      {
        text: "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
        author: "William Shakespeare"
      },
      {
        text: "The tongue is like a lion. If you can tame it, you are a master of your world.",
        author: "African Proverb"
      },
      {
        text: "When there is no enemy within, the enemies outside cannot hurt you.",
        author: "African Proverb"
      },
      {
        text: "The more you know, the more you realize you don’t know.",
        author: "Aristotle"
      },
      {
        text: "He who has health has hope, and he who has hope has everything.",
        author: "Arabian Proverb"
      },
      {
        text: "A person who has not done anything wrong cannot be punished.",
        author: "Turkish Proverb"
      },
      {
        text: "The fox is clever, but the hedgehog is wiser.",
        author: "Greek Proverb"
      },
      {
        text: "It is better to light a candle than curse the darkness.",
        author: "Chinese Proverb"
      },
      {
        text: "A bird in hand is worth two in the bush.",
        author: "English Proverb"
      },
      {
        text: "Don't count your chickens before they hatch.",
        author: "English Proverb"
      },
      {
        text: "If you want to go fast, go alone. If you want to go far, go together.",
        author: "African Proverb"
      },
        {
          text: "He who is not courageous enough to take risks will accomplish nothing in life.",
          author: "Muhammad Ali"
        },  
        {
          text: "It is not what happens to you, but how you react to it that matters.",
          author: "Epictetus"
        },    
        {
          text: "You must be the change you wish to see in the world.",
          author: "Mahatma Gandhi"
        },
        {
          text: "To live is the rarest thing in the world. Most people exist, that is all.",
          author: "Oscar Wilde"
        },
        {
          text: "Those who cannot change their minds cannot change anything.",
          author: "George Bernard Shaw"
        },     
        {
          text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
          author: "Amelia Earhart"
        },
        {
          text: "Life isn’t about finding yourself. Life is about creating yourself.",
          author: "George Bernard Shaw"
        },
        {
          text: "Not until we are lost do we begin to understand ourselves.",
          author: "Henry David Thoreau"
        },
        {
          text: "The greatest wealth is to live content with little.",
          author: "Plato"
        },
        {
          text: "The way is not in the sky. The way is in the heart.",
          author: "Buddha"
        },
        {
          text: "It’s not the years in your life that count. It’s the life in your years.",
          author: "Abraham Lincoln"
        },
        {
          text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
          author: "Ralph Waldo Emerson"
        },     
  {
    text: "The best time to plant a tree was 20 years ago. The second-best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Our offense is like a theorem; there is no answer.",
    author: "Unknown"
  },
  {
    text: "It’s not who I am underneath, but what I do that defines me.",
    author: "Christian Bale"
  },
  {
    text: "Family is not defined by our genes, but by those who are there for us when we need them most.",
    author: "Unknown"
  },
  {
    text: "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine"
  },
  {
    text: "Don’t wait for the perfect moment. Take the moment and make it perfect.",
    author: "Unknown"
  },
  {
    text: "Sometimes, the hardest part of life reveals the most profound wisdom.",
    author: "Unknown"
  },
  {
    text: "The greatest weapon against stress is our ability to choose one thought over another.",
    author: "William James"
  },
  {
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein"
  },
  {
    text: "The word impossible is only found in the dictionary of fools.",
    author: "Napoleon Bonaparte"
  },
  {
    text: "Kindness is the language which the deaf can hear and the blind can see.",
    author: "Mark Twain"
  },
  {
    text: "If you don’t ask, the answer is always no.",
    author: "Unknown"
  },
  {
    text: "Failure is simply the opportunity to begin again, this time more intelligently.",
    author: "Henry Ford"
  },
  {
    text: "You might win some, you might lose some. But you challenge yourself and get better!",
    author: "Unknown"
  },
  {
    text: "I have no special talent. I am only passionately curious.",
    author: "Albert Einstein"
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  },
  // {
  //   text: "∣ψ⟩=α∣0⟩+β∣1⟩ – Quantum Computing",
  //   author: "Unknown"
  // },
  {
    text: "Your mind is like this water. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
    author: "Unknown"
  },
  {
    text: "A little laughter can make even the darkest days brighter.",
    author: "Unknown"
  },
  {
    text: "Even chaos has its rhythm; you just have to find it.",
    author: "Unknown"
  },
  {
    text: "Persistence always outlasts trouble.",
    author: "Unknown"
  },
  {
    text: "Believe in yourself, even when no one else does.",
    author: "Unknown"
  },
  {
    text: "Kindness is the most influential gift in life.",
    author: "Unknown"
  },
  {
    text: "I think my biggest strength is my ability to handle the pressure. I can stay calm when the stakes are high.",
    author: "Unknown"
  },
  {
    text: "Doubt is only removed by action. If you’re not working, that’s where doubt comes in.",
    author: "Unknown"
  },
  {
    text: "Humble yourself. Life can change in a moment.",
    author: "Unknown"
  },
  {
    text: "In life and algorithms, every operation counts. Push your efforts, pop your doubts.",
    author: "Unknown"
  },
  {
    text: "Whatever motivates you, create a path and pursue it—your determination will lead you to success.",
    author: "Unknown"
  }
];

console.log(quotes);

function initializeQuotes() {
  const quoteText = document.getElementById('random-quote');
  const quoteAuthor = document.getElementById('quote-author');

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  const quote = getRandomQuote();
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `- ${quote.author}`;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(document.querySelector('.quote-container'));
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeQuotes);

// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});
