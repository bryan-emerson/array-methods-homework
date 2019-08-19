/**
 * ARRAY METHODS HW - Solutions
 * 
 * Welcome to Season 65 of the Bachelor! 
 * Our Bachelor, Kolton, needs your help remembering his beautiful contestants. 
 * You have received an array of objects.
 * They representing data about the women competing for Kolton's heart. 
 * Follow the prompts to job Kolton's memory using array methods.
 */

var list1 = [
  { firstName: 'Katie', lastInitial: 'M.', city: 'Los Angeles', state: 'CA', age: 24, zodiacSign: 'Aries', signUpDate: 2011 },
  { firstName: 'Lauren', lastInitial: 'K.', city: 'Philadelphia', state: 'PA', age: 26, zodiacSign: 'Gemini', signUpDate: 1994 },
  { firstName: 'Sara', lastInitial: 'T.', city: 'Encinitas', state: 'CA', age: 28, zodiacSign: 'Scorpio', signUpDate: 2012 },
  { firstName: 'Yasmein', lastInitial: 'A.', city: 'Santa Barbara', state: 'CA', age: 25, zodiacSign: 'Aries', signUpDate: 2001 },
  { firstName: 'Danielle', lastInitial: 'R.', city: 'Boston', state: 'MA', age: 25, zodiacSign: 'Aries', signUpDate: 2008 },
  { firstName: 'Marybeth', lastInitial: 'M.', city: 'New York', state: 'NY', age: 29, zodiacSign: 'Aquarius', signUpDate: 1999 },
  { firstName: 'Jillian', lastInitial: 'L.', city: 'Grand Rapids', state: 'MI', age: 27, zodiacSign: 'Libra', signUpDate: 2000 },
  { firstName: 'Krissy', lastInitial: 'M.', city: 'Raleigh', state: 'NC', age: 28, zodiacSign: 'Pisces', signUpDate: 2019 }
]

/**
 * Prompt 1
 * 
 * Q: Kolton is from California and wants to know how many contestants are
 * from his home state. Return the number of contestants from California.
 *
 * A: Seeing as we want to find a particular group of users from this list, 
 * you should be able to recognize that we need to loop through the result.
 * You've got many tools to do that but none match as well as .filter()
 * 
 * Remember that .filter() is basically a looping conditional check that returns an array
 * That's exactly what we're looking for, just scan for 'CA' on the .state property
 */
function caliLadies(list) {
  const caliContestants = list.filter( (contestant) => {
    return contestant.state === 'CA'
  })
  console.log(caliContestants)
}
caliLadies(list1)


/** 
 * Prompt 2
 * 
 * Q: Kolton recently read in his horoscope that he is likely to match with an
 * Aries. Return the number of contestants from California who are also an Aries.
 * 
 * A: This is another instance where .filter() can be our hero. 
 * You can either chain two .filter() together, or just use && to combine two conditions
 * The later is a bit cleaner, but both are valid approaches.
 */
function getThoseAries(list) {
  const caliAriesContestants = list.filter( (contestant) => {
    return contestant.state === 'CA' && contestant.zodiacSign === 'Aries'
  })
  console.log(caliAriesContestants)
}
getThoseAries(list1)


/**
 * Prompt 3
 * Q: Help Kolton out! The show has begun, and he needs to start a conversation
 * with the contestants. Return an array where each object will have a 
 * new property 'icebreaker', with the following string value:
 *
 * Hi < firstName here >, what do you like the most about < city here >?
 * 
 * A: Analyzing this prompt, you should see that we're augmenting the array.
 * This is a great use case for .map(), where we can add a new property to each object
 * That's pretty easy with a template literal, just take current properties and it to the new prop
 * In our case, we're using .greeting but you could call the new prop whatever you like.
 */

function greetContestants (list) {
  list.map( (newList) => {
    newList.greeting = `Hi, ${newList.firstName}, what do you like the most about ${newList.city}?`
    console.log(newList)
  })
}
greetContestants(list1)


/**
 * Prompt 4
 * 
 * Q: Kolton is nervous that an old flame from Michigan has made it onto his
 * season. Return true if at least one contestant is from MI, or false if 
 * there will be no contestants from MI.
 * 
 * A: Mentally modeling this out, you can see there are conditions to check for
 * We want to check for another state in the array, great use case for .filter once again
 * But we also want to make sure something gets returned.
 * We can take the result of the .filter and then make sure something came back with .length
 * If the array has any length (>= 1), we know the a few people came from MI
 * If not, we know no one came from there
 */

function exGirlfriend(list) {
  let michiganContestants = list.filter( 
    (michiganContestants) => { michiganContestants.state === 'MI' }
  )
  if (michiganContestants.length >= 1) {
    console.log(true)
  } else {
    console.log(false)
  }
}
exGirlfriend(list1)

/** 
 * Prompt 5
 * Q: Aries is of the most assertive astrological signs. Let's find out which
 * Aries contestant signed up first, if there are any.
 *
 * Return one of the following strings:
 * A) 'Hi, my name is < firstName here > < lastInitial here > from < city here >
 * , and I was the first to sign up!'
 * B) 'There will be no Aries contestants this season.'
 * (if there are no Aries contestants.)
 * 
 * A: Once again, we see a need for .filter() - we're trying to find a sorted part of the array
 * But this time, if we assume the contestants were added to the list in order,
 * then you can pretty much just return the first one.
 */

function firstAries(list) {
  let ariesContestants = list.filter(
    (ariesContestants) => { ariesContestants.zodiacSign === 'Aries' }
  )
  if (ariesContestants.length >= 1) {
    console.log(
      `Hi, my name is 
        ${ariesContestants[0].firstName} ${ariesContestants[0].lastInitial} 
        from ${ariesContestants[0].city} and I was the first to sign up!`
    )
  } else {
    console.log('There will be no Aries contestants this season.')
  }
}
firstAries(list1)

/**
 * 5 - with signUpDate sort
 * 
 * Now if you want to look at the .signUpDate property, this actually gets easier
 * .sort() is what you want - it does numerical sorts really well
 * You just pass in two params, which represent neighboring properties in an array
 * One by one, .sort() will compare the two until the list is sorted low to high
 * Just return the first one's name and you'll know who signed up first
 * 
 */
function firstAriesSorted(list) {
  let ariesContestantsSort = list.filter(
    (ariesContestantsSort) => { ariesContestantsSort.zodiacSign === 'Aries' }
  )
  let finalAriesSort = ariesContestantsSort.sort( (a, b) => {
    return a.signUpDate < b.signUpDate
  })
  console.log(`${finalAriesSort[0].firstName} was the first to sign up.`)
}
firstAriesSorted(list1)

/**
 * Bonus-
 * 
 * Q: Kolton wants to know the breakdown of each astrological sign.
 * Return an object which includes the count of each sign represented by
 * the pool of contestants.
 *
 * Example: { Aries: 4, Libra: 1, Pisces: 1 }
 * 
 * A: This is an excellent use case for .reduce()
 * .reduce() is a weird beast, but the way to think about it is that it accumulates values
 * Those accumulated values can as counters, which is exactly what we need here
 * Each time a zodiacSign is found, we bump the accumulator's current value up with ++
 * This gives us an accumulator array which has all contestant signs and their occurances
 * 
*/

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
