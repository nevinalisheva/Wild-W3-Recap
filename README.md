## Wild-W3-Recap

# Git/Github
------
### GitHub flow: introduction

Here is a link to the elaborate guide of Github: https://guides.github.com/activities/hello-world/
Following the series of steps defined there are crucial, because:

- Minimizes the risk of conflicts by preventing several devs from working on the same code at the same time (through the use of branches);
- Making it easier to control  the code produced by each dev, which ensures the quality of the project (through the use of pull requests ).


#### Commands Workflow
----
`$ git branch` shows all the branches

`$ git branch thirsty` creates a new branch named "thirsty"

`$ git checkout thirsty` switches to branch "thirsty". Now you are on branch "thirsty"

*after making some changes on your code in file called thirsty.html*

`$ git add hungry.html` before doing git commit (saving your changes) you need to add which files you want to commit

`$ git add .` simply adds all the files in the folder

`$ git commit -m "water"` after this command you have commited your changes to your branch thirsty but your master(main) branch is still not updated

`$ git log`  shows you the committed changes

*before merging the committed changes to your master(main) branch you need to switch to your main branch*

`$ git checkout master` now you are on your main branch

`$ git merge thirsty` merge thirsty branch into the main branch

*it will ask you to type in the commit message. if you type `:wq` it will save the commit without message and your merge will be done*

`$ git remote add origin <REMOTE_URL>`  In order to send your sources to a remote repository, you must first inform your local repository of the existence of the remote repository

`$ git remote set-url origin <REMOTE_URL>`  change origin

`$ git remote -v` check origin

`$ git push origin main`  pushes the current active branch to github. (in this case it pushes the master branch)

*If you are working on a team project you should always pull from remote first, to have the updated version on local. Then push your changes*

`$ git pull origin master`  pulls the newest version available on github

*Source: https://www.youtube.com/watch?v=sgzkY5vFKQQ&t=127s*

##### Delete or Revert

`$ git branch -d thirsty` deletes branch thirsty

`$ git log --oneline` shows you all the commits with a reference number

`$ git checkout <referenceNumber>` Takes you back to the referred commit. You see the older version of your branch. It's read-only.

`$ git revert <referenceNumber>` Undoes the referred commit. It doesn't delete the referred commit, it simply creates a new commit "Revert 'referred commit'. 
This way you disregard the changes you made at the referred commit.

`$ git reset <referenceNumber>` Takes you back to the referred commit. When used in this way, it erases the history, but the files on your computer remain intact in case you want to restore. If you do `$git log --oneline` the last commit you'll see will be the one you referred to.

`$ $ git reset <referenceNumber> --hard`  It will permanently delete the commits and the code

*After making the commit you realize that you need to add something to you html. Edit your html, do a `$git add <html>*` and then type the following command:*

`$git commit --amend -m "Some Message"`changes the previous commit you made



# DOM (Document Object Model)
---
DOM is an interface used to manipulate the content of an HTML page.
When your browser parses your HTML and CSS code, it also creates a javascript object representation of the document.
This model is used to manipulate the webpage.

Some of the ways to select a DOM element are:

`document.querySelector` method works the same way as a CSS selector. In parentheses, simply write the desired selector. If there is more than one element with the same selector in the document (ex. multiple h1), the one selected by default will be the first occurrence.

Use document`document.getElementById` or `document.getElementByTagName` to select HTML Elements.

If you want to get an array with multiple elements you can use `document.querySelectorAll`.

The document object comes with many properties and methods. Here is a list to all those methods: https://developer.mozilla.org/en-US/docs/Web/API/Document

`InnerHTML`

The innerHTML method is used to change the content of a HTML tag.

```
const title = document.querySelector('.title');
title.innerHTML = "Hello, Bob!";
```
In this example, we select the h1 with the title class, and we change the content for Hello, Bob!

#### Create new HTML element

To create an element, use the `createElement` method:

```
const newCatImage = document.createElement('img');
```

In this case, because we want to create an image, we need to give a source to this new image:

```
newCatImage.src = "https://placekitten.com/408/287";
```

Finally, to add it to the DOM, we can use the `appendChild` method.

`appendChild` will add passed element at the end of the element you're using the method on.

In this example, it will add newCatImage at the end of document.body:

```
document.body.appendChild(newCatImage);
```
This method is also available on other HTML nodes, for example, you can use it to add an element to a <div>.

```
const myDiv = document.querySelector('.myDiv');
myDiv.appendChild(myElement);
```

#### Change the position of a DOM element

To change the position of an element, use `appendChild`.

Pass the element you want to move as a parameter; this will not create a copy but will move the element.

```
newDiv.appendChild(newCatImage);
```

#### Remove a DOM Element

You can remove a DOM element by using the `remove` property.

```
myElement.remove();
```

#### Change the style of elements

It's possible to change the style of an HTML element using the `style` property.

The name of the property should be written using camel case *(we can't use - when naming in Javascript)*.


```
someDiv.style.backgroundColor = "lightblue";
someText.style.fontSize = "20px";
```

#### Add/Remove a class to an element

It's also possible to add/remove a class on an element.

```
element.classList.add('myClass');
element.classList.remove('myClass');
```

> Note: In this case, as the nature of the element is specified *(classList)* we don't have to use the . before the name of the class.

#### Event handlers

For the click handling, you can change the `onclick` property by setting a function on it. This function will be executed by the browser when the event is triggered *(and only when this happens)*.

```
someDiv.onclick = function () {
  someDiv.style.backgroundColor = "red";
};
```
#### AddEventListener

`AddEventListener` is a method that accepts as a first parameter the type of event, and the second is a callback function.

```
someDiv.addEventListener('click', function () {
  someDiv.style.backgroundColor = "red";
});
```

`AddEventListener` can be used to listen to a lot of different events, such as:

- click
- mousedown
- mouseup
- mousemove
- mouseover
- mouseleave
...

`onsubmit`

```
const form = document.querySelector("#form");

form.onsubmit = function () {
  console.log("Hello world!");
};
```

The problem with this approach is that when `onsubmit` is triggered the page will by default refresh itself. To prevent the page to refresh, we can use a method that you get in the event object called `preventDefault`. This object is accessible as the first parameter of the callback function (the event handler) that is given to `addEventListener`.

`preventDefault` will prevent the page from reloading itself when the form is sent.

```
const form = document.querySelector("#form");

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("Hello, world!");
};
```

#### Toggle a class

Using the `classList.toggle` method on an element will add the class if the class is not here, if the class is already present then it will remove it.
For example, in the case you want to create a dropdown menu. When the user clicks on it, it removes or adds the class visible.

```
element.classList.toggle("myclass");
```

Link for more info: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

# Node.js and NPM
------
Node is able to execute JS code outside of a web browser. Node.js has an integrated package system (NPM), a non-blocking model, great performances (V8 engine), etc.
Node is useful for developing web servers, web services(API), applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications, etc.

### What is a module?

A module in JavaScript is just a file containing the related code. Programs are divided into modules like a book is divided into chapters to enhance maintability, reusability etc.

The import and export keywords are being used to share and receive functionalities respectively across different modules. 
The export keyword is used to make a variable, function, class or object accessible to other modules.

`module.exports` property (available in every file) allows your code to be exposed to the rest of the application that will require it. 
```
module.exports = {
  name: name,
  age: age,
  displayPassions: displayPassions
}
  ```

`require('./fileName')`  imports some JS code to store it in a variable. In brackets is the path where the code is. 

```
const userInfo = require('./userInformation')
```

  ### What is a NPM?
  
 The world's largest Software Library (Registry) NPM is also a software Package Manager and Installer.
NPM allows us to install and manage pieces of reusable code that we can import (require) in our projects. Those pieces of code are called "packages", "dependencies", or "external modules".

Be careful while using the packages you find on NPM. First it's important to decide whether you really need a package or not. Then you should take a look at the:
- The package description (what problems it tries to solve, the main features currently supported,...)
- -The installation process
- Usage examples
- A link to a more detailed documentation
- Licensing information https://medium.com/@vovabilonenko/licenses-of-npm-dependencies-bacaa00c8c65 https://www.npmjs.com/package/legally (A tool to discover the licenses of the packages you are using)
- On the right of the page: the official website, the number of downloads per week, the current version, etc and make an educated decision.

> Note: A lot of open source software comes with absolutely no warranty whatsoever.
Some packages have security vulnerabilities and some of them are even malicious. 

##### *Signs of a "good package":*

- Documentation is well made and easy to read
- Major projects rely on this package
- The package is unit-tested, with good code coverage
- Important issues that might affect us are being addressed quickly
- There is a big, community behind it (lots of weekly downloads, lots of Github stars).

`npm install <package>` installs a package from NPM

All npm packages are defined in files called *package.json*.

`package.json` lists all of the project information, scripts, packages and dependencies that the code needs to work.


NPM can also manage dependencies. The dependencies are defined in your project's package.json file and they allow the project to install the versions of the modules it depends on. 
By running an install command inside a project, you can install all of the dependencies listed in the project's package.

`node_modules` contains all the code related to the packages we use.

> Important: Do not ever commit and push your node_modules folder to Github! It will make your repository too heavy. When you start a new Node project, make sure you have a `.gitignore` file at the root of the project with node_modules inside. You can simply run `echo node_modules/ >> .gitignore` if it's not the case.




Here is a link to the elaborate guide of Github: https://guides.github.com/activities/hello-world/
Following the series of steps defined there are crucial, because:

- Minimizes the risk of conflicts by preventing several devs from working on the same code at the same time (through the use of branches);
- Making it easier to control  the code produced by each dev, which ensures the quality of the project (through the use of pull requests ).



