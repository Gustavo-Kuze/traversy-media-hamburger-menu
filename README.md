# Traversy Media's Hamburger Menu
A React Component based on Traversy Media's Hamburger menu &amp; overlay

## Credits
All credits related to the animations and styles in general go to Brad Traversy for his original tutorial, which you can find here -> [https://www.youtube.com/watch?v=DZg6UfS5zYg&t=954s](https://www.youtube.com/watch?v=DZg6UfS5zYg&t=954s).

Original code: 

[https://codepen.io/bradtraversy/pen/vMGBjQ](https://codepen.io/bradtraversy/pen/vMGBjQ)

## Usage
1. Install the package:
`npm i --save traversy-media-hamburger-menu`
or
`yarn add traversy-media-hamburger-menu`
2. import `Menu` and `MenuItem` to your component, like so:
``` javascript
import Menu, { MenuItem } from "traversy-media-hamburger-menu";
```
3. Now you can use it like any other react component:
``` javascript
<Menu>
    <MenuItem
        text="I'm a neat component!"
        href="http://pudim.com.br"
        onClick={() => alert("You have clicked me!")}
    />
</Menu>
```

## Styling
You can style the hamburger menu, overlay and menu items with ease like this:
``` javascript
<Menu
    hamburgerStyles={{
        backgroundColor: "#d32f2f"
    }}
    hamburgerLinesStyles={{ backgroundColor: "#333" }}
    overlayStyles={{ backgroundColor: "#333" }}
>
    <MenuItem text="Google" href="https://google.com" />
    <MenuItem text="Bing" href="https://bing.com" />
    <MenuItem text="Yahoo" href="https://yahoo.com" />
    <MenuItem
        text="Click me"
        href="#"
        onClick={() => alert("You're Awesome!")}
        menuItemStyles={{
            backgroundColor: "#d32f2f",
            color: "white"
        }}
    />
</Menu>
```

## Tips about the MenuItem
If you want to render a simple link ("a" tag), you can use MenuItem like shown previously. But what if you want to render some other component like `react-router-dom`'s `<Link>`? Well, you can do it like this:

``` javascript
<MenuItem>
    <Link to="/" />
<MenuItem/>
```
easy peasy, right? Just have in mind that the `onClick` **WILL NOT** be called in this case.

## Final words
Hope you enjoy using this component the same as I have while creating It! Give this repo a star if you liked it, and feel free to open an issue if you find any problems.
