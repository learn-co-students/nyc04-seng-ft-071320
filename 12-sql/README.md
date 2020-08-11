# Intro to SQL

# What is SQL?
- Structured Query Language - A language associated with databases 

 - What problems does it solve?
    - Persistence
      - Table full of Users
      - Table of pictures
      - Table of comments

 - What kind of databases are there?
  - Relational databases - Sqlite3, Postgresql, Mysql
  - Nonrealtional database

 - What is CRUD?
  - CRUD on the rows in our database
  - Create
  - Read
  - Update
  - Destroy
 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
  SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
  SELECT * FROM artists
  WHERE name = "black sabbath";
  -- WHERE name LIKE "%b%";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
  CREATE TABLE fans(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  );
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
  ALTER TABLE fans
  ADD COLUMN artist_id INTEGER;

```

5. Write the SQL to add yourself as a fan of Led Zeppelin? ArtistId **22**

```sql
  INSERT INTO fans (name, artist_id)
  VALUES ("Sylwia", 22), ("Eric", 169);

  -- INSERT INTO fans (name, artist_id)
  -- VALUES ("ANNIE", (SELECT id FROM artists 
  -- WHERE name LIKE "Ed motta"));
```

6. How would you update your name in the fans table to be your new name?

 ```sql
    UPDATE fans
    SET artist_id = 1
    -- WHERE name LIKE "Annie";
    WHERE ID = 3;
 ```

6.5. How would you delete a fan?

```sql

  DELETE FROM fans
  WHERE id = 3;

```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql

```

8. Write the SQL to display an artists name next to their album title

```sql
  SELECT * FROM artists
  JOIN albums
  ON artists.id = albums.artist_id;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

AGGREGATE FUNCTION

```sql
  SELECT artists.name, albums.title, COUNT(tracks.id) FROM artists
  JOIN albums 
  ON artists.id = albums.artist_id
  JOIN tracks
  ON tracks.album_id = albums.id
  GROUP BY albums.id
  LIMIT 25;
```

