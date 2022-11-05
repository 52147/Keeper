# Keeper
## Description
React project to store user notes.

## Set up local environement for react

### check node version
```
node --version
```
### update node to the latest version

### install react app
```
npx create-react-app my-app
```
If the installation is successful, HyperTerminal will display
```
Success! Created my-app at C:\Users\debra\my-app
```
In react directory, to run the react server by using commands.
```
npm-start
```
Start the development server.
We can see my-app in the browser. http://localhost:3000/

## Deploy react on branch github page 


- add gitignore file
```
touch .gitignore
```
- add `node_modules/` in gitignore file
- push the file to github
```
git init
git add *
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/52147/Keeper.git
git push -u origin main
```
- install npm package
```
npm install -g yarn
```
- Install github page packages in your devDependencies
```
yarn add -D gh-pages
```
- install material-ui dependency
```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

- Add url link in json file
```
"homepage":"https://52147.github.io/Keeper/"
```
- predeploy and deploy in scripts
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
## Add the material-ui dependency
- Material UI: Material UI is an open-source React component library that implements Google's Material Design.
- Run Default installation and material-ui/icon
```
npm install @mui/material @emotion/react @emotion/styled
```

```
npm install @mui/icons-material
```
### Reference
- https://mui.com/material-ui/getting-started/installation/
- https://mui.com/material-ui/material-icons/?query=add

## Render the textarea when we click it
- Render component conditionally
- Render the title, content and fab when user click it
- Use useState to track the isExpanded boolean state
- Set the initial state false 
```javascript
  // useState hook to track the isExpanded state
  // const[current sate of block, update block to expand] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
```
- Expand() to set the isExpanded to true
```javascript
  // when expand be called, we set the isExpanded to true
  // when text area be click, isExpanded become true.
  // when isEpand is true, we render the title, content and fab
  function expand() {
    setExpanded(true);
  }
```
- When isEpanded is true, return the title and content 
```javascript
        {
          // isExpanded become true, we render the title, content
          // otherwise we'll render nothing
          isExpanded && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          )
        }
```
- When user click the textarea, call the expand() and set isExpanded to true
- Row become true become 3 line when isExpanded is true
```javascript
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // if isExpanded is true, we render 3 rows, otherwise we render 1 row
          rows={isExpanded ? 3 : 1}
        />
```
- When isExpanded become true, render the fab
```javascript
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
```

## Use props to pass data between component

### Reference
https://www.freecodecamp.org/news/how-to-use-props-in-react/


## Change the background texture

- Choose a background texture
- ![image](https://user-images.githubusercontent.com/79159894/200110697-8e9d39a9-1f3f-4703-bbaf-56093fcbfff5.png)

- Copy the css
- ![image](https://user-images.githubusercontent.com/79159894/200110658-308280d9-652e-424f-a128-037f8b2841f1.png)
- Paste the url in background-image
```css
body {
  background: #eee;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  padding: 0 16px;
}
```
### Reference
https://www.transparenttextures.com/
