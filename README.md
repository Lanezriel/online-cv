# My online CV / Folio

`This project is currently not finished.`

It needs much refactoring and parts of it are not even created yet.
The purpose of this projet is, of course, to show you my skills and knowledge (especially about Web development at first).
I guess this project will hardly have a good file architecture because this is kind of a playground.

I'm still trying to keep a basic file architecture.

You will see CSS-in-JS as much as SCSS (again, playground and some things are not possible or easy enough in the other way in my understanding for now).
Also, as Material-ui v5 will change their mindset about CSS-in-JS and use Styled Component (emotion and I not remember what) instead of JSS, I'm still waiting further informations whether they are willing to keep some sort of compatibility with JSS or not. In fact, their documentation is still incomplete for v5 and no clear explanation has been done at this time about how their new choice will work exactly (of course, inside Material-ui itself; I could also take any other CSS-in-JS library by myself but as I installed Material-ui, let's continue like that).

I used `Bulma` CSS framework (which is responsive and minimalist).
I might change that in the future but I didn't like some of Material-ui stuffs (and some are missing as they seem to be focused `mobile first` which is completely understandable at these times).

I decided not to create any Backend for my project (as it is not meant to have much interactions with stored data or any other sources).
I just used a cloud database : Google's `Cloud Firestore` which is a NoSQL database.
Some data haven't been integrated in that database yet. I chose to create the new data in the database first and migrate the other later (with the refactoring).

## The game ?

Yes, I included a mini 2D game inside the home page.
It will take some time to go further but you have a bit of preview of what I'd like to end up with.
It is supposed to tell `my story` (like a small action-RPG adventure).

This game is in creation with `Godot Engine v3.2.3`.

I didn't have time to add mobile touch controls yet but the `Options page` has been pre-created in that purpose.

Unfortunately, the way I integrated this game inside my project is not the best.
I used an `iframe` which is kind of a really old stuff.
I haven't found yet (and stopped looking) how to embed `Web Assembly (WASM)` in my project, using `Godot Engine` required scripts for launch, and everything needed to run the game in a web browser.

Guess it would be easier for those kind of stuff to just be created for specific OS like Windows, MacOS, Linux, Android or iOS.
(Which can be done really easy with Godot Engine, apparently).