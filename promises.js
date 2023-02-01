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

const func = async() => {
    const createPosts = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({title: 'Post Three', body: 'This is post three.'})
            getPosts()
            resolve(`post pushed`)
        }, 1000)
    })

    const deletePost = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(posts.length!=0){
                posts.pop()
                resolve('recent post deleted')
            }
        }, 1000)
    })

    let create = await createPosts
    console.log(`${create}`)

    let Delete = await deletePost
    console.log(`${Delete}`)
}

func().then(() => {})