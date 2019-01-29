// ARRAY METHODS HW

// Welcome to Season 65 of the Bachelor! Our Bachelor, Kolton, needs your help remembering his beautiful contestants. You have received an array of objects representing data about the women competing for Kolton's heart. Follow the prompts to job Owen's memory using array methods.

// You will be given an array of objects representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

var list1 = [
  { firstName: 'Katie', lastInitial: 'M.', city: 'Los Angeles', state: 'CA', age: 24, zodiacSign: 'Aries' },
  { firstName: 'Lauren', lastInitial: 'K.', city: 'Philadelphia', state: 'PA', age: 26, zodiacSign: 'Gemini' },
  { firstName: 'Sara', lastInitial: 'T.', city: 'Encinitas', state: 'CA', age: 28, zodiacSign: 'Scorpio' },
  { firstName: 'Yasmein', lastInitial: 'A.', city: 'Santa Barbara', state: 'CA', age: 25, zodiacSign: 'Aries' },
  { firstName: 'Danielle', lastInitial: 'R.', city: 'Boston', state: 'MA', age: 25, zodiacSign: 'Aries' },
  { firstName: 'Marybeth', lastInitial: 'M.', city: 'New York', state: 'NY', age: 29, zodiacSign: 'Aquarius' },
  { firstName: 'Jillian', lastInitial: 'L.', city: 'Grand Rapids', state: 'MI', age: 27, zodiacSign: 'Libra' },
  { firstName: 'Krissy', lastInitial: 'M.', city: 'Raleigh', state: 'NC', age: 28, zodiacSign: 'Pisces' }
]

// Prompt 1

// Kolton is from California and wants to know how many contestants are from his home state. Return the number of contestants from California.

function californiaDevelopers (list) {
  let count = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i].state === 'CA') {
      count += 1
    }
  }
  console.log(count)
}
californiaDevelopers(list1)

// Prompt 2

// Kolton recently read in his horoscope that he is likely to match with an Aries. Return the number of contestants from California who are also an Aries.

function californiaAries (list) {
  let count = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i].state === 'CA' && list[i].zodiacSign === 'Aries') {
      count += 1
    }
  }
  console.log(count)
}
californiaAries(list1)

// Prompt 3

// Help Kolton out! The show has begun, and he needs to start a coversation with the contestants. Return an array where each object will have a new property 'icebreaker' with the following string value:

// Hi < firstName here >, what do you like the most about < city here >?

function greetContestants (list) {
  list.map(function (newList) {
    newList.greeting = 'Hi ' + newList.firstName + ',' + ' what do you like the most about ' + newList.city + '?'
    console.log(newList)
  })
}
greetContestants(list1)

// Prompt 4

// Kolton is nervous that an old flame from Michigan has made it onto his season. Return:

// true if at least one contestant is from MI; or
// false if there will be no contestants from MI.

function exGirlfriend (list) {
  let michiganContestants = list.filter(michiganContestants => michiganContestants.state === 'MI')
  if (michiganContestants.length >= 1) {
    console.log(true)
  } else {
    console.log(false)
  }
}
exGirlfriend(list1)

// Prompt 5

// Aries is of the most assertive astrological signs. Let's find out which Aries contestant signed up first, if there are any. Return one of the following strings:

// 'Hi, my name is < firstName here > < lastInitial here > from < city here >, and I was the first to sign up!'; or
// 'There will be no Aries contestants this season.' if there are no Aries contestants.

function firstAries (list) {
  let ariesContestants = list.filter(ariesContestants => ariesContestants.zodiacSign === 'Aries')
  if (ariesContestants.length >= 1) {
    console.log('Hi, my name is ' + ariesContestants[0].firstName + ' ' + ariesContestants[0].lastInitial + ' from ' + ariesContestants[0].city + ', and I was the first to sign up!')
  } else {
    console.log('here will be no Aries contestants this season.')
  }
}
firstAries(list1)

// BONUS

// Kolton wants to know the breakdown of each astrological sign. Return an object which includes the count of each sign represented by the pool of contestants.

// { javascript: 2, python: 1, ruby: 3 }

function zodiacCount (list) {
  return list.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.zodiacSign]) {
      accumulator[currentValue.zodiacSign]++
    } else {
      accumulator[currentValue.zodiacSign] = 1
    }
    return accumulator
  }, {})
}
console.log(zodiacCount(list1))
