const quotes = [
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
    text: "Your mind is like water. When agitated, it’s hard to see. Let it settle, and the answer becomes clear.",
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
    text: "The best time to plant a tree was 20 years ago. The second-best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Our offense is like a theorem; there is no answer.",
    author: "Unknown"
  },
  {
    text: "It’s not who I am underneath, but what I do that defines me.",
    author: "Batman"
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
    text: "In life, just like in coding, sometimes you have to debug your mind before you can solve the problem.",
    author: "Unknown"
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
  {
    text: "The road to success is dotted with many obstacles, but persistence overcomes them all.",
    author: "Unknown"
  },
  {
    text: "In a world chasing trends, I embrace the timeless. Amid chaos, I discover rhythm.",
    author: "Unknown"
  },
  {
    text: "∣ψ⟩=α∣0⟩+β∣1⟩ – Quantum Computing",
    author: "Unknown"
  },
  {
    text: "Your mind is like this water. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
    author: "Unknown"
  },
  {
    text: "Family isn’t defined by blood, but by love and loyalty.",
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