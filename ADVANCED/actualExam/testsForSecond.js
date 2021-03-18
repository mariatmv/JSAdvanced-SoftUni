const describe = require('mocha').describe;
const assert = require('chai').assert;
const Story = require('./second');

describe('djd', () => {
    it('ds', () => {
        let art = new Story("My Story", "Anny");
        assert.equal(art.like("John"), "John liked My Story!");
        assert.equal(art.likes, "John likes this story!");
        assert.throw(()=>art.dislike("Sally"), "You can't dislike this story!");
        assert.equal(art.like("Ivan"),"Ivan liked My Story!");
        assert.equal(art.like("Steven"), "Steven liked My Story!");
        assert.equal(art.likes, "John and 2 others like this story!");
        assert.equal(art.comment("Anny", "Some Content"),"Anny commented on My Story");
        assert.equal(art.comment("Ammy", "New Content", 1),"You replied successfully");
        assert.equal(art.comment("Zane", "Reply", 2),"Zane commented on My Story");
        assert.equal(art.comment("Jessy", "Nice :)"), "Jessy commented on My Story");
        console.log(art.comment("SAmmy", "Reply@", 2), "You replied successfully");

        assert.equal(art.toString('asc'),`Title: My Story
Creator: Anny
Likes: 3
Comments:
-- 1. Anny: Some Content
--- 1.1. Ammy: New Content
-- 2. Zane: Reply
--- 2.1. SAmmy: Reply@
-- 3. Jessy: Nice :)`);
    })
})
