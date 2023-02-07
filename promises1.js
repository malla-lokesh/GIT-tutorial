const posts = [ {title: 'Post One', body: 'This is post one.'},
                {title: 'Post Two', body: 'This is post two.'}]

let lastActivityTime;

function createPosts(post){
    return new Promise((resolve, reject) => {
        posts.push(post)
        const error = false
        if(!error){
            resolve()
        }
        else{
            reject('Error: Something went wrong')
        }
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000)
    });
}

function deleteLastPost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop();
            resolve();
        }, 1000)
    });
}

createPosts({title: 'Post Three', body: 'This is post three.'})
    .then(updateLastUserActivityTime)
    .then(() => {
        console.log(posts, lastActivityTime);
        return deleteLastPost();
    })
    .then(() => {
        console.log("Updated Posts: ", posts);
    })
    .catch((error) => {
        console.log(error);
    });