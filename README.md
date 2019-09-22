# Traversy Media's Hamburger Menu
A React Component based on Traversy Media's Hamburger menu &amp; overlay


**NOTE**: I made this package for fun and I'm not aiming to use It in any real projects. All credits related to the animations and styles in general go to Brad Traversy for his original tutorial, which you can find [here](https://www.youtube.com/watch?v=DZg6UfS5zYg&t=954s).

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
4. That's it! Give this repo a star if you liked it, and feel free to open an issue if you find any problems.

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

## Menu props
// TODO...

## Menu Items props
// TODO...
