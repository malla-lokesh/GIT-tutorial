console.log('Person1: shows ticket')
console.log('Person2: shows ticket')

// using Promises
const wifeWillBringTickets = new Promise((resolve, reject)=>{
    console.log("wife: I'll be back in a minute")
    setTimeout(()=>{
        resolve('Person3: shows ticket')
    }, 2000)
})

const getPopcorn = wifeWillBringTickets.then((msg) => {
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')
    return new Promise((resolve, reject) => {
        resolve(`${msg} popcorn`)
    })
})

const butter = getPopcorn.then((pop) => {
    console.log('husband: we should go in now')
    console.log('wife: I need butter')
    return new Promise((resolve, reject) => {
        resolve(`${pop} with butter`)
    })
})

const getColdDrinks = butter.then((ticket) => {
    console.log('wife: I want Cold drink too.. please dear')
    return new Promise((resolve, reject) => {
        resolve(`${ticket} with cold drink`)
    })
})

getColdDrinks.then((msg) => console.log(msg))

// Using Async Wait
const preMovie = async() => {
    const wifeWillBringTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Person3: shows ticket')
        }, 3000)
    })

    const getPopcorn = new Promise((resolve, reject) => resolve('Here you go popcorn'))
    
    const addButter = new Promise((resolve, reject) => resolve('take this butter'))

    const getColdDrinks = new Promise((resolve, reject) => resolve('have this drink'))
    
    let ticket = await wifeWillBringTickets

    console.log(`${ticket}`)

    let popcorn = await getPopcorn

    console.log('wife: But I want popcorn')
    console.log(`husband: ${popcorn}`)

    let butter = await addButter

    console.log('wife: I want to add butter to this popcorn')
    console.log(`husband: ${butter}`)

    let drink = await getColdDrinks

    console.log('wife: I want Cold drink too.. please dear')
    console.log(`husband: ${drink}`)
    
}

preMovie().then(() => {})

console.log('Person4: shows ticket')
console.log('Person5: shows ticket')