const posts = [ {title: 'Post One', body: 'This is post one.'},
                {title: 'Post Two', body: 'This is post two.'}]

function getPosts(){
    setTimeout(()=>{
        let output = ''
        posts.forEach((post)=>{
            output += `<li>${post.title} - ${post.body}</li>`
        })
        document.body.innerHTML = output
    }, 0);
}

function createPosts(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post)

            const error = false

            if(!error){
                resolve()
            }
            else{
                reject('Error! Something went wrong.')
            }
        }, 0)
    })
}

function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            if(posts.length!=0){
                posts.pop()
                resolve()
            }
            else{
                reject('Array is empty now.')
            }
        }, 1000)
    })
}

createPosts({title: 'Post Three', body: 'This is post three.'})

createPosts({title: 'Post Four', body: 'This is post four.'})
.then(getPosts)
.then(deletePost)
.then(getPosts)
.then(deletePost)
.then(getPosts)
.then(deletePost)
.then(getPosts)
.then(deletePost)
.then(getPosts)
.then(deletePost)
.catch(err => console.log(err))

const p1 = Promise.resolve('Hii')
const p2 = 100
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 6000, 'Bye')
})
const updateLastUserActivity = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, )
})

Promise.all([p1, p2, p3]).then((values)=>{
    console.log(values)
})