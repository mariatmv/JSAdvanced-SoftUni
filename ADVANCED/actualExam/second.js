class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.ids = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

    like (username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!")
        }
        if (username === this.creator) {
            throw new Error("You can't like your own story!")
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike (username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!")
        }
        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`
    }

    comment (username, content, id) {
        if (id === undefined) {
            id = this.ids.length + 1;
        }
        if(!this.ids.includes(id)) {
            if (id > this.ids.length + 1) {
                id = this.ids.length + 1
            }
            this._comments.push({
                Id: id,
                Username: username,
                Content: content,
                Replies: []
            })
            this.ids.push(id)
            return `${username} commented on ${this.title}`
        }
        else {
            let currentComment = this._comments.find(x => x.Id === id);
            let currentReply = currentComment.Replies.length + 1
            let replyId = `${id}.${currentReply}`
            currentComment.Replies.push({
                Id: Number(replyId),
                Username: username,
                Content: content
            })
            return "You replied successfully"
        }
    }

    toString (sortingType) {
        if (sortingType === 'asc') {
            this._comments.sort((a, b) => {
                 return a.Id - b.Id
            })
                .forEach(comment => comment.Replies.sort((a, b) => {
                    return a.Id - b.Id
                }))
        } else if (sortingType === 'desc') {
            this._comments.sort((a, b) => {
                return b.Id - a.Id
            })
                .forEach(comment => comment.Replies.sort((a, b) => {
                    return b.Id - a.Id
                }))
        } else if (sortingType === 'username') {
            this._comments.sort((a, b) => {
                return a.Username.localeCompare(b.Username)
            })
                .forEach(comment => comment.Replies.sort((a, b) => {
                    return a.Username.localeCompare(b.Username)
                }))
        }

        let output = []
        output.push(`Title: ${this.title}`)
        output.push(`Creator: ${this.creator}`)
        output.push(`Likes: ${this._likes.length}`)
        output.push(`Comments:`)
        for (let comment of this._comments) {
            output.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`)
            if (comment.Replies.length > 0) {
                for (let reply of comment.Replies) {
                    output.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`)
                }
            }
        }

        return output.join('\n')


    }
}

module.exports = Story


let art = new Story("My Story", "Anny");
art.comment("Sammy", "Some Content");
console.log(art.comment('zdr', 'kdcsd', 1))
console.log(art.comment('avx', 'kdcsd', 3))

console.log(art.toString('asc'));