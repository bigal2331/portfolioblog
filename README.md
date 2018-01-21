
# Portfolio | Blog Application
Displays some of the projects I've built

# Installing


```
-- Clone the repository
git clone https://github.com/bigal2331/portfolioblog.git
-- Install all the dependencies
git install
-- run the application - got to https://localhost:8080 in your browser
npm start
```

## Data Models
### 'Posts'

| Column                | Type                	          |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`Title`                | STRING(100) (NOT NULL)(UNIQUE)  |
|`body`             | STRING(1000) (NOT NULL)         |
