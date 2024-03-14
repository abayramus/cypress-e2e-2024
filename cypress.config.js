const { defineConfig } = require("cypress");
//for postgre sql
const { Pool } = require("pg");

const dbConfig = {
  user : "select_user",
  host : "managementonschools.com",
  database : "school_management",
  password : "43w5ijfso",
  port : 5432
} 

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task',{
        async connectDB(query){
          const pool = new Pool(dbConfig);
          const results = await pool.query(query);
          await pool.end(); 
          return results
        }
      })
     
    },
    baseUrl: "https://dummy.restapiexample.com",
  },
});