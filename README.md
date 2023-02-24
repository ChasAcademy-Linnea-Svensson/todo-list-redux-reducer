# Skapa en Todolist med Redux

I dagens uppgift ska vi öva på global state med Redux och hooks-for-redux.

### Sätt upp projektet

1. Öppna en terminal och gå med `cd` där du vill skapa projektet.
2. Skriv `npm create vite@latest todolist-redux -- --template react`.
3. Gå in i projektet: `cd todolist-redux`.
4. Installera dependencies: `npm install`.
5. Installera hooks-for-redux (H4R) `npm install hooks-for-redux`

## Hur du klarar uppgiften

Utgå från koden i den tidigare todolist-uppgiften. Ta bort alla `useState` och tillhörande funktioner och skapa istället en modul för todo-listan med funktionen `createReduxModule`. Läs från modulen med hjälp av hooks och
uppdatera modulen med hjälp av action-funktioner.

Glöm inte att lägga en Provider runt din App-tag i `main.jsx`. Så här:

```
<Provider>
  <App />
</Provider>
```

## Hur du lämnar in

1. Skapa ett repo på github.
2. Ladd up dina filer till github:

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Adressen till ditt repo>
git push -u origin main
```

3. Klicka på uppgiften i canvas och ange länken till ditt repo.

---

### :boom: Success!

Efter denna uppgift ska ni kunna använda global state med Redux.

---

### :runner: Extrauppgifter

Klar? Här är lite mer att göra:

Skapa en till sida med ännu en todolist som använder useReducer. Använd react router för att kunna navigera mellan dom två sidorna.
