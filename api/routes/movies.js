const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");
const { json } = require("express");


//Create
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovies = new Movie(req.body);
        try {
            const savedMovie = await newMovies.save();
            res.status(201).json(savedMovie);
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You are not Allowed :(" );
    }
});

//Update
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updatedMovie);
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You are not Allowed :(");
    }
});

//Deleted
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json("Movie deleted successfully :)");
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You are not Allowed :(");
    }
});

// Get Movies
router.get("/find/:id", verify, async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id,)
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error)
    }
}
);

// Get Random Movie for the featured movies
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        // console.log(movie)
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
}
);

// Get All 
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
           const movies = await Movie.find()
            res.status(200).json(movies.reverse());
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("You are not Allowed :(");
    }
});

module.exports = router