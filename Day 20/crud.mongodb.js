use("CrudDB")

db.createCollection("courses")

db.courses.insertOne({
    name:"Web Dev",
    price:0,
    projects:45
})